import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import type { Img, Link } from "@/content/types";

const MARKS = /(\*[^*]+\*|_[^_]+_)/g;

/** Renders `*word*` in the script accent font and `_phrase_` in italics. */
export function Accent({ text }: { text: string }) {
  return (
    <>
      {text.split(MARKS).map((part, i) => {
        if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
          return (
            <span key={i} className="script-accent">
              {part.slice(1, -1)}
            </span>
          );
        }
        if (part.length > 2 && part.startsWith("_") && part.endsWith("_")) {
          return (
            <em key={i} className="italic">
              {part.slice(1, -1)}
            </em>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-small font-normal uppercase tracking-[0.1em] ${className}`}>{children}</p>;
}

const isExternal = (href: string) => /^https?:\/\//.test(href);

function linkProps(href: string) {
  return isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

/** Small uppercase link with an underline, the template's default button. */
export function TextLink({ link, className = "" }: { link: Link; className?: string }) {
  return (
    <a
      href={link.href}
      {...linkProps(link.href)}
      className={`inline-block border-b border-current pt-2 pb-1.5 text-button font-normal uppercase transition-opacity hover:opacity-60 ${className}`}
    >
      {link.label}
    </a>
  );
}

/** Outlined oval button used for "Contact" and "Book now". */
export function PillLink({ link, className = "" }: { link: Link; className?: string }) {
  return (
    <a
      href={link.href}
      {...linkProps(link.href)}
      className={`inline-flex items-center justify-center rounded-[100%] border border-current px-5 py-3.5 text-button font-normal whitespace-nowrap uppercase transition-colors hover:bg-ink hover:text-surface ${className}`}
    >
      {link.label}
    </a>
  );
}

/** A photo that covers its (positioned) parent box. */
export function Photo({
  image,
  sizes,
  eager = false,
  className = "",
}: {
  image: Img;
  sizes: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      className={`object-cover ${className}`}
      style={image.position ? { objectPosition: image.position } : undefined}
    />
  );
}
