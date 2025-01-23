import { Component } from 'react';
 


class SingleOption extends Component {
  state = {
    selectOption: 'option', // Default selected option
    newOption: '',
    options: ['option 1', 'option 2', 'option 3', 'option 4'], // Default list of languages
  };

  optionChangeHandle = (event) => {
    this.setState({ selectOption: event.target.value });
  };

  inputChangeHandle = (event) => {
    this.setState({ newOption: event.target.value });
  };

  handleNewOption = () => {
    if (this.state.newOption && !this.state.options.includes(this.state.newOption)) {
      this.setState((prevState) => ({
      options: [...prevState.options, prevState.newOption],
        newOption: '', // Clear input after adding
      }));
    }
  };

  render() {
    return (
      <div>
        <div>
          <select
            id="option-select"
            value={this.state.selectOption}
            onChange={this.optionChangeHandle}
          >
            {this.state.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
       
      </div>
    );
  }
}

export default SingleOption;