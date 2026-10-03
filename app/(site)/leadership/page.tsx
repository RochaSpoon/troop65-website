import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { PageHero, container, display } from "@/components/site";
import { getLeadership } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership",
  description: "The scouts who serve as Troop 65's officers this year.",
};

export default async function LeadershipPage() {
  const page = await getLeadership();
  return (
    <>
      <PageHero kicker="Leadership" heading={page.heading} intro={page.intro} />
      <div className={`${container} pb-24`}>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 border-t-4 border-ink pt-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
          {(page.officers ?? []).map((o, i) => (
            <li key={i}>
              <div className="relative aspect-square w-full overflow-hidden bg-purple">
                {o.photo?.src ? (
                  <Photo photo={o.photo} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" position={o.photo.hotspot ? undefined : "50% 30%"} />
                ) : (
                  <div className="flex h-full items-center justify-center" aria-hidden="true">
                    <span className={`${display} numeral-outline-white text-[96px] font-black md:text-[128px]`}>65</span>
                  </div>
                )}
              </div>
              <p className="mt-4 font-public text-[13px] font-bold uppercase tracking-[0.14em] text-purple">{o.position}</p>
              <p className="mt-1 font-public text-xl font-bold">{o.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
