"use server";

import { revalidatePath } from "next/cache";
import { removeName } from "./server";

export default async function removeNameAction(name: string) {
  await removeName(name);
  // revalidatePath("/other");
}
