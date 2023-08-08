"use client";

import {
  experimental_useOptimistic,
  useEffect,
  useState,
  useTransition,
} from "react";
import removeNameAction from "./actions";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Other({ initialNames }: { initialNames: string[] }) {
  const [names, setNames] = useState(initialNames);
  // const [names, removeName] = experimental_useOptimistic<string[], string>(
  //   initialNames,
  //   (cur, name) => cur.filter((n) => n !== name)
  // );

  // const [, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  useEffect(() => {
    setNames(initialNames);
  }, [initialNames]);

  return (
    <div>
      <ul>
        {names.map((name) => (
          <li className="py-2 px-4 text-4xl flex gap-4" key={name}>
            {name}{" "}
            <Button
              onClick={() => {
                setNames((cur) => cur.filter((n) => n !== name));
                // removeName(name);
                // startTransition(() => {
                removeNameAction(name);
                // });
              }}
            >
              X
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
