import { h, Component } from "preact"
import closeButton from "../assets/delete-button.svg"

export default class Modal extends Component {

  render(props, { }) {
    if (props.open) {
      return (
        <div class="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={props.onCloseClick}>
              <img src={closeButton} alt="close" />
            </button>
            {props.children}
          </div>
          <div className="modal__backdrop" onClick={props.onCloseClick} />
        </div>
      )
    }
  }
}

