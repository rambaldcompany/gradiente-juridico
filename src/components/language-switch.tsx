"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  localeFromPathname,
  locales,
  prefixHref,
  stripLocalePrefix,
  type Locale,
} from "@/lib/locale";
import { cn } from "@/lib/utils";

const LOCALE_COOKIE = "gj-locale";
const LOCALE_MAX_AGE = 60 * 60 * 24 * 365;

export function LocaleLink({
  href,
  locale,
  className,
  children,
  ...props
}: {
  href: string;
  locale: Locale;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href">) {
  return (
    <Link href={prefixHref(href, locale)} className={className} {...props}>
      {children}
    </Link>
  );
}

const localeLabel: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};

export function LanguageSwitch({
  className,
}: {
  className?: string;
}) {
  const pathname = usePathname() || "/";
  const current = localeFromPathname(pathname);
  const bare = stripLocalePrefix(pathname);

  function go(next: Locale) {
    if (next === current) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${LOCALE_MAX_AGE}; SameSite=Lax`;
    window.location.assign(prefixHref(bare, next));
  }

  return (
    <label className={cn("relative inline-flex items-center", className)}>
      <span className="sr-only">Idioma / Language</span>
      <select
        value={current}
        onChange={(event) => go(event.target.value as Locale)}
        className="cursor-pointer appearance-none bg-transparent py-1 pl-0 pr-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-inherit outline-none"
        aria-label="Idioma / Language"
      >
        {locales.map((code) => (
          <option key={code} value={code} className="text-foreground">
            {localeLabel[code]}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-0 size-3.5 opacity-70"
        aria-hidden
      />
    </label>
  );
}
