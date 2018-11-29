import * as React from "react"

import sfcCounterUsage from "../components/sfc-counter.usage"
import sfcSpreadAttributesUsage from "../components/sfc-spread-attributes.usage"
import statefulCounterUsage from "../components/stateful-counter.usage"
import statefulCounterWithDefaultUsage from "../components/stateful-counter-with-default.usage"
import genericListUsage from "../components/generic-list.usage"

export const Home = () => {
  return (
    <section>
      <SFCCounter />
      <SFCSpreadAttributes />
      <StatefulCounter />
      <StatefulCounterWithInitialCount />
      <UserListUsage />
    </section>
  )
}
