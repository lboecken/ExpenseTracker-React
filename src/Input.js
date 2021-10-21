import React from 'react';

const InputForm = (props) => {
  return (
    <form onSubmit={props.submitForm}>
      <label>
        Date
        <input name='date' type='date' onChange={props.updateState} />
      </label>
      <label>
        Amount:
        <input name='amount' type='text' onChange={props.updateState} />
      </label>
      <label>
        Vendor:
        <input name='vendor' type='text' onChange={props.updateState} />
      </label>
      <label>
        Comment:
        <input name='comment' type='text' onChange={props.updateState} />
      </label>
      <input type='submit' value='Track New Expense' />
    </form>
  );
};

export default InputForm;
