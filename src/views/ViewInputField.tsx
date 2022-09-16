import {useState} from 'react';

import InputField from '../components/InputField/InputField';
import ComponentDocumentation from './ComponentDocumentation';

export default function ViewInputField() {
  const [value, setValue] = useState("")

  return (
    <ComponentDocumentation
      name="Input Field"
      usage="User short-form text input"
      example={`
<InputField
  id="toggle"
  label="I agree to these terms"
  value={value}
  required={true}
  onUpdate={(value: string) => setValue(value)}
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
        name: "value",
        type: "string",
        description: "The current state of the input",
      },{
        name: "required?",
        type: "boolean",
        description: "Whether the field is required, defaults to false",
      },{
        name: "onUpdate",
        type: "(newValue: string) => void",
        description: "Called when someone changes the input",
      }]}
    >
      <InputField
        id="toggle"
        label="Username"
        value={value}
        required={true}
        onUpdate={(value: string) => setValue(value)}
      />
    </ComponentDocumentation>
  )
}
