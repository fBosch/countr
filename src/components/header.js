import { h, Component } from "preact"
import { auth } from "../lib/firebase"
import { Link } from "preact-router"
import { Emoji } from "emoji-mart"
import logo from "../assets/logo.svg"


export default class Header extends Component {
  state = {
    currentUser: null
  }

  signOut = () => auth.signOut()

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => this.setState({ currentUser }))
  }

  render({ }, { currentUser }) {
    return (
      <div class="header">
        <img src={logo} alt="Countr" className="header__logo" />
      </div>
    )
  }
}

