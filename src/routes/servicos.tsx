import { createFileRoute, Link } from "@tanstack/react-router";
import { whatsappLink } from "../lib/whatsapp";
import { Breadcrumbs, breadcrumbJsonLd } from "../components/Breadcrumbs";

const breadcrumbItems = [
  { label: "Início", to: "/" },
  { label: "Serviços" },
];

const services = [
  {
    n: "01",
    id: "infraestrutura",
    label: "Infraestrutura e cloud",
    title: "Infraestrutura Inteligente e Cloud",
    headline: "Quando o servidor cai, a operação para — e o prejuízo começa a contar.",
    lede:
      "Infraestrutura inteligente é a base de redes, servidores e nuvem desenhada para sustentar a operação sem interrupções e crescer junto com a empresa.",
    paragraphs: [
      "Rede mal projetada e servidor sem monitoramento são a causa mais comum de parada não planejada. Projetamos a rede física — roteadores, switches gerenciáveis, access points corporativos, cabeamento estruturado — para que uma falha isolada não derrube a operação inteira.",
      "Migramos e sustentamos cargas na AWS com Docker, Terraform e Linux Server. Infraestrutura como código significa que o ambiente é documentado e reproduzível, e não depende da memória de uma única pessoa.",
      "Zabbix e Grafana monitoram a operação em tempo real, com alertas que disparam antes do usuário perceber. Ambientes bem monitorados sustentam 99,9% de uptime sem aumentar o custo de operação.",
    ],
    stack: ["AWS", "Docker", "Terraform", "Linux Server", "Zabbix", "Grafana"],
  },
  {
    n: "02",
    id: "dados",
    label: "Dados e BI",
    title: "Dados e Inteligência de Negócios (BI)",
    headline: "Você não sabe para onde vai o seu custo de TI porque a informação está espalhada em planilhas.",
    lede:
      "Inteligência de negócios é a prática de transformar dados operacionais em informação clara para decisão — e em economia mensurável.",
    paragraphs: [
      "Sem uma fonte única de verdade, cada relatório usa um número diferente e a diretoria decide no escuro. Construímos dashboards em Power BI desenhados para o público real — diretoria, comercial, operação — com governança de acesso.",
      "Estruturamos bancos relacionais e processos de integração (ETL) com modelagem dimensional documentada, testada e versionada, para que o relatório de amanhã não dependa do humor da planilha de ontem.",
      "Revisamos ambientes como Databricks com foco em custo: dimensionamento de cluster, revisão de jobs, políticas de retenção. Em projetos recentes reduzimos o custo de dados em até 40% sem comprometer o SLA do relatório.",
    ],
    stack: ["Power BI", "ETL", "Modelagem de dados", "Databricks"],
  },
  {
    n: "03",
    id: "seguranca",
    label: "Cibersegurança e suporte",
    title: "Cibersegurança e Suporte Técnico (ITSM)",
    headline: "Um chamado perdido custa uma reunião inteira — e ninguém mede isso até virar rotina.",
    lede:
      "Cibersegurança e suporte técnico, juntos, protegem a informação da empresa e mantêm a equipe produtiva, sem paradas que custam tempo de reunião.",
    paragraphs: [
      "Diagnosticamos a aderência do ambiente às normas de segurança da família ISO — avaliação técnica e plano de ação, não certificação formal — e preparamos o terreno para uma auditoria futura.",
      "Organizamos o suporte com ferramentas profissionais como GLPI e ZohoDesk: SLA acordado, base de conhecimento ativa e indicadores que mostram onde a operação está sangrando tempo.",
      "Políticas de acesso por perfil, segmentação de rede, MFA e hardening de servidores reduzem a superfície de risco real da empresa, sem comprar fortaleza para guardar bicicleta.",
    ],
    stack: ["GLPI", "ZohoDesk", "Diagnóstico ISO", "MFA"],
  },
  {
    n: "04",
    id: "automacao",
    label: "Automação e desenvolvimento",
    title: "Automação, Integrações e Desenvolvimento",
    headline: "Toda PME tem uma planilha que liga o ERP ao CRM na mão — e quem mantém essa ponte sabe que ela vai quebrar.",
    lede:
      "Automação e integração são o que conecta os sistemas que a empresa já usa, eliminando trabalho manual repetitivo e erros de digitação.",
    paragraphs: [
      "Substituímos a ponte manual por código: rotinas em Python e Terraform que automatizam conciliações, importações e sincronizações entre sistemas, com logs, retentativas e alerta de falha em produção.",
      "Integramos ERPs, CRMs e plataformas de marketing via APIs REST, Webhooks, OAuth2 e MCP — incluindo ferramentas de IA, quando elas resolvem um problema real e não apenas seguem a moda.",
      "Quando faz sentido, construímos do zero: sites institucionais, portais internos e landing pages em WordPress, React, Node.js e Firebase, com SEO técnico e performance tratados como requisito.",
    ],
    stack: ["Python", "Terraform", "REST APIs", "OAuth2", "MCP", "React", "Node.js", "Firebase"],
  },
];

const faqs = [
  {
    q: "Vocês atendem empresas de qual porte?",
    a: "Trabalhamos com pequenas e médias empresas, tipicamente entre 20 e 500 colaboradores. Esse é o porte em que conseguimos manter relação direta com a diretoria e responsabilidade técnica ponta a ponta.",
  },
  {
    q: "Vocês substituem o nosso departamento de TI?",
    a: "Não. A gente trabalha melhor como reforço técnico do time interno — assumindo projetos específicos (migração, BI, automação) ou cobrindo frentes onde a empresa não tem senioridade. Para operação contínua de suporte, montamos a estrutura e treinamos o time interno para operá-la.",
  },
  {
    q: "Como funciona o primeiro contato?",
    a: "Uma conversa de cerca de 30 minutos, gratuita e sem proposta na sequência. O objetivo é entender o problema. Se for o caso, voltamos com um escopo concreto — prazo, custo e entregáveis. Se não for nosso perfil, indicamos quem for melhor.",
  },
  {
    q: "Vocês são revendedores de algum software?",
    a: "Não. Não temos comissão de fabricante. Recomendamos a ferramenta que serve ao problema, mesmo quando é open source. Isso elimina o conflito de interesse mais comum no mercado de consultoria de TI.",
  },
  {
    q: "Como cobram os projetos?",
    a: "Projetos com escopo fechado têm preço fechado, pago por marco de entrega. Sustentação e suporte recorrente são em pacote mensal de horas com SLA acordado. Em ambos os modelos, todo o tempo é registrado e visível ao cliente.",
  },
  {
    q: "Vocês ajudam empresas fora de São Paulo?",
    a: "Sim. Operamos a maior parte dos projetos remotamente — infraestrutura em nuvem, BI e automação não exigem presença física. Para projetos de rede e cabeamento, atendemos a região metropolitana de São Paulo e avaliamos deslocamento caso a caso.",
  },
  {
    q: "Em quanto tempo conseguem começar?",
    a: "Para diagnósticos e projetos pontuais, normalmente em duas a três semanas a partir da assinatura. Sustentação recorrente pode começar mais rápido, dependendo da janela de transição combinada com o time atual.",
  },
  {
    q: "Vocês assinam NDA?",
    a: "Sim, é prática padrão. Assinamos antes de qualquer apresentação técnica ou acesso a ambiente do cliente.",
  },
];

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — vimore · Infraestrutura, dados, segurança e automação" },
      {
        name: "description",
        content:
          "Quatro frentes de engenharia para PMEs no Brasil: infraestrutura e cloud na AWS, dados e BI em Power BI, cibersegurança ISO e ITSM, automação e integrações com Python e APIs.",
      },
      { property: "og:title", content: "Serviços — vimore" },
      { property: "og:description", content: "Infraestrutura, dados, cibersegurança e automação para empresas em crescimento." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(breadcrumbItems)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": services.map((s) => ({
            "@type": "Service",
            name: s.title,
            description: s.lede,
            provider: { "@type": "Organization", name: "vimore" },
            areaServed: { "@type": "Country", name: "Brasil" },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-20 pb-16 md:pt-28 md:pb-24 max-w-4xl">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="overline-accent mt-6">Serviços</p>
          <h1 className="mt-6 text-4xl md:text-6xl">
            Quatro frentes de engenharia,<br/>
            <span className="text-accent">um único time responsável.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Cada serviço abaixo é descrito com a profundidade necessária para
            quem decide investir. Sem one-liners, sem ícones decorativos — só o
            problema que resolvemos, como entregamos e com quais ferramentas.
          </p>
        </div>
      </section>

      {services.map((s, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            aria-labelledby={`${s.id}-titulo`}
            className="border-b border-border scroll-mt-20"
          >
            <div
              className={`container-page py-20 md:py-28 flex flex-col gap-12 md:gap-16 md:items-start ${
                reversed ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <article className="md:flex-[3]">
                <p className="overline">{s.label}</p>
                <h2 id={`${s.id}-titulo`} className="mt-4 text-2xl md:text-4xl max-w-2xl">
                  {s.headline}
                </h2>
                <p className="mt-6 text-lg text-foreground max-w-2xl">{s.lede}</p>
                <div className="mt-8 space-y-4 max-w-2xl text-muted-foreground">
                  {s.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                  {s.stack.map((t) => (
                    <li key={t} className="tag-chip">{t}</li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(s.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-8 bg-accent text-accent-foreground border-accent hover:bg-transparent hover:text-accent"
                >
                  Falar com especialista
                  <span aria-hidden>→</span>
                </a>
              </article>

              <aside
                aria-hidden="true"
                className="md:flex-[2] md:sticky md:top-24 select-none"
              >
                <div className="relative border border-border bg-surface px-8 py-10 overflow-hidden">
                  <span aria-hidden className="block h-[2px] w-10 bg-accent" />
                  <span className="mt-6 block font-display text-[5.5rem] leading-none font-medium text-foreground/[0.08]">
                    {s.n}
                  </span>
                  <p className="mt-2 font-mono text-sm text-subtle">Frente {s.n} de 04</p>
                </div>
              </aside>
            </div>
          </section>
        );
      })}

      {/* FAQ */}
      <section aria-labelledby="faq" className="border-b border-border">
        <div className="container-page py-20 md:py-28 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="overline-accent">Perguntas frequentes</p>
            <h2 id="faq" className="mt-4 text-3xl md:text-4xl">
              O que clientes perguntam<br/>antes de assinar.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Respostas diretas, na linguagem com que ouvimos as perguntas. Se
              faltar algo, escreva pra gente — atualizamos esta lista quando
              uma pergunta nova aparece.
            </p>
          </div>
          <div>
            <dl className="divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="text-lg text-foreground">{f.q}</dt>
                  <dd className="mt-3 text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grid-bg">
        <div className="container-page py-24 md:py-28 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl">
            Pronto para resolver isso na sua operação?
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Diga em uma frase o que está custando tempo ou dinheiro hoje. A
            gente responde se conseguimos ajudar — e como.
          </p>
          <Link
            to="/contato"
            className="btn mt-10 bg-accent text-accent-foreground border-accent hover:bg-transparent hover:text-accent"
          >
            Falar pelo formulário
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
