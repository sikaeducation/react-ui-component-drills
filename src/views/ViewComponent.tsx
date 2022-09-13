import {useParams} from "react-router-dom";
import ViewToggle from "./ViewToggle";

const componentIds = ["toggle"] as const
type ComponentId = typeof componentIds[number]

function ViewComponent() {
  const components = {
    toggle: ViewToggle,
  } as const
  const params = useParams()
  const componentId = params.componentId || "toggle"
  if (isComponentName(componentId)) {
    const CurrentComponent = components[componentId]
    return (
      <div className="view-component">
        <CurrentComponent />
      </div>
    );
  } else {
    return (
      <p>This component doesn't exist</p>
    );
  }

}

export default ViewComponent;

function isComponentName(name: ComponentId | string): name is ComponentId {
  return componentIds.includes(name as ComponentId)
}
