import NotificationDot from "../components/NotificationDot/NotificationDot";
import ComponentDocumentation from "./ComponentDocumentation";

export default function ViewNotificationDot() {
  return (
    <ComponentDocumentation
      name="NotificationDot"
      usage="Renders a notification dot"
      example={`
<NotificationDot />
      `}
    >
      <NotificationDot />
    </ComponentDocumentation>
  )
}
