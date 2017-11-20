import { h, Component } from "preact"
import Counters from "./counters"
import Toolbar from "./toolbar"
import { Divider } from "semantic-ui-react"
export default class Dashboard extends Component {
  render({ }, { }) {
    return (
      <div>
        <Toolbar />
        <Divider horizontal clearing  hidden/>
        <Counters />
      </div>
    )
  }
}
