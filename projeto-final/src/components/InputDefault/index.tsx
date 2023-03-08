import { TextField } from "@mui/material";
import {
  FieldError,
  FieldErrors,
  UseFormRegisterReturn,
} from "react-hook-form";

interface IInputProps {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({ label, register, error }: IInputProps) => {
  return (
    <fieldset>
      <TextField label={label} {...register} />
      {error ? <p>error.message</p> : null}
    </fieldset>
  );
};

export default Input;
