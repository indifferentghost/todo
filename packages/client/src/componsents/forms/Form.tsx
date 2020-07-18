import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type Props = {
	children: React.ReactNode
	onSubmit: SubmitHandler<Record<string, any>>
};

export default function Form({ onSubmit, children }: Props) {
  const methods = useForm();

  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
				{children}
      </form>
    </FormProvider>
  );
}