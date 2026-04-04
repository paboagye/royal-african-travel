import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <div className="flex size-20 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
        <Plane className="size-10" aria-hidden="true" />
      </div>
      <h1 className="mt-6 text-4xl font-bold tracking-tight">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or no longer exists.
      </p>
      <div className="mt-8 flex gap-4">
        <Button render={<Link href="/" />}>Back to Home</Button>
        <Button variant="outline" render={<Link href="/contact" />}>
          Contact Us
        </Button>
      </div>
    </div>
  );
}
