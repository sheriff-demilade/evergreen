import { formInputs } from "../lib/data";
import Button from "./button";

const Form = () => {
  return (
    <form className="w-full sm:w-96 lg:w-full mx-auto space-y-8 lg:space-y-10 px-4 lg:px-6 pt-10 pb-6 lg:pt-10 shadow-lg hover:shadow-xl hover:-translate-y-4 duration-500 rounded-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-8 lg:gap-y-10">
        {formInputs.map((formInput) => (
          <FormInput key={formInput.id} {...formInput} />
        ))}
      </div>
      <TextArea id="message" label="Message" rows={3} />
      <Button className="w-full">Get Strated</Button>
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
        className="peer block w-full focus:outline-none placeholder-transparent"
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
