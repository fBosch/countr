import { h, Component } from "preact"
import { Button, Icon, Input, Image, Divider, Modal, Header, Form, Container } from "semantic-ui-react"
import { auth } from "../lib/firebase"
import { DateTimePicker } from 'react-widgets'
import { Picker } from 'emoji-mart'

export default class Toolbar extends Component {

  signOut = () => auth.signOut()

  render({ }, { }) {
    return (
      <div className="toolbar">
        <Modal trigger={<Button size="mini" circular >
          <Icon.Group size="large">
            <Icon name="clock" />
            <Icon corner name="add" color="green" />
          </Icon.Group> Add Counter</Button>}>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Title</label>
                <Input />
              </Form.Field>
              <Form.Field>
                <label>Emoji</label>
                <Picker color="#ccc" showPreview={false} emoji="hourglass" set="apple" emojiSize={24} />
              </Form.Field>
              <Form.Field>
                <label>Date</label>
                <DateTimePicker dropUp />
              </Form.Field>
              <Form.Button circular size="large" fluid>Add Counter</Form.Button>
            </Form>
          </Modal.Content>
        </Modal>

        <Button size="mini" circular floated="right" onClick={this.signOut}>
          Sign Out
        </Button>
      </div>
    )
  }
}
