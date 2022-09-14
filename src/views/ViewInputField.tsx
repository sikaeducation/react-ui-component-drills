import {useState} from 'react';

import InputField from '../components/InputField/InputField';

function ViewInputField() {
  const [value, setValue] = useState("")

  return (
    <div className="ViewToggle">
      <section className="component-demo">
        <h2>Input Field</h2>
        <div className="component">
          <InputField
            id="toggle"
            label="Username"
            value={value}
            required={true}
            onUpdate={(value: string) => setValue(value)}
          />
        </div>
      </section>
      <section>
        <h2>Usage</h2>
        <p>User short-form text input</p>
        <pre>
          <code>
            {`
<InputField
  id="toggle"
  label="I agree to these terms"
  value={value}
  required={true}
  onUpdate={(value: string) => setValue(value)}
/>
            `}
          </code>
        </pre>
      </section>
      <section className="api-documentation">
        <h2>API</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>id</td>
              <td>string</td>
              <td>Used for anchoring and to link the label to the input field</td>
            </tr>
            <tr>
              <td>label</td>
              <td>string</td>
              <td>Label text</td>
            </tr>
            <tr>
              <td>value</td>
              <td>string</td>
              <td>The current state of the input</td>
            </tr>
            <tr>
              <td>onUpdate</td>
              <td>{`(newValue: string) => void`}</td>
              <td>Called when someone changes the input</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default ViewInputField;
