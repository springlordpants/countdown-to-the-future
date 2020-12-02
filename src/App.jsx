import React, { Component } from "react"
import "./styling/style.css"
import Clock from "./components/Clock"
import { Form, FormControl, Button } from "react-bootstrap"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "The Future",
      deadline: "December 10 2077",
      newDeadline: "",
    }
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline })
    this.setState({ title: this.state.newDeadline })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-Title">Countdown to</h1>
        <div className="Date-Title">{this.state.title}</div>
        <div>
          <Clock deadline={this.state.deadline} />
        </div>
        <Form inline className="Form">
          <FormControl
            type="text"
            className="Deadline-Input"
            placeholder="new date"
            onChange={(event) =>
              this.setState({ newDeadline: event.target.value })
            }
            // onKeyPress={(event) => {
            //   if (event.key === "Enter") {
            //     this.changeDeadline()
            //   }
            // }}
          />
          <Button
            variant="outline-danger"
            size="lg"
            onClick={() => this.changeDeadline()}
          >
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App
