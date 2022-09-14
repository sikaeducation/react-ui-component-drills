import {useState} from 'react';

import Toggle from '../components/Toggle/Toggle';
import ComponentDocumentation from './ComponentDocumentation';

export default function ViewToggle() {
  const [toggled, setToggled] = useState(false)

  return (
    <ComponentDocumentation
      name="Toggle"
      usage="User input with an on/off states."
      example={`
<Toggle
  id="toggle"
  label="I agree to these terms"
  on={toggled}
  onToggle={() => setToggled(!toggled)}
/>
      `}
      props={[{
        name: "id",
        type: "string",
        description: "Used for anchoring and to link the label to the input field",
      },{
        name: "label",
        type: "string",
        description: "Label text",
      },{
        name: "on",
        type: "boolean",
        description: "The current state of the toggle",
      },{
        name: "onToggle",
        type: "() => void",
        description: "Called when someone interacts with the toggle",
      }]}
    >
      <Toggle
        id="toggle"
        label="I agree to these terms"
        on={toggled}
        onToggle={() => setToggled(!toggled)}
      />
    </ComponentDocumentation>
  )
}
