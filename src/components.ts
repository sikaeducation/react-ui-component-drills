import ViewInputField from "./views/ViewInputField"
import ViewToggle from "./views/ViewToggle"

export const components = [{
  id: "toggle",
  name: "Toggle",
  view: ViewToggle,
}, {
  id: "input-field",
  name: "InputField",
  view: ViewInputField,
}] as const

export const componentIds = components.map(component => component.id)

export type ComponentId = typeof components[number]["id"]
