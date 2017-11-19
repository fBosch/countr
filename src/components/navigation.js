import { h, Component } from "preact"
import { auth } from "../lib/firebase"
import { Menu, Input, Image, Header } from "semantic-ui-react"
import { Link } from "preact-router"
import Logo from "../assets/logo.svg"
import CurrentUser from "./current-user"

export default class Navigation extends Component {

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser })
      console.log(currentUser)
    })
  }

  render({ }, { currentUser }) {
    if (currentUser) {
      return (
        <Menu borderless >
          <Menu.Item>
            <Header image={Logo} as="h5" subheader="countr" size="small" color="teal" sub>
            </Header>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <CurrentUser currentUser={currentUser} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
  }
}

