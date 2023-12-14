import { formInputs } from "../lib/data";
import LinkButton from "./link-button";

const Form = () => {
  return (
    <form className=" grid grid-cols-1 gap-y-8 px-4 py-6 shadow-xl rounded-xl">
      {formInputs.map((formInput) => (
        <FormInput key={formInput.id} {...formInput} />
      ))}
      <TextArea id="message" label="Message" rows={3} />
      <LinkButton href="/" variant="accent-1">
        Get Strated
      </LinkButton>
    </form>
  );
};

type FormInputProps = { id: string; label: string; type: string };

const FormInput = ({ id, label, type }: FormInputProps) => {
  return (
    <div className="relative border-b border-Paragraph pb-1">
      <input
        id={id}
        type={type}
        placeholder={label}
        className="peer block w-full focus:outline-none placeholder-transparent"
      />
      <label
        htmlFor={id}
        className="absolute top-0 inline-block text-xs font-semibold -translate-y-full peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm  peer-focus:-translate-y-full peer-focus:text-xs duration-300 pb-[3px]"
      >
        {label}
      </label>
    </div>
  );
};

type TextAreaProps = {
  id: string;
  label: string;
  rows: number;
};

const TextArea = ({ id, label, rows }: TextAreaProps) => {
  return (
    <div className="relative border-b border-Paragraph pb-1">
      <textarea
        id={id}
        rows={rows}
        placeholder={label}
        className="peer block w-full focus:outline-none placeholder-transparen"
      ></textarea>
      <label
        htmlFor={id}
        className="absolute top-0 inline-block text-xs font-semibold -translate-y-full peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm  peer-focus:-translate-y-full peer-focus:text-xs duration-300 pb-[3px]"
      >
        {label}
      </label>
    </div>
  );
};

export default Form;
