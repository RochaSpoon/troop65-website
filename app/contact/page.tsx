import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/forms/InquiryForm";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Meeting time, location, and how to reach Troop 65 Long Beach with any questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Location"
        title="Find us on a Tuesday"
        subtitle={`${siteConfig.meeting.locationName}, ${siteConfig.city}, ${siteConfig.state}`}
      />

      <section className="bg-parchment-50 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Details" title="Meeting & contact info" />
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-display text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                  When
                </dt>
                <dd className="mt-1 text-base text-ink-900">
                  {siteConfig.meeting.day}s, {siteConfig.meeting.time}
                </dd>
              </div>
              <div>
                <dt className="font-display text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                  Where
                </dt>
                <dd className="mt-1 text-base text-ink-900">
                  {siteConfig.meeting.locationName}
                  <br />
                  {siteConfig.meeting.address}
                </dd>
              </div>
              <div>
                <dt className="font-display text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                  Email
                </dt>
                <dd className="mt-1 text-base text-ink-900">
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-purple-700 hover:text-purple-600">
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                  Phone
                </dt>
                <dd className="mt-1 text-base text-ink-900">
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`} className="text-purple-700 hover:text-purple-600">
                    {siteConfig.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                  Chartered By
                </dt>
                <dd className="mt-1 text-base text-ink-900">{siteConfig.council}</dd>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-sm shadow-patch-lg">
            {/* TODO: replace mapEmbedSrc in content/site-config.ts with your real
                Google Maps "Embed a map" link once the meeting address is confirmed */}
            <iframe
              title={`Map to ${siteConfig.meeting.locationName}`}
              src={siteConfig.meeting.mapEmbedSrc}
              className="h-96 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-parchment-100 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Get In Touch" title="Send us a message" align="center" />
          <div className="mt-10">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
