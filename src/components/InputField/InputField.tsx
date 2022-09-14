import './InputField.scss';

type props = {
  id: string;
  label: string;
  value: string;
  required?: boolean;
  onUpdate: (newValue: string) => void;
}

function InputField({id, label, value, required, onUpdate}: props) {
  return (
    <div className="InputField">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} value={value} required={required} onChange={(event) => onUpdate(event.target.value)} />
    </div>
  );
}

export default InputField;
