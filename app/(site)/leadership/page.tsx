import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { SectionMasthead, container, headline, label } from "@/components/site";
import { getLeadership } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership",
  description: "The scouts who serve as Troop 65's officers this year.",
};

export default async function LeadershipPage() {
  const page = await getLeadership();
  const officers = page.officers ?? [];
  return (
    <>
      <SectionMasthead section="Leadership" heading={page.heading} intro={page.intro} />

      <div className={`${container} grid gap-10 pb-20 lg:grid-cols-12`}>
        {/* Staff box: every officer in one list, like the masthead of a paper. */}
        <aside className="lg:col-span-4 lg:order-2">
          <div className="border-4 border-double border-ink p-6 lg:sticky lg:top-28">
            <p className={`${headline} text-center text-[28px]`}>Troop 65 officers</p>
            <p className={`${label} mt-1 text-center text-[11px] text-muted`}>This year</p>
            <dl className="mt-5">
              {officers.map((o, i) => (
                <div key={i} className="border-t border-line py-2 text-center">
                  <dt className={`${label} text-[10px] text-purple`}>{o.position}</dt>
                  <dd className="text-[17px] font-semibold">{o.name}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

        <ul className="rule-double grid grid-cols-2 gap-x-5 gap-y-8 pt-8 sm:grid-cols-3 lg:col-span-8 lg:order-1">
          {officers.map((o, i) => (
            <li key={i}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-purple">
                {o.photo?.src ? (
                  <Photo photo={o.photo} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 50vw" position={o.photo.hotspot ? undefined : "50% 30%"} />
                ) : (
                  <div className="flex h-full items-center justify-center" aria-hidden="true">
                    <span className={`${headline} text-[96px] text-white/90`}>65</span>
                  </div>
                )}
              </div>
              <p className={`${label} mt-3 border-t border-ink pt-2 text-[11px] text-purple`}>{o.position}</p>
              <p className="mt-0.5 font-sans text-[18px] font-bold leading-tight">{o.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
