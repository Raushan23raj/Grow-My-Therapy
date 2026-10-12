"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/types";
import { PillLink } from "./ui";

type Props = Pick<SiteContent, "brand" | "nav" | "navCta">;

function Brand({ brand, compact = false }: { brand: Props["brand"]; compact?: boolean }) {
  if (brand.logo) {
    return (
      <Image
        src={brand.logo.src}
        alt={brand.logo.alt}
        width={brand.logo.width}
        height={brand.logo.height}
        preload
        className={compact ? "h-12 w-auto" : "h-14 w-auto lg:h-[75px]"}
      />
    );
  }
  return (
    <span className="block text-heading">
      <span
        className={`block font-serif font-light leading-none tracking-[-0.01em] ${
          compact ? "text-[1.7rem]" : "text-[1.9rem] lg:text-[2.45rem]"
        }`}
      >
        {brand.name}
      </span>
      <span className="mt-2 block pl-0.5 text-[0.62rem] tracking-[0.36em] text-accent uppercase lg:text-[0.7rem]">
        {brand.tagline}
      </span>
    </span>
  );
}

export function SiteHeader({ brand, nav, navCta }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header id="top" className="bg-canvas text-ink">
      <div className="flex items-center justify-between px-6 py-5 lg:px-[5vw] lg:py-[22px]">
        <a href={brand.href} aria-label={`${brand.name} ${brand.tagline}, home`}>
          <Brand brand={brand} />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-[2.5vw] text-[0.88rem] tracking-[0.1em] uppercase">
            {nav.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  aria-haspopup={item.children ? "true" : undefined}
                  className="block py-3 transition-opacity hover:opacity-60"
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="invisible absolute top-full left-1/2 z-40 -translate-x-1/2 pt-1 opacity-0 transition-opacity duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="min-w-60 bg-canvas px-7 py-5 text-[0.93rem] tracking-normal normal-case shadow-[0_8px_30px_rgb(0_0_0/0.06)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <a href={child.href} className="block py-1.5 whitespace-nowrap transition-opacity hover:opacity-60">
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li>
              <PillLink link={navCta} className="px-[1.35rem] py-3 text-[0.82rem]" />
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
        >
          <span className="sr-only">Open menu</span>
          <span className="h-px w-7 bg-ink" />
          <span className="h-px w-7 bg-ink" />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-canvas lg:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <a href={brand.href} onClick={close}>
              <Brand brand={brand} compact />
            </a>
            <button type="button" onClick={close} className="-mr-2 flex h-11 w-11 items-center justify-center">
              <span className="sr-only">Close menu</span>
              <span className="relative block h-6 w-6">
                <span className="absolute top-1/2 left-0 h-px w-6 rotate-45 bg-ink" />
                <span className="absolute top-1/2 left-0 h-px w-6 -rotate-45 bg-ink" />
              </span>
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-8 pb-16">
            <ul className="space-y-5 text-center font-serif text-[1.9rem] font-light text-heading">
              {nav.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <details className="group">
                      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        {item.label}
                        <span aria-hidden className="ml-2 inline-block font-sans text-[1.4rem] transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <ul className="mt-3 space-y-2 font-sans text-base font-light text-ink">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <a href={child.href} onClick={close}>
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a href={item.href} onClick={close}>
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-10 text-center" onClick={close}>
              <PillLink link={navCta} className="px-7 py-4" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
