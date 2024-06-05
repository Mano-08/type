import { FormValues } from "@/app/page";
import React, { createContext, useContext, ReactNode } from "react";

const FormValuesContext = createContext<FormValues | null>(null);

export const FormValuesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FormValuesContext.Provider value={null}>
      {children}
    </FormValuesContext.Provider>
  );
};

export const useFormValuesContext = () => {
  const context = useContext(FormValuesContext);
  if (!context) {
    throw new Error(
      "useFormValuesContext must be used within a FormValuesProvider"
    );
  }
  return context;
};
