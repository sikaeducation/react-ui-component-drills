import {useState} from 'react';

import Toggle from '../components/Toggle/Toggle';

function ViewToggle() {
  const [toggled, setToggled] = useState(false)

  return (
    <div className="ViewToggle">
      <section className="component-demo">
        <h2>Toggle</h2>
        <Toggle
          id="toggle"
          label="I agree to these terms"
          on={toggled}
          onToggle={() => setToggled(!toggled)}
        />
      </section>
      <section>
        <h2>Usage</h2>
        <p>User input with an on/off states.</p>
        <pre>
          <code>
            {`
<Toggle
  id="toggle"
  label="I agree to these terms"
  on={toggled}
  onToggle={() => setToggled(!toggled)}
/>
            `}
          </code>
        </pre>
      </section>
      <section className="api-documentation">
        <h2>API</h2>
        <table>
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
            <td>on</td>
            <td>boolean</td>
            <td>The current state of the toggle</td>
          </tr>
          <tr>
            <td>onToggle</td>
            <td>{`() => void`}</td>
            <td>Called when someone interacts with the toggle</td>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default ViewToggle;
