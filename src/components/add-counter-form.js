import { h, Component } from "preact"
import moment from "moment"
import { auth, database } from "../lib/firebase"
import { DateTimePicker } from "react-widgets"
import { Picker, Emoji } from 'emoji-mart'

export default class AddCounterForm extends Component {
  initialState = {
    title: null,
    emoji: "tada",
    emojiPickerOpened: false,
    loading: false
  }
  state = this.initialState

  componentWillMount() {
    this.setState(this.initialState)
  }

  titleChange = event => this.setState({ title: event.target.value })
  toggleEmojiPicker = () => requestAnimationFrame(() => this.setState({ emojiPickerOpened: !this.state.emojiPickerOpened }))
  setEmoji = emoji => this.setState({ emoji: emoji.id, emojiPickerOpened: false })
  dateChange = dateTime => this.setState({ dateTime })

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ loading: true })
    const { onSubmit } = this.props
    const { title, emoji, dateTime } = this.state
    const countersRef = database.ref('/' + auth.currentUser.uid + '/counters')
    countersRef.push({
      title,
      emoji,
      dateTime: moment(dateTime).format('x')
    }).then(onSubmit).then(() => this.setState(this.initialState))
  }


  render({ }, { emoji, emojiPickerOpened, title }) {
    return (
      <form onSubmit={this.handleSubmit} className="add-counter-form">
        <label htmlFor="title">Title</label>
        <input type="text" className="input" required id="title" value={title} onChange={this.titleChange} />
        <label>Date</label>
        <DateTimePicker inputProps={{ required: true }} name="date" onChange={this.dateChange} />
        <label>Emoji</label>
        <br />
        <input type="hidden" required name="emoji" value={emoji} />
        {emojiPickerOpened
          ? <Picker autoFocus color="#0093e9" title="Choose an Emoji" emoji={emoji} emojiTooltip={true} showPreview={true} set="apple" emojiSize={24} onClick={this.setEmoji} />
          : <div className="add-counter-form__emoji">
            <Emoji size={50} emoji={{ id: emoji }} onClick={this.toggleEmojiPicker} />
          </div>
        }
        {!emojiPickerOpened && <button class="button button--center">Add Counter</button>}
      </form>
    )
  }
}

