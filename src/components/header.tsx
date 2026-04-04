"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-white/95 backdrop-blur-sm supports-backdrop-filter:bg-white/80">
      {/* Top bar with phone */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-4 py-1.5 text-sm sm:px-6 lg:px-8">
          <a
            href="tel:+14167405617"
            className="flex items-center gap-1.5 transition-colors hover:text-brand-gold"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            <span className="font-medium">416.740.5617</span>
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex size-10 items-center justify-center rounded-full bg-brand-red text-white">
            <Plane className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight tracking-tight text-brand-navy">
              Royal African
            </span>
            <span className="text-xs font-medium leading-tight text-muted-foreground">
              Travel & Cargo
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button render={<Link href="/contact" />}>Get a Quote</Button>
        </div>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle>
                <span className="text-brand-navy">Royal African</span>
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <SheetClose
                    key={link.href}
                    render={<Link href={link.href} />}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground"
                    )}
                  >
                    {link.label}
                  </SheetClose>
                );
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t p-4">
              <a
                href="tel:+14167405617"
                className="flex items-center gap-2 text-sm font-medium text-secondary"
              >
                <Phone className="size-4" aria-hidden="true" />
                416.740.5617
              </a>
              <Button render={<Link href="/contact" />} className="w-full">
                Get a Quote
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
