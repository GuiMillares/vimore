import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="max-w-md">
        <p className="overline-accent">Erro 404</p>
        <h1 className="mt-4 text-5xl">Página não encontrada</h1>
        <p className="mt-4 text-muted-foreground">
          O endereço que você acessou não existe ou foi movido. Volte para a
          página inicial e tente novamente.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 border border-border-strong px-5 py-3 text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition"
        >
          Voltar ao início
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="max-w-md">
        <p className="overline-accent">Falha de carregamento</p>
        <h1 className="mt-4 text-4xl">Algo não saiu como esperado.</h1>
        <p className="mt-4 text-muted-foreground">
          Tente recarregar a página. Se o problema continuar, fale com nosso
          time pelo formulário de contato.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-accent bg-accent px-5 py-3 text-sm uppercase tracking-widest text-accent-foreground hover:bg-transparent hover:text-accent transition"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="border border-border-strong px-5 py-3 text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition"
          >
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "vimore",
  url: "/",
  logo: "/logo.svg",
  description:
    "Consultoria de tecnologia para pequenas e médias empresas brasileiras — infraestrutura, dados, cibersegurança e automação.",
  areaServed: { "@type": "Country", name: "Brasil" },
  address: {
    "@type": "PostalAddress",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  contactPoint: [{
    "@type": "ContactPoint",
    contactType: "customer support",
    areaServed: "BR",
    availableLanguage: ["Portuguese"],
  }],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "vimore",
  image: "/logo.svg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: "São Paulo e região metropolitana",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0E0E10" },
      { name: "author", content: "vimore" },
      { property: "og:site_name", content: "vimore" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="group inline-flex flex-col leading-none" aria-label="vimore — início">
          <span className="font-display text-[1.35rem] font-medium tracking-tight lowercase">
            vimore<span className="text-accent">.</span>
          </span>
          <span aria-hidden className="mt-1 h-[2px] w-9 bg-accent transition-all group-hover:w-12" />
        </Link>
        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            <NavItem to="/">Início</NavItem>
            <NavItem to="/servicos">Serviços</NavItem>
            <NavItem to="/sobre">Sobre</NavItem>
            <NavItem to="/blog">Insights</NavItem>
            <NavItem to="/contato">Contato</NavItem>
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link
            to="/contato"
            className="border border-border-strong px-4 py-2 text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition"
          >
            Falar com um especialista
          </Link>
        </div>
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-border-strong"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="relative block h-3 w-4">
            <span className={`absolute inset-x-0 top-0 h-px bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 top-1.5 h-px bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute inset-x-0 top-3 h-px bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <nav aria-label="Navegação móvel" className="md:hidden border-t border-border">
          <ul className="container-page flex flex-col py-4 text-sm">
            <MobileItem to="/" onClick={() => setOpen(false)}>Início</MobileItem>
            <MobileItem to="/servicos" onClick={() => setOpen(false)}>Serviços</MobileItem>
            <MobileItem to="/sobre" onClick={() => setOpen(false)}>Sobre</MobileItem>
            <MobileItem to="/blog" onClick={() => setOpen(false)}>Insights</MobileItem>
            <MobileItem to="/contato" onClick={() => setOpen(false)}>Contato</MobileItem>
          </ul>
        </nav>
      )}
    </header>
  );
}

function NavItem({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        activeOptions={{ exact: to === "/" }}
        activeProps={{ className: "text-accent" }}
        inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
        className="transition"
      >
        {children}
      </Link>
    </li>
  );
}

function MobileItem({ to, children, onClick }: { to: string; children: ReactNode; onClick: () => void }) {
  return (
    <li className="border-b border-border last:border-b-0">
      <Link
        to={to}
        onClick={onClick}
        activeOptions={{ exact: to === "/" }}
        activeProps={{ className: "text-accent" }}
        inactiveProps={{ className: "text-foreground" }}
        className="block py-3"
      >
        {children}
      </Link>
    </li>
  );
}

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="inline-block h-2 w-2 rotate-45 bg-accent" />
            <span className="font-display text-[1.05rem] font-medium tracking-tight">
              vimore<span className="text-accent">.</span>IT
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Consultoria de tecnologia para pequenas e médias empresas
            brasileiras. Infraestrutura, dados, segurança e automação — feitos
            por engenheiros que operam ambientes de produção.
          </p>
          <p className="mt-6 overline">São Paulo · Brasil</p>
        </div>
        <FooterCol title="Empresa" items={[
          { to: "/sobre", label: "Sobre" },
          { to: "/servicos", label: "Serviços" },
          { to: "/blog", label: "Insights" },
          { to: "/contato", label: "Contato" },
        ]} />
        <FooterCol title="Serviços" items={[
          { to: "/servicos#infraestrutura", label: "Infraestrutura e Cloud" },
          { to: "/servicos#dados", label: "Dados e BI" },
          { to: "/servicos#seguranca", label: "Cibersegurança e ITSM" },
          { to: "/servicos#automacao", label: "Automação e Integrações" },
        ]} />
        <div>
          <p className="overline">Contato</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="text-muted-foreground hover:text-accent transition" href="mailto:contato@vimore.com.br">contato@vimore.com.br</a></li>
            <li><a className="text-muted-foreground hover:text-accent transition" href="tel:+5511000000000">+55 (11) 0000-0000</a></li>
            <li className="text-muted-foreground">Seg–Sex · 9h às 18h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col md:flex-row items-start md:items-center justify-between gap-3 py-6 text-xs text-subtle">
          <p>© {year} vimore. Todos os direitos reservados.</p>
          <p className="font-mono">CNPJ 00.000.000/0001-00 · v1.0</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="overline">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.to + i.label}>
            <a href={i.to} className="text-muted-foreground hover:text-accent transition">{i.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
