import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumbs, breadcrumbJsonLd } from "../components/Breadcrumbs";

type Post = {
  slug: string;
  titulo: string;
  resumo: string;
  data: string;
  atualizado: string;
  leitura: string;
  categoria: string;
  autor: string;
};

const posts: Record<string, Post> = {
  "exemplo-monitoramento-proativo": {
    slug: "exemplo-monitoramento-proativo",
    titulo: "Por que monitoramento reativo custa mais do que parece",
    resumo:
      "Um exemplo prático: como a ausência de alertas de capacidade levou um cliente a comprar servidor emergencial — e o que mudou depois.",
    data: "2026-06-01",
    atualizado: "2026-06-10",
    leitura: "6 min",
    categoria: "Infraestrutura",
    autor: "[Nome do Sócio]",
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts[params.slug];
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Artigo — vimore" }] };
    const breadcrumbItems = [
      { label: "Início", to: "/" },
      { label: "Artigos", to: "/blog" },
      { label: loaderData.titulo },
    ];
    return {
      meta: [
        { title: `${loaderData.titulo} — vimore` },
        { name: "description", content: loaderData.resumo },
        { property: "og:title", content: loaderData.titulo },
        { property: "og:description", content: loaderData.resumo },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "article:published_time", content: loaderData.data },
        { property: "article:modified_time", content: loaderData.atualizado },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.titulo,
            description: loaderData.resumo,
            datePublished: loaderData.data,
            dateModified: loaderData.atualizado,
            author: { "@type": "Person", name: loaderData.autor },
            publisher: { "@type": "Organization", name: "vimore" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbJsonLd(breadcrumbItems)),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();
  return (
    <article>
      <header className="border-b border-border">
        <div className="container-page pt-20 pb-12 md:pt-28 md:pb-16 max-w-3xl">
          <Breadcrumbs items={[
            { label: "Início", to: "/" },
            { label: "Artigos", to: "/blog" },
            { label: post.titulo },
          ]} />
          <p className="overline-accent mt-6">{post.categoria} · {post.leitura}</p>
          <h1 className="mt-6 text-3xl md:text-5xl">{post.titulo}</h1>
          <p className="mt-8 text-lg text-muted-foreground">{post.resumo}</p>
          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-sm">
            <Meta k="Publicado" v={formatDate(post.data)} />
            <Meta k="Última atualização" v={formatDate(post.atualizado)} />
            <Meta k="Autor" v={post.autor} />
          </dl>
        </div>
      </header>

      <div className="container-page py-16 md:py-20 max-w-3xl text-muted-foreground space-y-6 [&_h2]:text-foreground [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:leading-relaxed">
        <p>
          [Substitua este conteúdo pelo artigo real. O layout abaixo é exemplo de
          estrutura: parágrafos curtos, subtítulos H2 para escaneabilidade e
          listas para enumerar pontos práticos.]
        </p>
        <h2>Qual era o problema antes do monitoramento</h2>
        <p>
          Descreva o contexto concreto. Um exemplo: cliente com servidor de
          aplicação chegando a 95% de uso de disco sem qualquer alerta. Custo
          oculto: o problema só apareceu quando o serviço caiu numa
          sexta-feira à noite.
        </p>
        <h2>O que implementamos para resolver</h2>
        <p>
          Liste em parágrafos diretos as decisões técnicas: instalamos Zabbix
          com templates personalizados, definimos thresholds com base no
          histórico real e configuramos alertas escalonados por canal.
        </p>
        <h2>Qual foi o resultado depois da mudança</h2>
        <p>
          Apresente o impacto mensurável: zero incidentes não previstos no
          trimestre seguinte, compra de capacidade planejada em janela
          comercial, redução de horas de plantão.
        </p>
        <h2>Como aplicar o monitoramento proativo na sua empresa</h2>
        <p>
          Encerre com uma orientação prática que o leitor possa começar
          amanhã, mesmo sem contratar consultoria.
        </p>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-10 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4">
            <span aria-hidden>←</span> Voltar para todos os artigos
          </Link>
        </div>
      </div>
    </article>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="overline">{k}</dt>
      <dd className="mt-1 text-foreground">{v}</dd>
    </div>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}
