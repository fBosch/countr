import { h, Component } from "preact"
import { auth, database } from "../lib/firebase"
export default class Counters extends Component {

  componentWillMount() {
    const exercisesRef = database.ref('/' + auth.currentUser.uid + '/counters');
    exercisesRef.on('value', snapshot => {
      this.setState({ counters: snapshot.val() });
      console.log(snapshot.val())
    })
  }


  render({ }, { counters }) {
    if (counters) {
      return (
        <div>
          {counters.map(counter => <div>{counter.name}</div>)}
        </div>
      )
    }
  }
}
