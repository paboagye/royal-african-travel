"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSlide {
  src: string;
  alt: string;
  headline: string;
  subheadline: string;
  cta: { label: string; href: string };
}

const slides: HeroSlide[] = [
  {
    src: "/images/hero/banner2.jpg",
    alt: "Victoria Falls with rainbow — one of the Seven Natural Wonders of the World",
    headline: "Your Gateway to Africa",
    subheadline:
      "Tailor-made vacations, flights, and cargo services to destinations across the continent.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
  {
    src: "/images/hero/banner4.jpg",
    alt: "Ghana Independence Arch — Freedom and Justice, Accra",
    headline: "Discover Ghana",
    subheadline:
      "Explore Accra, Cape Coast, and beyond. Direct flights and vacation packages available.",
    cta: { label: "View Ghana Packages", href: "/specials" },
  },
  {
    src: "/images/hero/banner1.jpg",
    alt: "Pretoria skyline, South Africa",
    headline: "Experience South Africa",
    subheadline:
      "From Johannesburg to Cape Town — safaris, city tours, and unforgettable experiences.",
    cta: { label: "Plan Your Trip", href: "/contact" },
  },
  {
    src: "/images/hero/banner3.jpg",
    alt: "Map of West Africa showing Ghana, Nigeria, and surrounding countries",
    headline: "Africa Specialists",
    subheadline:
      "Over 20 years helping Canadians travel to Ghana, Nigeria, South Africa, Kenya, and beyond.",
    cta: { label: "View Our Services", href: "/services" },
  },
];

export function HeroCarousel() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayPlugin.current,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = autoplayPlugin.current;
    if (!autoplay) return;
    if (isPlaying) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Hero image carousel"
      aria-roledescription="carousel"
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex" aria-live="polite">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${slides.length}: ${slide.headline}`}
              aria-hidden={i !== selectedIndex}
            >
              {/* Image with gradient overlay */}
              <div className="relative aspect-[16/7] min-h-[480px] bg-brand-navy sm:min-h-[540px] lg:min-h-[600px]">
                {slide.src && (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={i === 0}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/50 to-transparent" />
              </div>

              {/* Text overlay — only first slide gets h1, rest use p with same styling */}
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="max-w-xl">
                    {i === 0 ? (
                      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        {slide.headline}
                      </h1>
                    ) : (
                      <p
                        className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                        aria-hidden="true"
                      >
                        {slide.headline}
                      </p>
                    )}
                    <p className="mt-4 text-lg leading-relaxed text-white/85 sm:mt-6">
                      {slide.subheadline}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 sm:mt-8">
                      <Button
                        size="lg"
                        className="bg-brand-red text-white hover:bg-brand-red-dark"
                        render={<Link href={slide.cta.href} />}
                        tabIndex={i !== selectedIndex ? -1 : undefined}
                      >
                        {slide.cta.label}
                      </Button>
                      <Button
                        size="lg"
                        className="bg-white text-brand-navy hover:bg-white/90"
                        render={<Link href="/specials" />}
                        tabIndex={i !== selectedIndex ? -1 : undefined}
                      >
                        View Specials
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
        {/* Pause/Play toggle (WCAG 2.2.2) */}
        <button
          onClick={toggleAutoplay}
          className="flex size-8 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <Pause className="size-3.5" aria-hidden="true" />
          ) : (
            <Play className="ml-0.5 size-3.5" aria-hidden="true" />
          )}
        </button>

        {/* Dot indicators */}
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={cn(
              "size-2.5 rounded-full transition-all",
              i === selectedIndex
                ? "scale-125 bg-white"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === selectedIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
