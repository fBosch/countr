import { h, Component } from "preact"
import SignIn from "../components/sign-in"
import Dashboard from "../components/dashboard"
import { auth, database } from "../lib/firebase"
import { Container, Dimmer, Loader } from "semantic-ui-react"


class Home extends Component {

  state = {
    currentUser: null,
    loading: true
  }

  componentWillMount() {
    this.setState({ currentUser: auth.currentUser })
    auth.onAuthStateChanged(currentUser => this.setState({ currentUser, loading: false }))
  }

  render({ }, { currentUser, loading }) {
    if (loading) return (
      <Dimmer active>
        <Loader size='massive'></Loader>
      </Dimmer>
    )
    return (
      <Container className="home">
        {currentUser !== null ? <Dashboard /> : <SignIn />}
      </Container>
    )
  }
}

export default Home
