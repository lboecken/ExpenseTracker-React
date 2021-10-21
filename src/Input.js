import React from 'react';
import { useForm } from 'react-hook-form';

function InputForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.submitForm)}>
      <label>
        Date
        <input {...register('date', { required: true })} type='date' />
        {errors.date && <span>This field is required.</span>}
      </label>
      <label>
        Amount:
        <input {...register('amount', { required: true })} type='number' />
        {errors.amount && <span>This field is required.</span>}
      </label>
      <label>
        Vendor:
        <input {...register('vendor', { required: true })} type='text' />
        {errors.vendor && <span>This field is required.</span>}
      </label>
      <label>
        Comment:
        <input {...register('comment', { required: true })} type='text' />
        {errors.comment && <span>This field is required.</span>}
      </label>
      <input type='submit' value='Track New Expense' />
    </form>
  );
}

export default InputForm;
