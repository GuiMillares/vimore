import { createFileRoute, Link } from "@tanstack/react-router";

const services = [
  {
    n: "01",
    id: "infraestrutura",
    title: "Infraestrutura Inteligente e Cloud",
    lede:
      "Infraestrutura inteligente é a base de redes, servidores e nuvem desenhada para sustentar a operação sem interrupções e crescer junto com a empresa.",
    body:
      "Construímos o chão da operação digital. Isso vai do cabo de rede ao cluster em nuvem: projetamos o caminho que os dados percorrem, escolhemos os equipamentos certos, configuramos monitoramento ativo e documentamos tudo para que sua equipe não dependa de uma única pessoa para entender o ambiente.",
    items: [
      {
        h: "Arquitetura e Redes Corporativas",
        p: "Projeto e implementação de redes robustas — roteadores, switches gerenciáveis, access points corporativos e cabeamento estruturado. Segmentação por VLANs, política de QoS e redundância onde faz diferença.",
      },
      {
        h: "Cloud e DevOps na AWS",
        p: "Migração e sustentação de ambientes AWS com Docker, Terraform e Linux Server. Infraestrutura como código, ambientes reproduzíveis e estratégias de alta disponibilidade dimensionadas ao porte real do negócio — não ao folheto do fabricante.",
      },
      {
        h: "Monitoramento Proativo",
        p: "Painéis em tempo real com Zabbix e Grafana. Alertas que disparam antes do usuário perceber, métricas de capacidade que evitam compras emergenciais e relatórios mensais de saúde do ambiente.",
      },
    ],
  },
  {
    n: "02",
    id: "dados",
    title: "Dados e Inteligência de Negócios (BI)",
    lede:
      "Inteligência de negócios é a prática de transformar dados operacionais em informação clara para decisão — e em economia mensurável.",
    body:
      "Se o gestor passa o dia consolidando planilhas, os dados estão trabalhando contra o negócio. A gente reorganiza o fluxo: define a fonte de verdade, automatiza a coleta, modela os indicadores que importam e entrega dashboards que respondem perguntas de negócio em poucos cliques.",
    items: [
      {
        h: "Dashboards e Relatórios em Power BI",
        p: "Painéis interativos desenhados para o público real (diretoria, comercial, operação), com filtros que fazem sentido para o dia a dia e governança de acesso. Treinamos a equipe interna para sustentar o material.",
      },
      {
        h: "Engenharia e Arquitetura de Dados",
        p: "Estruturação de bancos relacionais, processos de integração (ETL) e modelagem dimensional. Pipelines documentados, com testes e versionamento, para que o relatório de amanhã não dependa do humor da planilha de ontem.",
      },
      {
        h: "Otimização de Custos de Dados",
        p: "Análise de ambientes como Databricks com foco em redução de custo: dimensionamento de clusters, revisão de jobs e políticas de retenção. Em projetos recentes reduzimos consumo sem comprometer o SLA do relatório.",
      },
    ],
  },
  {
    n: "03",
    id: "seguranca",
    title: "Cibersegurança e Suporte Técnico (ITSM)",
    lede:
      "Cibersegurança e suporte técnico, juntos, protegem a informação da empresa e mantêm a equipe produtiva — sem paradas que custam reuniões inteiras.",
    body:
      "Segurança e suporte costumam viver em silos diferentes; a gente trata como o mesmo problema. Avaliamos o ambiente segundo as melhores práticas das normas ISO, organizamos o suporte com ferramentas profissionais e implementamos as políticas que reduzem o risco real, sem teatro de compliance.",
    items: [
      {
        h: "Diagnóstico de Conformidade",
        p: "Avaliação de aderência às normas de segurança da família ISO, com apoio à adequação. É diagnóstico técnico e plano de ação — não emitimos certificação formal, mas preparamos o ambiente para auditoria.",
      },
      {
        h: "Service Desk Especializado",
        p: "Estruturação e operação de suporte com GLPI e ZohoDesk. SLA acordado, base de conhecimento ativa e indicadores que mostram onde a operação está sangrando tempo.",
      },
      {
        h: "Segurança de Redes e Acesso",
        p: "Políticas de acesso por perfil, segmentação de rede, MFA, hardening de servidores e revisão de regras de firewall. Boas práticas aplicadas ao porte real da empresa, sem comprar fortaleza para guardar bicicleta.",
      },
    ],
  },
  {
    n: "04",
    id: "automacao",
    title: "Automação, Integrações e Desenvolvimento",
    lede:
      "Automação e integração são o que conecta os sistemas que a empresa já usa, eliminando trabalho manual repetitivo e erros de digitação.",
    body:
      "Quase toda PME tem uma pasta de planilhas que liga manualmente o ERP ao CRM ao financeiro. A gente substitui essa pasta por código: rotinas em Python, infraestrutura em Terraform, integrações via API. Quando faz sentido, construímos do zero — site institucional, portal interno ou landing page — com o mesmo padrão de engenharia.",
    items: [
      {
        h: "Automação de Processos",
        p: "Rotinas em Python e Terraform que substituem trabalho manual recorrente: conciliações, importações, sincronizações entre sistemas. Cada automação entra em produção com logs, retentativas e alerta de falha.",
      },
      {
        h: "Integração de Sistemas e IA",
        p: "Conexão entre ERPs, CRMs e plataformas de marketing usando APIs REST, Webhooks, OAuth2 e MCP. Integramos também ferramentas de IA aos processos onde elas agregam — não onde estão na moda.",
      },
      {
        h: "Presença Digital",
        p: "Sites institucionais, portais e landing pages em WordPress, React, Node.js e Firebase. SEO técnico, performance e acessibilidade tratados como requisito, não como bônus.",
      },
    ],
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
      { title: "Serviços — Aevum IT · Infraestrutura, dados, segurança e automação" },
      {
        name: "description",
        content:
          "Quatro frentes de engenharia para PMEs no Brasil: infraestrutura e cloud na AWS, dados e BI em Power BI, cibersegurança ISO e ITSM, automação e integrações com Python e APIs.",
      },
      { property: "og:title", content: "Serviços — Aevum IT" },
      { property: "og:description", content: "Infraestrutura, dados, cibersegurança e automação para empresas em crescimento." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Serviços", item: "/servicos" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": services.map((s) => ({
            "@type": "Service",
            name: s.title,
            description: s.lede,
            provider: { "@type": "Organization", name: "Aevum IT" },
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
          <p className="overline-accent">Serviços</p>
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

      {services.map((s) => (
        <section
          key={s.id}
          id={s.id}
          aria-labelledby={`${s.id}-titulo`}
          className="border-b border-border scroll-mt-20"
        >
          <div className="container-page py-20 md:py-28 grid gap-12 md:grid-cols-[1fr_2fr]">
            <div className="md:sticky md:top-24 md:self-start">
              <p className="font-mono text-sm text-accent">{s.n} / 04</p>
              <h2 id={`${s.id}-titulo`} className="mt-4 text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-6 text-muted-foreground">{s.lede}</p>
            </div>
            <div>
              <p className="text-lg text-foreground">{s.body}</p>
              <ul className="mt-10 space-y-px bg-border">
                {s.items.map((it) => (
                  <li key={it.h} className="bg-background p-6">
                    <h3 className="text-lg">{it.h}</h3>
                    <p className="mt-2 text-muted-foreground">{it.p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

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
            Pronto para destravar uma frente?
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Diga em uma frase o que está custando tempo ou dinheiro hoje. A
            gente responde se conseguimos ajudar — e como.
          </p>
          <Link
            to="/contato"
            className="mt-10 inline-flex items-center gap-3 bg-accent px-7 py-4 text-sm uppercase tracking-widest text-accent-foreground border border-accent hover:bg-transparent hover:text-accent transition"
          >
            Falar com um especialista
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
