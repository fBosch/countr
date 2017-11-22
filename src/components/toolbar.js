import { h, Component } from "preact"
import AddCounterForm from "./add-counter-form"
import { Emoji } from "emoji-mart"
import { auth } from "../lib/firebase"
import Modal from "./modal"
import addTime from "../assets/add-time.svg"

export default class Toolbar extends Component {

  state = {
    open: false
  }

  toggleModal = () => this.setState({ open: !this.state.open })

  render({ }, { emoji, open }) {
    return (
      <div className="toolbar">
        <button class="button button--add" onClick={this.toggleModal}>
          <img src={addTime} />
        </button>
        <Modal open={open} onCloseClick={this.toggleModal}>
          <AddCounterForm onSubmit={this.toggleModal} />
        </Modal>
      </div>
    )
  }
}
