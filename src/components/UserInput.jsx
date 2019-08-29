import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../assets/styles/userinput.scss';

import { changeHeadLineAndStoryLine } from '../actions/appActions';

class UserInput extends Component {
  state = {
    headline: '',
    storyLine: '',
    image: {},
  };

  /**
   * Handles event change on the inputs
   * @param {object} event - Event that occurs on an input
   * @returns {void}
   */
  handleChange = event => {
    const { changeHeadLine } = this.props;
    this.setState({ [event.target.name]: event.target.value }, () => {
      changeHeadLine(this.state.headline);
    });
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
              <input type="file" name="name" placeholder="Write story line here" />
            </label>
          </div>

          {/* <input type="submit" value="Submit" /> */}
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeHeadLine: headline => dispatch(changeHeadLineAndStoryLine(headline)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(UserInput);
