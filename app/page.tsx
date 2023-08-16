"use client";
import { validationAtom } from "@/atoms/validation";
import { useAtomValue } from "jotai";

export default function Home() {
  const validationResult = useAtomValue(validationAtom);

  if (
    !validationResult ||
    !validationResult.valid ||
    validationResult.hasError
  ) {
    return <p>だーめ</p>;
  }

  return (
    <main>
      <p>良さ👏</p>
    </main>
  );
}
