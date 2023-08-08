import Other from "./other";
import { getNames } from "./server";

export default async function Page() {
  const names = await getNames();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Other initialNames={names} />
    </main>
  );
}
