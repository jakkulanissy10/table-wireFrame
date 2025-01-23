import React, { Component } from 'react';
import SingleOption from '../SingleOption';
import MultipleOption from '../MultipleOption'; 
import './style.css'

class Table extends Component {
  state = {
    rows: [{ id: 1 }],
  };

  toAddRow = () => {
    this.setState((prevState) => ({
      rows: [...prevState.rows, { id: prevState.rows.length + 1 }],
    }));
  };

  render() {
    return (
      <div>
        <table className="table-style">
         <thead>
            <tr>
              <th>lable 1</th>
              <th>lable 2</th>
            </tr>
            </thead>
          
          <tbody>
            {this.state.rows.map((row) => (
              <tr key={row.id}>
                <td>
                <SingleOption />
                 
                </td>
                <td>
                <MultipleOption />
                </td>
              </tr>
              
            ))}
            </tbody>
          
        </table>

        {/* Button to add new rows */}
        <button
          onClick={this.toAddRow}
          style={{ marginTop: '20px', padding: '10px 20px' }}
        >
          + Add New Row
        </button>
      </div>
    );
  }
}

export default Table;