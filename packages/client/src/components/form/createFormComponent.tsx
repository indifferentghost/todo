import React from 'react';
import { ValidationRules, useFormContext } from 'react-hook-form';

type FormProps<T> = Omit<T, 'ref' | 'errors' | 'error'> & {
	registerProps?: ValidationRules;
};

export default function createFormInput<Props>(
	Component: React.ComponentType<Props>
): React.ComponentType<FormProps<Props>> {
	function FormComponent(props: FormProps<Props>) {
		const form = useFormContext();

		return (
			// @ts-ignore:
			<Component
				ref={props.registerProps ? form.register(props.registerProps) : form.register}
				errors={form.errors}
				{...props}
			/>
		);
	} 

	FormComponent.displayName = `Form${Component.displayName || Component.name}`;

	return FormComponent;
}