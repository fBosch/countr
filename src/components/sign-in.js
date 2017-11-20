import { h, Component } from "preact";
import { auth, googleAuthProvider } from "../lib/firebase"
import { Button, Icon, Container, Segment, Image, Header, Divider } from "semantic-ui-react"
import Logo from "../assets/logo.svg"


class SignIn extends Component {
  state = { loading: false }

  signIn = () => {
    this.setState({ loading: true })
    auth.signInWithRedirect(googleAuthProvider)
  }

  render({ }, { loading }) {
    return (
      <Container textAlign="center" text className="center">
        <Header as="h1">
          ⌛
          Countr
          </Header>
        <Divider horizontal>
          Sign In
        </Divider>
        <Button circular color="google plus" icon="google plus" loading={loading} onClick={this.signIn} size="massive" />
      </Container>

    )
  }
}

export default SignIn;
