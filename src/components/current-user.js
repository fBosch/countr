import { h, Component } from "preact"
import { auth } from "../lib/firebase"
import { Button, Menu, Dropdown, Image } from "semantic-ui-react"

export default class CurrentUser extends Component {

  signOut = () => auth.signOut()

  render({ currentUser }, {  }) {
    if (currentUser) {
      return (
        <Dropdown icon="cogs" item basic>
          <Dropdown.Menu>
            <Dropdown.Item onClick={this.signOut}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )
    }
  }
}
