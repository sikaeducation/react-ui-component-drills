import './Toggle.scss';

type props = {
  id: string;
  label: string;
  on: boolean;
  onToggle: () => void;
}

function Toggle({id, label, on, onToggle}: props) {
  return (
    <div className="Toggle">
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" id={id} checked={on} onChange={() => onToggle()} />
    </div>
  );
}

export default Toggle;
