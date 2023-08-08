import fs from "fs";

export async function removeName(name: string) {
  setTimeout(() => {
    let names = JSON.parse(fs.readFileSync("names.json", "utf-8"));
    names = names.filter((n: string) => n !== name);
    fs.writeFileSync("names.json", JSON.stringify(names), "utf-8");
  }, 1000);
}

export function getNames() {
  const names = JSON.parse(fs.readFileSync("names.json", "utf-8"));
  return names;
}
