import { FC, TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { IconType } from "react-icons";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  className?: string;
  icon?: IconType;
}

export const Textarea: FC<TextareaProps> = ({
  label,
  name,
  className,
  icon: Icon,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={name} className="text-purple-900">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-900" />
        )}
        <textarea
          id={name}
          {...register(name)}
          {...props}
          className={`w-full text-sm p-3 focus:outline-none ${
            Icon && "pl-10"
          } border-b border-purple-900 bg-transparent placeholder-purple-900 placeholder-opacity-50 text-purple-900 h-32`}
        />
      </div>
    </div>
  );
};
