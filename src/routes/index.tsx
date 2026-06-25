import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "vimore — Consultoria de tecnologia para empresas em crescimento" },
      {
        name: "description",
        content:
          "Infraestrutura, dados, cibersegurança e automação para pequenas e médias empresas no Brasil. Engenharia que sustenta operações — sem promessas vagas.",
      },
      { property: "og:title", content: "vimore — Tecnologia que sustenta a operação" },
      { property: "og:description", content: "Consultoria brasileira de infraestrutura, dados, segurança e automação para PMEs." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    n: "01",
    id: "infraestrutura",
    title: "Infraestrutura Inteligente e Cloud",
    summary:
      "A base tecnológica do negócio — projetada para ser rápida, segura e escalável.",
    body:
      "Projetamos redes corporativas (roteadores, switches, access points, cabeamento estruturado), migramos cargas para AWS com Docker, Terraform e Linux Server, e instalamos monitoramento ativo com Zabbix e Grafana para que falhas sejam detectadas antes de afetarem a operação.",
  },
  {
    n: "02",
    id: "dados",
    title: "Dados e Inteligência de Negócios",
    summary:
      "De planilhas espalhadas a uma única fonte de verdade para decisão.",
    body:
      "Construímos dashboards em Power BI, estruturamos bancos e processos de integração (ETL) e revisamos ambientes Databricks para reduzir custo. O resultado é informação confiável, acessível e barata de manter.",
  },
  {
    n: "03",
    id: "seguranca",
    title: "Cibersegurança e Suporte Técnico",
    summary:
      "Protegemos a informação e mantemos sua equipe livre de paradas técnicas.",
    body:
      "Diagnóstico de aderência às normas ISO de segurança (avaliação, não certificação formal), Service Desk com GLPI e ZohoDesk, e políticas de acesso e segmentação de rede para reduzir a superfície de risco do ambiente corporativo.",
  },
  {
    n: "04",
    id: "automacao",
    title: "Automação, Integrações e Desenvolvimento",
    summary:
      "Eliminamos o trabalho manual conectando os sistemas que a empresa já usa.",
    body:
      "Rotinas em Python, Terraform e APIs; integração de ERPs, CRMs e ferramentas de marketing via REST, Webhooks, OAuth2 e MCP; presença digital institucional em WordPress, React, Node.js e Firebase.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-page pt-20 pb-24 md:pt-28 md:pb-32 grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <p className="overline-accent">vimore · Consultoria de tecnologia</p>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05]">
              Tecnologia que sustenta<br/>
              a sua operação —<br/>
              <span className="text-accent">não a complica.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Somos três engenheiros que operam ambientes de produção todos os
              dias. Ajudamos pequenas e médias empresas brasileiras a estabilizar
              infraestrutura, organizar dados, proteger informação e automatizar
              processos. Sem jargão, sem terceirização, com responsabilidade
              técnica de quem assina o código.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-sm uppercase tracking-widest text-accent-foreground border border-accent hover:bg-transparent hover:text-accent transition"
              >
                Agendar conversa
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-3 border border-border-strong px-6 py-3.5 text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition"
              >
                Ver serviços
              </Link>
            </div>
          </div>

          <aside aria-label="Resumo da empresa" className="md:border-l md:border-border md:pl-10">
            <dl className="space-y-8 font-mono text-sm">
              <Stat k="Fundação" v="3 engenheiros atuantes" />
              <Stat k="Base" v="São Paulo · Brasil" />
              <Stat k="Stack" v="AWS · Terraform · Python · Power BI" />
              <Stat k="Foco" v="PMEs em crescimento" />
            </dl>
          </aside>
        </div>
      </section>

      {/* Services index */}
      <section aria-labelledby="servicos-titulo" className="border-b border-border">
        <div className="container-page pt-20 pb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end mb-16">
            <div>
              <p className="overline">Índice · 01 / 04</p>
              <h2 id="servicos-titulo" className="mt-4 text-3xl md:text-4xl">
                Quatro frentes,<br/>um time só.
              </h2>
            </div>
            <p className="text-muted-foreground md:text-lg max-w-2xl">
              Cada frente abaixo resolve um problema concreto que ouvimos
              repetidamente de gestores de PMEs no Brasil — do servidor que cai
              à planilha que ninguém entende mais.
            </p>
          </div>

          <ol className="space-y-0">
            {services.map((s, i) => (
              <li key={s.id} className={`grid gap-6 md:grid-cols-[6rem_1fr_2fr] py-10 ${i !== 0 ? "border-t border-border" : "border-t border-border-strong"}`}>
                <span className="font-mono text-sm text-accent">{s.n} /</span>
                <h3 className="text-xl md:text-2xl">{s.title}</h3>
                <div>
                  <p className="text-foreground">{s.summary}</p>
                  <p className="mt-3 text-muted-foreground">{s.body}</p>
                  <Link
                    to="/servicos"
                    hash={s.id}
                    className="mt-5 inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4"
                  >
                    Detalhes desta frente <span aria-hidden>→</span>
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why us */}
      <section aria-labelledby="por-que" className="border-b border-border">
        <div className="container-page py-20 md:py-28 grid gap-12 md:grid-cols-2">
          <div>
            <p className="overline-accent">Por que a vimore</p>
            <h2 id="por-que" className="mt-4 text-3xl md:text-4xl">
              Engenharia operada<br/>por quem assina o código.
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg">
              A maior parte das consultorias de TI vende horas. A gente vende
              previsibilidade: sistemas que não caem em horário comercial,
              dados que batem com a realidade do negócio e processos que param
              de depender de uma planilha mantida por uma pessoa.
            </p>
            <p className="mt-4 text-muted-foreground">
              Trabalhamos com clientes recorrentes em janelas curtas e
              objetivas. Sem revenda de software, sem comissão de fornecedor,
              sem subcontratação invisível.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {[
              { k: "Senioridade", v: "Os três fundadores atendem direto. Nada de pré-venda terceirizada." },
              { k: "Responsabilidade", v: "Quem desenha a solução é quem opera. SLA é compromisso, não cláusula." },
              { k: "Independência", v: "Sem comissão de fabricante. Recomendamos a ferramenta que serve, não a que paga." },
              { k: "Transparência", v: "Escopo, prazo e custo abertos. Você sabe o que está pagando e por quê." },
            ].map((b) => (
              <li key={b.k} className="bg-background p-6">
                <p className="overline-accent">{b.k}</p>
                <p className="mt-3 text-sm text-muted-foreground">{b.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta" className="grid-bg">
        <div className="container-page py-24 md:py-32 text-center max-w-3xl mx-auto">
          <p className="overline-accent">Próximo passo</p>
          <h2 id="cta" className="mt-4 text-3xl md:text-5xl">
            Conte o que está travando<br/>a sua operação hoje.
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Uma conversa de 30 minutos. Sem proposta padrão, sem apresentação
            comercial. A gente escuta o problema e diz, com honestidade, se
            podemos ajudar.
          </p>
          <Link
            to="/contato"
            className="mt-10 inline-flex items-center gap-3 bg-accent px-7 py-4 text-sm uppercase tracking-widest text-accent-foreground border border-accent hover:bg-transparent hover:text-accent transition"
          >
            Agendar conversa
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="overline">{k}</dt>
      <dd className="mt-2 text-foreground">{v}</dd>
    </div>
  );
}
