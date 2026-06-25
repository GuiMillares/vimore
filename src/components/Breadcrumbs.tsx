import { Link } from "@tanstack/react-router";

export type BreadcrumbItem = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden className="text-subtle">/</span>}
              {isLast || !item.to ? (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-foreground" : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="hover:text-accent transition">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.to ?? undefined,
    })),
  };
}
