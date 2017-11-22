import { h, Component } from "preact"
import Counters from "./counters"
import Toolbar from "./toolbar"

export default class Dashboard extends Component {
  render({ }, { }) {
    return (
      <div>
        <Toolbar />
        <Counters />
      </div>
    )
  }
}
