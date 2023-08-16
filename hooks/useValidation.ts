import { validationAtom } from "@/atoms/validation";
import { useSetAtom } from "jotai";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import useSWR, { Fetcher } from "swr";

type ValidateResponse = {
  valid: boolean;
  validationId: string;
};

const fetcher: Fetcher<ValidateResponse, string> = (url) =>
  fetch(url).then((res) => res.json());

export const useValidation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setValidation = useSetAtom(validationAtom);

  const id = useMemo(() => searchParams.get("fbclid"), [searchParams]);

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
    if (data?.valid) {
      localStorage.setItem("validated", "true");
    }
    router.replace("/");
  }, [data?.valid, error, isLoading, router, setValidation]);
};
