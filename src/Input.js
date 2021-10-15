import React from 'react';

class InputForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.submitForm}>
        <label>
          Date
          <input name='Date' type='date' onChange={this.props.updateState} />
        </label>
        <label>
          Amount:
          <input name='Amount' type='text' onChange={this.props.updateState} />
        </label>
        <label>
          Vendor:
          <input name='Vendor' type='text' onChange={this.props.updateState} />
        </label>
        <label>
          Comment:
          <input name='Comment' type='text' onChange={this.props.updateState} />
        </label>
        <input type='submit' value='Track New Expense' />
      </form>
    );
  }
}

export default InputForm;
