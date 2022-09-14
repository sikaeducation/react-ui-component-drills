import {ReactNode} from "react";

type PropDocumentation = {
  name: string;
  type: string;
  description: string;
}

type Props = {
  name: string;
  usage: string;
  example: string;
  children: ReactNode;
  props?: PropDocumentation[];
}

function ComponentDocumentation({ name, usage, example, props, children }: Props) {
  return (
    <div className="ComponentDocumentation">
      <section className="component-demo">
        <h2>{name}</h2>
        <div className="component">
          {children}
        </div>
      </section>
      <section>
        <h2>Usage</h2>
        <p>{usage}</p>
        <pre>
          <code>{example}</code>
        </pre>
      </section>
      {props?.length && (
        <section className="api-documentation">
          <h2>API</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
            <tbody>
              {props.map(({name, type, description}) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{type}</td>
                  <td>{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}

export default ComponentDocumentation;
