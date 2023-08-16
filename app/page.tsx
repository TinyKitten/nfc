"use client";
import { useValidationPassed } from "@/hooks/useValidationPassed";

export default function Home() {
  const validationResult = useValidationPassed();

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
