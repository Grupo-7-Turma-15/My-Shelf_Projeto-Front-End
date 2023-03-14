import { TextField } from "@mui/material";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset } from "./style";

interface IInputProps {
  label: string;
  className: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  type?: "name" | "password" | "email" | "img";
  defaultValue?: string;
  value?: number;
}

const Input = ({
  label,
  register,
  error,
  type,
  defaultValue,
  value,
  className,
}: IInputProps) => {
  return (
    <StyledFieldset>
      <TextField
        label={label}
        {...register}
        type={type}
        defaultValue={defaultValue}
        value={value}
        className={className}
      />
      {error ? <p>error.message</p> : null}
    </StyledFieldset>
  );
};

export default Input;
