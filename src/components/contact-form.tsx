"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/action";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className="rounded-xl border bg-brand-green/5 p-8 text-center" role="status" aria-live="polite">
        <CheckCircle2 className="mx-auto size-12 text-brand-green" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold">Message Sent!</h3>
        <p className="mt-2 text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.status === "error" && (
        <div role="alert" className="flex items-start gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full Name <span className="text-destructive" aria-hidden="true">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            required
            minLength={2}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive" aria-hidden="true">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="416-000-0000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="e.g. Flight to Accra"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive" aria-hidden="true">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your travel plans — destinations, dates, number of travellers..."
          rows={5}
          required
          minLength={10}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
