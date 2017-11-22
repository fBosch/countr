import { h, Component } from "preact";
import { auth, googleAuthProvider } from "../lib/firebase"
import Logo from "../assets/logo.svg"
import { Emoji } from "emoji-mart"


class SignIn extends Component {
  state = { loading: false }

  signIn = () => {
    this.setState({ loading: true })
    auth.signInWithRedirect(googleAuthProvider)
  }

  render({ }, { loading }) {
    return (
      <div className="center text-center">
        <Emoji emoji={{ id: "hourglass" }} size={20} />
        Countr

        <button onClick={this.signIn}>Sign In</button>
      </div>
    )
  }
}

export default SignIn;
