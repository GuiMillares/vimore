import { createFileRoute, Link } from "@tanstack/react-router";

const posts = [
  {
    slug: "exemplo-monitoramento-proativo",
    titulo: "Por que monitoramento reativo custa mais do que parece",
    resumo:
      "Um exemplo prático: como a ausência de alertas de capacidade levou um cliente a comprar servidor emergencial — e o que mudou depois.",
    data: "2026-06-01",
    leitura: "6 min",
    categoria: "Infraestrutura",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — vimore · Notas técnicas para decisores de TI" },
      {
        name: "description",
        content:
          "Artigos curtos e práticos sobre infraestrutura, dados, segurança e automação para gestores de pequenas e médias empresas no Brasil.",
      },
      { property: "og:title", content: "Insights — vimore" },
      { property: "og:description", content: "Notas técnicas para quem toma decisão de TI em PMEs." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-20 pb-12 md:pt-28 md:pb-16 max-w-4xl">
          <p className="overline-accent">Insights</p>
          <h1 className="mt-6 text-4xl md:text-6xl">
            Notas técnicas para<br/>
            <span className="text-accent">decisores de TI.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Artigos curtos, baseados em projetos reais. Sem checklist genérico:
            só o que aprendemos operando ambientes de produção em PMEs
            brasileiras.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <ul className="divide-y divide-border border-y border-border">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group grid gap-4 md:grid-cols-[8rem_1fr_auto] md:items-baseline py-8 hover:bg-surface/40 -mx-4 px-4 transition"
                >
                  <time dateTime={p.data} className="font-mono text-sm text-subtle">
                    {formatDate(p.data)}
                  </time>
                  <div>
                    <p className="overline">{p.categoria} · {p.leitura}</p>
                    <h2 className="mt-2 text-xl md:text-2xl group-hover:text-accent transition">
                      {p.titulo}
                    </h2>
                    <p className="mt-3 text-muted-foreground max-w-2xl">{p.resumo}</p>
                  </div>
                  <span aria-hidden className="hidden md:inline text-subtle group-hover:text-accent transition">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-subtle font-mono">
            * Layout pronto. Substitua os artigos placeholder pelo conteúdo real conforme publicação.
          </p>
        </div>
      </section>
    </>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}
