import { h, Component } from "preact"
import { database, auth } from "../lib/firebase"
import { Emoji } from "emoji-mart"
import moment from "moment"
import TimeAgo from "react-timeago"
import deleteButton from "../assets/delete-button.svg"

export default class Counter extends Component {

  deleteCounter = e => {
    e.preventDefault()
    if (window.confirm(`Do you really want to delete the "${this.props.counter.title}" counter?`)) {
      const counterRef = database.ref('/' + auth.currentUser.uid + '/counters/' + this.props.keyValue)
      counterRef.remove()
    }
  }



  render({ counter }, { }) {
    return (
      <div className="counter" tabIndex={0}>
        <div className="counter__emoji">
          <Emoji emoji={{ id: counter.emoji }} size={50} set="apple" />
        </div>
        <div className="counter__content">
          <div className="counter__title">
            {counter.title}
          </div>
          <div className="counter__countdown">
            <TimeAgo date={moment(counter.dateTime, 'x').toString()} />
          </div>
        </div>
        <button className="counter__delete" onClick={this.deleteCounter}>
          <img src={deleteButton} alt="delete" />
        </button>
      </div>
    )
  }
}
