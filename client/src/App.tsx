import { Subscriptions } from "common-types"
import { LIMITS, logoMaxAllowedSize } from "./constants"

export const App = () => {
  return (
    <>
      <div>test app {LIMITS[Subscriptions.PRO]}</div>
      <div>{logoMaxAllowedSize.width}</div>
    </>
  )
}
