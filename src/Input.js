import React from 'react';
import { useForm } from 'react-hook-form';

function InputForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.submitForm)} class='form'>
      <label>Date</label>
      <input {...register('date', { required: true })} type='date' />
      {errors.date && <span>This field is required.</span>}
      <label>Amount:</label>
      <input {...register('amount', { required: true })} type='number' />
      {errors.amount && <span>This field is required.</span>}
      <label>Vendor:</label>
      <input {...register('vendor', { required: true })} type='text' />
      {errors.vendor && <span>This field is required.</span>}
      <label>Comment:</label>
      <input {...register('comment', { required: true })} type='text' />
      {errors.comment && <span>This field is required.</span>}
      <input type='submit' value='Track New Expense' />
    </form>
  );
}

export default InputForm;
