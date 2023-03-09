import { TextField } from "@mui/material";
import {
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";

interface IInputProps {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  type?: "name" | "password" | "email"| "img";
}

const Input = ({ label, register, error, type }: IInputProps) => {
  return (
    <fieldset>
      <TextField label={label} {...register} type={type}/>
      {error ? <p>error.message</p> : null}
    </fieldset>
  );
};

export default Input;
