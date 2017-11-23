import { h, Component } from "preact";
import { auth, googleAuthProvider, facebookAuthProvider, githubAuthProvider } from "../lib/firebase"
import Logo from "../assets/logo.svg"
import { GoogleLoginButton, FacebookLoginButton, TwitterLoginButton, GithubLoginButton } from "react-social-login-buttons"

class SignIn extends Component {

  signInGoogle = () => auth.signInWithRedirect(googleAuthProvider)
  signInFacebook = () => auth.signInWithRedirect(facebookAuthProvider)
  signInGithub = () => auth.signInWithRedirect(githubAuthProvider)
  signInTwitter = () => auth.signInWithRedirect(twitterAuthProvider)

  render({ }, { }) {
    return <div className="sign-in">
      <GoogleLoginButton onClick={this.signInGoogle} />
      <FacebookLoginButton onClick={this.signInFacebook} />
      <TwitterLoginButton onClick={this.signInTwitter} />
      <GithubLoginButton onClick={this.signInGithub} />
    </div >
  }
}

export default SignIn;
