import React from 'react';
import { useForm } from 'react-hook-form';

function InputForm(props) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(props.submitForm)}>
      <label>
        Date
        <input name='date' type='date' ref={register({ required: true })} />
        {errors.date && <span>This field is required.</span>}
      </label>
      <label>
        Amount:
        <input name='amount' type='text' ref={register({ required: true })} />
        {errors.amount && <span>This field is required.</span>}
      </label>
      <label>
        Vendor:
        <input name='vendor' type='text' ref={register({ required: true })} />
        {errors.vendor && <span>This field is required.</span>}
      </label>
      <label>
        Comment:
        <input name='comment' type='text' ref={register({ required: true })} />
        {errors.comment && <span>This field is required.</span>}
      </label>
      <input
        type='submit'
        value='Track New Expense'
        ref={register({ required: true })}
      />
    </form>
  );
}

export default InputForm;
