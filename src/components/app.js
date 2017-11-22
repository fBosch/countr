import { h, Component } from "preact"
import { Router } from "preact-router"
import Header from "../components/header"
import Home from "../containers/home"
import WebFont from "webfontloader"
import Scrollbars from "react-custom-scrollbars"

export default class App extends Component {

  componentWillMount() {
    WebFont.load({
      google: {
        families: [
          "NunitoÍ"
        ]
      }
    })
  }

  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div id="app">
        <Scrollbars autoHide universal>
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
          </Router>
        </Scrollbars>
      </div>
    )
  }
}
