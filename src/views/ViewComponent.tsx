import {useParams} from "react-router-dom";
import {ComponentId, componentIds, components} from "../components";

function ViewComponent() {
  const params = useParams()
  const componentId = params.componentId || "toggle"
  if (isComponentName(componentId)) {
    const CurrentComponent = components.find(component => component.id === componentId)!.view
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
