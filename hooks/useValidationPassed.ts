import { validationAtom } from "@/atoms/validation";
import { useAtom } from "jotai";
import { useEffect } from "react";

export const useValidationPassed = () => {
  const [validated, setValidation] = useAtom(validationAtom);
  useEffect(() => {
    const validated = localStorage.getItem("validated");
    setValidation({ valid: validated === "true", hasError: false });
  }, [setValidation]);

  return validated;
};
