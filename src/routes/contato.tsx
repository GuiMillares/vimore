import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  empresa: z.string().trim().min(1, "Informe a empresa").max(120),
  mensagem: z.string().trim().min(10, "Descreva em ao menos 10 caracteres").max(2000),
});

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — vimore · Fale com um engenheiro sênior" },
      {
        name: "description",
        content:
          "Fale direto com os sócios da vimore. Atendimento em São Paulo e remoto para todo o Brasil. E-mail, telefone e formulário disponíveis nesta página.",
      },
      { property: "og:title", content: "Contato — vimore" },
      { property: "og:description", content: "Atendimento direto pelos sócios. Sem pré-venda terceirizada." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[i.path[0] as string] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-20 pb-12 md:pt-28 md:pb-16 max-w-4xl">
          <p className="overline-accent">Contato</p>
          <h1 className="mt-6 text-4xl md:text-6xl">
            Vamos conversar<br/>
            <span className="text-accent">sobre o seu problema.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Responda em até um dia útil. Atendemos São Paulo presencialmente e
            todo o Brasil remotamente.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20 grid gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl md:text-3xl">Formulário</h2>
            {sent ? (
              <div role="status" className="mt-8 border border-accent p-8">
                <p className="overline-accent">Mensagem registrada</p>
                <p className="mt-3 text-foreground">
                  Obrigado. Um dos sócios responde em até um dia útil pelo
                  e-mail informado.
                </p>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="mt-8 grid gap-6">
                <Field id="nome" label="Nome completo" error={errors.nome} />
                <Field id="email" label="E-mail" type="email" error={errors.email} />
                <Field id="empresa" label="Empresa" error={errors.empresa} />
                <div>
                  <label htmlFor="mensagem" className="overline">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={6}
                    required
                    aria-invalid={!!errors.mensagem}
                    aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
                    className="mt-2 block w-full bg-surface border border-input px-4 py-3 text-foreground placeholder:text-subtle focus:outline-none focus:border-accent transition"
                    placeholder="Conte em poucas linhas o que está travando hoje."
                  />
                  {errors.mensagem && (
                    <p id="mensagem-error" className="mt-2 text-sm text-destructive">{errors.mensagem}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="justify-self-start inline-flex items-center gap-3 bg-accent px-7 py-4 text-sm uppercase tracking-widest text-accent-foreground border border-accent hover:bg-transparent hover:text-accent transition"
                >
                  Enviar mensagem
                  <span aria-hidden>→</span>
                </button>
                <p className="text-xs text-subtle">
                  Ao enviar você concorda com o tratamento dos dados informados
                  exclusivamente para retorno comercial, em conformidade com a LGPD.
                </p>
              </form>
            )}
          </div>

          <aside aria-label="Canais diretos" className="md:border-l md:border-border md:pl-10">
            <dl className="space-y-8">
              <Channel k="E-mail" v={<a className="text-foreground hover:text-accent transition" href="mailto:contato@vimore.com.br">contato@vimore.com.br</a>} />
              <Channel k="Telefone · WhatsApp" v={<a className="text-foreground hover:text-accent transition" href="tel:+5511000000000">+55 (11) 0000-0000</a>} />
              <Channel k="Localização" v={<span className="text-foreground">São Paulo · SP<br/>Atendimento na região metropolitana</span>} />
              <Channel k="Horário" v={<span className="text-foreground">Seg–Sex · 9h às 18h<br/>(Resposta em até 1 dia útil)</span>} />
            </dl>
            <div className="mt-12 pt-8 border-t border-border">
              <p className="overline">Placeholders</p>
              <p className="mt-3 text-xs text-subtle font-mono leading-relaxed">
                Substitua e-mail, telefone e endereço pelos dados reais antes
                da publicação.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type = "text", error }: { id: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={id} className="overline">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 block w-full bg-surface border border-input px-4 py-3 text-foreground placeholder:text-subtle focus:outline-none focus:border-accent transition"
      />
      {error && <p id={`${id}-error`} className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function Channel({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div>
      <dt className="overline">{k}</dt>
      <dd className="mt-2">{v}</dd>
    </div>
  );
}
