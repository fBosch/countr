import { h, Component } from "preact"
import { auth, database } from "../lib/firebase"
import map from "lodash.map"
import Counter from "./counter"
import FadeIn from "react-fade-in"
import Fader from "react-fader"

export default class Counters extends Component {

  componentWillMount() {
    const countersRef = database.ref('/' + auth.currentUser.uid + '/counters');
    countersRef.on('value', snapshot => this.setState({ counters: snapshot.val() }))
  }

  render({ }, { counters }) {
    if (counters) {
      return (
        <div className="counters">
          <FadeIn>
            {map(counters, (counter, key) => <Counter key={key} keyValue={key} counter={counter} />)}
          </FadeIn>
        </div>
      )
    }
  }
}
