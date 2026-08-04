import { siteConfig } from "@/content/site-config";

/**
 * Plain HTML form, no client JS or backend required. Posts to Formspree
 * (https://formspree.io) — a free tier that forwards submissions straight
 * to an inbox with zero server code. To activate:
 *   1. Create a free Formspree account and a new form.
 *   2. Replace FORMSPREE_ENDPOINT below with the ID Formspree gives you.
 * Until then this form still renders correctly, it just won't deliver —
 * the mailto fallback link below always works.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_FORM_ID";

export default function InquiryForm() {
  return (
    <div className="rounded-sm bg-white p-6 shadow-patch sm:p-8">
      <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-5">
        <input type="hidden" name="_subject" value="New inquiry from Troop 65 website" />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="parentName" className="mb-1.5 block text-sm font-semibold text-ink-900">
              Parent / Guardian Name
            </label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              className="w-full rounded-sm border border-stone-300 bg-parchment-50 px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-purple-600"
            />
          </div>
          <div>
            <label htmlFor="scoutInfo" className="mb-1.5 block text-sm font-semibold text-ink-900">
              Scout&apos;s Name &amp; Age
            </label>
            <input
              id="scoutInfo"
              name="scoutInfo"
              type="text"
              placeholder="Optional"
              className="w-full rounded-sm border border-stone-300 bg-parchment-50 px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-purple-600"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-sm border border-stone-300 bg-parchment-50 px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-purple-600"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink-900">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Optional"
              className="w-full rounded-sm border border-stone-300 bg-parchment-50 px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-purple-600"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a bit about your Scout, or ask us anything."
            className="w-full resize-none rounded-sm border border-stone-300 bg-parchment-50 px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-purple-600"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-purple-700 px-6 py-3 font-display text-base font-bold uppercase tracking-wide text-parchment-50 shadow-patch transition-[transform,background-color] duration-200 ease-[var(--ease-spring)] hover:-translate-y-0.5 hover:bg-purple-600 active:translate-y-0 sm:w-auto"
        >
          Send Inquiry
        </button>
      </form>
      <p className="mt-4 text-xs text-stone-600">
        Prefer email?{" "}
        <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-purple-700 hover:text-purple-600">
          {siteConfig.contact.email}
        </a>
      </p>
    </div>
  );
}
