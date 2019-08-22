import React, { Component } from "react";
import "../assets/styles/userinput.scss";

class UserInput extends Component {
  state = {};
  render() {
    return (
      <section className="UserInputContainer">
        <form>
          <div className="InputContainer">
            <label>
              Headline:
              <br />
              <input
                type="text"
                name="name"
                placeholder="Write your headline here"
              />
            </label>
          </div>
          <div className="InputContainer">
            <label>
              Story Line:
              <br />
              <input
                type="text"
                name="name"
                placeholder="Write story line here"
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
