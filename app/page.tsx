import Link from "next/link";

// Temporary chooser while the two home page directions are under review.
export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-5 py-24 font-public">
      <h1 className="font-shoulders text-5xl font-extrabold uppercase text-purple">Troop 65 home page</h1>
      <p className="mt-4 text-muted">Two directions for review.</p>
      <ul className="mt-8 space-y-3 text-lg font-semibold">
        <li>
          <Link href="/a" className="underline">Direction A: Field manual</Link>
        </li>
        <li>
          <Link href="/b" className="underline">Direction B: Badge</Link>
        </li>
      </ul>
    </main>
  );
}
