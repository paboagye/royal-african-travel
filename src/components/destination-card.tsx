import Image from "next/image";
import Link from "next/link";

interface DestinationCardProps {
  name: string;
  description: string;
  image?: string;
  href?: string;
}

export function DestinationCard({
  name,
  description,
  image,
  href = "/contact",
}: DestinationCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy/5">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground/30">
            <svg
              className="size-12"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <Link
          href={href}
          className="mt-3 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
          aria-label={`Enquire about ${name}`}
        >
          Enquire now &rarr;
        </Link>
      </div>
    </div>
  );
}
