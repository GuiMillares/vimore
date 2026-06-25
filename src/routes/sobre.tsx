import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, breadcrumbJsonLd } from "../components/Breadcrumbs";

const breadcrumbItems = [
  { label: "Início", to: "/" },
  { label: "Sobre" },
];

const founders = [
  {
    initials: "V",
    name: "Victor Oliveira",
    highlightWordIndex: 0,
    role: "Sócio · Infraestrutura e Cloud",
    bio: "Ai ai, pouco se fala nesse Sócio",
    photo: "/founders/victor.jpg",
  },
  {
    initials: "I",
    name: "Igor Fagundes",
    highlightWordIndex: 0,
    role: "Sócio · Dados e BI",
    bio: "[Substitua por 2–3 frases descrevendo experiência real com engenharia de dados, Power BI, Databricks e setores atendidos. Mencione tamanho de bases ou projetos quando possível.]",
    photo: "/founders/igor.jpg",
  },
  {
    initials: "M",
    name: "Guilherme Millares",
    highlightWordIndex: 1,
    role: "Sócio · Cibersegurança e Automação",
    bio: "[Substitua por 2–3 frases descrevendo experiência real em segurança, ITSM e desenvolvimento de integrações. Mencione frameworks (ISO 27001, NIST) ou ferramentas (GLPI, Python) com que opera.]",
    photo: "/founders/guilherme.jpg",
  },
];

function FounderName({ name, highlightWordIndex }: { name: string; highlightWordIndex: number }) {
  const words = name.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          {i === highlightWordIndex ? (
            <>
              <span className="text-accent">{word[0]}</span>
              {word.slice(1)}
            </>
          ) : (
            word
          )}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

const principles = [
  { k: "Atendimento direto", v: "Quem fecha o contrato é quem opera. Você fala com engenheiros sênior, não com pré-venda." },
  { k: "Escopo honesto", v: "Se o problema é menor do que parece, dizemos. Se é maior, também. Não inventamos projeto." },
  { k: "Sem revenda", v: "Não recebemos comissão de fabricante. A recomendação serve ao problema, não à margem." },
  { k: "Documentação como entrega", v: "Toda solução vai com documentação utilizável. Sua empresa não fica refém do consultor." },
];

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — vimore · Três engenheiros, um time responsável" },
      {
        name: "description",
        content:
          "Conheça os fundadores da vimore — três engenheiros brasileiros que operam ambientes de produção e atendem PMEs com responsabilidade técnica direta.",
      },
      { property: "og:title", content: "Sobre a vimore" },
      { property: "og:description", content: "Três engenheiros sênior, atendimento direto, sem revenda." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(breadcrumbItems)),
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-20 pb-16 md:pt-28 md:pb-24 max-w-4xl">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="overline-accent mt-6">Sobre</p>
          <h1 className="mt-6 text-4xl md:text-6xl">
            Três engenheiros.<br />
            <span className="text-accent">Você fala com quem faz.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            A vimore nasceu da percepção repetida de que a maior parte das
            consultorias de tecnologia coloca um engenheiro júnior na frente do
            cliente e cobra preço de sênior. Decidimos inverter o modelo:
            atendimento direto pelos três sócios, com transparência de escopo,
            custo e tempo gasto.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section aria-labelledby="origem" className="border-b border-border">
        <div className="container-page py-16 md:py-20 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="overline">Nossa história</p>
            <h2 id="origem" className="mt-4 text-3xl">Como a vimore começou</h2>
          </div>
          <div className="text-muted-foreground md:text-lg space-y-4 max-w-2xl">
            <p>
              [Substitua este parágrafo pela história real da empresa: contexto
              em que os três sócios se conheceram, que tipo de cliente os levou
              a formalizar a sociedade e qual foi o primeiro projeto que
              validou o modelo de atendimento direto. Cite ano e setor quando
              for o caso — recência e especificidade transmitem credibilidade.]
            </p>
            <p>
              Hoje atendemos clientes recorrentes em São Paulo e em outras
              capitais, com projetos que vão de migração para AWS a
              estruturação de BI e automação de processos críticos.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section aria-labelledby="fundadores" className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <div className="mb-12">
            <p className="overline-accent">Quem somos</p>
            <h2 id="fundadores" className="mt-4 text-3xl md:text-4xl">Os fundadores da vimore</h2>
          </div>
          <ul className="grid gap-px bg-border border border-border md:grid-cols-3">
            {founders.map((f) => (
              <li key={f.name} className="bg-background p-8 flex flex-col">
                <img
                  src={f.photo}
                  alt={`Foto de ${f.name}, ${f.role}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full border border-border-strong bg-surface object-cover"
                />
                <h3 className="mt-6 text-xl">
                  <FounderName name={f.name} highlightWordIndex={f.highlightWordIndex} />
                </h3>
                <p className="overline mt-2">{f.role}</p>
                <p className="mt-4 text-muted-foreground text-sm flex-1">{f.bio}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-subtle font-mono">
            * As biografias acima ainda são placeholders. Substitua pelo texto real de cada sócio antes da publicação.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section aria-labelledby="principios" className="border-b border-border">
        <div className="container-page py-20 md:py-28 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="overline">Princípios de atendimento</p>
            <h2 id="principios" className="mt-4 text-3xl md:text-4xl">Como a vimore trabalha</h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Quatro compromissos práticos que orientam toda relação com cliente.
            </p>
          </div>
          <dl className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {principles.map((p) => (
              <div key={p.k} className="bg-background p-6">
                <dt className="overline-accent">{p.k}</dt>
                <dd className="mt-3 text-muted-foreground text-sm">{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="grid-bg">
        <div className="container-page py-24 md:py-28 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl">Marcar uma conversa com a vimore é grátis.</h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Trinta minutos, escopo aberto. Se for nosso perfil, voltamos com
            proposta. Se não for, indicamos quem é.
          </p>
          <Link
            to="/contato"
            className="btn mt-10 bg-accent text-accent-foreground border-accent hover:bg-transparent hover:text-accent"
          >
            Agendar conversa
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
