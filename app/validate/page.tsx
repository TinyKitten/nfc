"use client";
import { validationAtom } from "@/atoms/validation";
import { useSetAtom } from "jotai";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useSWR, { Fetcher } from "swr";

type ValidateResponse = {
  valid: boolean;
  password: string;
};

const fetcher: Fetcher<ValidateResponse, string> = (url) =>
  fetch(url).then((res) => res.json());

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setValidation = useSetAtom(validationAtom);

  const id = searchParams.get("fbclid");

  const { data, error, isLoading } = useSWR(`/api/validate?id=${id}`, fetcher);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    setValidation((prev) => ({
      ...prev,
      valid: data?.valid ?? false,
      hasError: !!error,
    }));
    router.replace("/");
  }, [data?.valid, error, isLoading, router, setValidation]);

  return null;
}
