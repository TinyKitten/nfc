"use client";
import { useValidationPassed } from "@/hooks/useValidationPassed";

export default function Home() {
  const validationResult = useValidationPassed();

  if (
    (!validationResult ||
      !validationResult.valid ||
      validationResult.hasError) &&
    process.env.NODE_ENV !== "development"
  ) {
    return <p>だーめ</p>;
  }

  return (
    <main>
      <p>
        まだなにもないです。
        <a
          href="https://tinykitten.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ここ
        </a>
        でも見ててください。
      </p>
    </main>
  );
}
