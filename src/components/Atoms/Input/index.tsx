import { FC, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  className?: string;
  icon?: IconType;
}

export const Input: FC<InputProps> = ({
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
        <input
          id={name}
          {...register(name)}
          {...props}
          className={`w-full text-sm p-3 focus:outline-none ${
            Icon && "pl-10"
          } border-b border-purple-900 bg-transparent placeholder-purple-900 placeholder-opacity-50 text-purple-900`}
        />
      </div>
    </div>
  );
};
