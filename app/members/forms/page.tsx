import type { Metadata } from "next";
import { memberForms } from "@/content/announcements";

export const metadata: Metadata = {
  title: "Members — Forms & Permission Slips",
  robots: { index: false, follow: false },
};

export default function MembersFormsPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink-900">
        Forms &amp; Permission Slips
      </h1>
      <p className="mt-2 text-sm text-stone-600">
        Point each `href` in <code className="rounded bg-parchment-200 px-1.5 py-0.5 text-xs">content/announcements.ts</code>{" "}
        at a real PDF in <code className="rounded bg-parchment-200 px-1.5 py-0.5 text-xs">/public/documents/</code> or a
        Google Drive link.
      </p>

      <ul className="mt-8 divide-y divide-stone-300 rounded-sm border border-stone-300 bg-white">
        {memberForms.map((form) => (
          <li key={form.title} className="flex flex-wrap items-center justify-between gap-3 p-5">
            <div>
              <p className="font-display text-base font-bold text-ink-900">{form.title}</p>
              <p className="mt-1 text-sm text-stone-600">{form.description}</p>
            </div>
            <a
              href={form.href}
              className="shrink-0 rounded-sm border-2 border-purple-700 px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-purple-700 transition-colors hover:bg-purple-50"
            >
              {form.fileType} →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
