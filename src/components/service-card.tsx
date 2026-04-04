import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex size-12 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
