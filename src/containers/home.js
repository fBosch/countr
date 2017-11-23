import { h, Component } from "preact"
import SignIn from "../components/sign-in"
import Dashboard from "../components/dashboard"
import { auth, database } from "../lib/firebase"
import Loading from "react-loading"


export default class Home extends Component {

  state = {
    currentUser: null,
    loading: true
  }

  componentWillMount() {
    requestAnimationFrame(() => {
      this.setState({ currentUser: auth.currentUser })
      auth.onAuthStateChanged(currentUser => this.setState({ currentUser, loading: false }))
    })
  }

  render({ }, { currentUser, loading }) {
    if (loading) {
      return <div className="loader">
        Loading...
      </div>
    }
    return (
      <div className="home">
        {currentUser !== null ? <Dashboard /> : <SignIn />}
      </div>
    )
  }
}


