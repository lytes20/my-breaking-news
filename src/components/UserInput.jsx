import React, { Component } from "react";
import "../assets/styles/userinput.scss";

class UserInput extends Component {
  state = {
    headline: "",
    storyLine: "",
    image: {}
  };

  /**
   * Handles event change on the inputs
   * @param {object} event - Event that occurs on an input
   * @returns {void}
   */
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { headline, storyLine } = this.state;
    return (
      <section className="UserInputContainer">
        <form>
          <div className="InputContainer">
            <label>
              Headline:
              <br />
              <input
                value={headline}
                type="text"
                name="headline"
                placeholder="Write your headline here"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="InputContainer">
            <label>
              Story Line:
              <br />
              <input
                value={storyLine}
                type="text"
                name="storyLine"
                placeholder="Write story line here"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="InputContainer">
            <label>
              Image:
              <br />
              <input
                type="file"
                name="name"
                placeholder="Write story line here"
              />
            </label>
          </div>

          {/* <input type="submit" value="Submit" /> */}
        </form>
      </section>
    );
  }
}

export default UserInput;
