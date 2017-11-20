import { h, Component } from "preact"
import { Router } from "preact-router"
import { Menu, Input, Header, Image } from "semantic-ui-react"

import Navigation from "../components/navigation"
import Home from "../containers/home"

export default class App extends Component {

  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div id="app">
        <Navigation />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
        </Router>
      </div>
    )
  }
}
