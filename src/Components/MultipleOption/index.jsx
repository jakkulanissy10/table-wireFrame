import {Component} from 'react';

class MultipleOption extends Component {
  state = {
    selectedOptions: [],
    newOption: '',  // holding new options
    multipleChoices: ['option 1', 'option 2', 'option 3', 'option 4'],  // hardcoded list 
    showOptions: false,  
  };

  handleCheckboxChange = (event) => {
    const value = event.target.value;
    this.setState((prevState) => {
      const newSelectedOptions = prevState.selectedOptions.includes(value)
        ? prevState.selectedOptions.filter((opt) => opt !== value)
        : [...prevState.selectedOptions, value];
      return { selectedOptions: newSelectedOptions };
    });
  };

  handleInputChange = (event) => {
    this.setState({ newOption: event.target.value });
  };

  handleAddLanguage = () => {
    if (this.state.newOption && !this.state.multipleChoices.includes(this.state.newOption)) {
      this.setState((prevState) => ({
        multipleChoices: [...prevState.multipleChoices, prevState.newOption],
        newOption: '', // Clear input after adding
      }));
    }
  };

  toggleOptions = () => {
    this.setState((prevState) => ({ showOptions: !prevState.showOptions }));
  };

  render() {
    const selectedOptionsString = this.state.selectedOptions.join(' ');

    return (
      <div>
        <div className="dropdown-container">
  {/* Input field with dropdown button inside */}
  <input
    type="text"
    value={selectedOptionsString}
    placeholder="Select options"
    className="dropdown-input"
  />
  <h1 className="dropdown-toggle-btn" onClick={this.toggleOptions}>
    &#x2304; {/* Down arrow symbol */}
  </h1>
</div>



        {this.state.showOptions && (
          <div className="dropdown-content">
            <div className="checkbox-group">
              {this.state.multipleChoices.map((choice) => (
                <div key={choice}>
                  <input
                    type="checkbox"
                    id={choice}
                    value={choice}
                    checked={this.state.selectedOptions.includes(choice)}
                    onChange={this.handleCheckboxChange}
                  />
                  <label htmlFor={choice}>{choice}</label>
                </div>
              ))}
            </div>
            <input
              type="text"
              value={this.state.newOption}
              onChange={this.handleInputChange}
              placeholder="Add new item"
            />
            <button className = "add-Button" onClick={this.handleAddLanguage}> + Add </button>
          </div>
        )}
      </div>
    );
  }
}

export default MultipleOption;