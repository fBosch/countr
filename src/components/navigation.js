import { h, Component } from "preact"
import { auth } from "../lib/firebase"
import { Menu, Input, Image, Header } from "semantic-ui-react"
import { Link } from "preact-router"
import Logo from "../assets/logo.svg"

export default class Navigation extends Component {

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => this.setState({ currentUser }))
  }

  render({ }, { currentUser }) {
    if (currentUser) {
      return (
        <Menu borderless fluid widths={1}>
          <Menu.Item>
            <Header as="h1" size="big" >
              ⌛
            </Header>
          </Menu.Item>
        </Menu>
      )
    }
  }
}

