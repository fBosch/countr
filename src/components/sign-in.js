import { h, Component } from "preact";
import { auth, googleAuthProvider } from "../lib/firebase"
import { Button, Icon, Container, Segment, Image, Header } from "semantic-ui-react"
import Logo from "../assets/logo.svg"


class SignIn extends Component {
  state = { loading: false }

  signIn = () => {
    this.setState({ loading: true })
    auth.signInWithRedirect(googleAuthProvider)
  }

  render({ }, { loading }) {
    return (
      <Container textAlign="center" text>
        <Segment compact padded raised textAlign="center" className="center" >
          <Header as="h1">
            <Image src={Logo} size='medium' centered size="large" />
            Countr
          </Header>
          <Button circular color="google plus" loading={loading} onClick={this.signIn} size="massive">
            <Icon name='google plus' /> Sign In
          </Button>
        </Segment>
      </Container>

    )
  }
}

export default SignIn;
