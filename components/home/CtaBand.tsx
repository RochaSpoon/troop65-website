import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";

export default function CtaBand() {
  return (
    <section className="bg-gold-500 py-16 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-[-0.02em] text-purple-950 sm:text-5xl">
          Come see for yourself
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-purple-950/80">
          The best way to understand {siteConfig.nickname} is to sit in on a meeting.
          No commitment, no pressure — just show up.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Button href="/join" variant="outline" className="border-purple-950 text-purple-950 hover:bg-purple-950/10">
            Plan Your Visit
          </Button>
          <Button
            href={`mailto:${siteConfig.contact.email}`}
            variant="ghost"
            className="text-purple-950 decoration-purple-950"
          >
            Email Us a Question
          </Button>
        </div>
      </div>
    </section>
  );
}
