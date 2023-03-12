import { TextField } from "@mui/material";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  label: string;
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
}: IInputProps) => {
  return (
    <fieldset>
      <TextField
        label={label}
        {...register}
        type={type}
        defaultValue={defaultValue}
        value={value}
      />
      {error ? <p>error.message</p> : null}
    </fieldset>
  );
};

export default Input;
