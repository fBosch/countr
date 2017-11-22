import "./style"
import "emoji-mart/css/emoji-mart.css"
import App from "./components/app"
import moment from "moment"
import momentLocalizer from "react-widgets-moment"
moment.locale("en")
momentLocalizer()

export default App
