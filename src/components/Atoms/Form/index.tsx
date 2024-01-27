import { Children, ReactNode, createElement } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  defaultValues?: Record<string, any>;
  children: ReactNode;
  onSubmit: <T>(data: T) => void;
}

export default function Form({
  defaultValues,
  children,
  onSubmit,
  ...props
}: FormProps) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} {...props}>
        {Children.map<any, any>(children, (child) => {
          return child.props.name
            ? createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  key: child.props.name,
                },
              })
            : child;
        })}
      </form>
    </FormProvider>
  );
}
