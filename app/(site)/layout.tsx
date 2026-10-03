import { Footer, Header } from "@/components/site";
import { getSettings } from "@/lib/content";

export default async function SiteLayout({ children }: LayoutProps<"/">) {
  const settings = await getSettings();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-gold focus:p-3 focus:font-bold">
        Skip to content
      </a>
      <Header visitUrl={settings.visitFormUrl} />
      <main id="main">{children}</main>
      <Footer settings={settings} />
    </>
  );
}
