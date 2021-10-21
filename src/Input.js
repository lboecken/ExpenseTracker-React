import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

function InputForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.submitForm)} className='my-md-4'>
      <div className='row  justify-content-center'>
        <div className='col-md-3 form-group'>
          <label>Date</label>
          <input
            {...register('date', { required: true })}
            type='date'
            className='form-control'
          />
          <label>{errors.date && <span>This field is required</span>}</label>
        </div>
        <div className='col-md-3 form-group'>
          <label>Amount:</label>
          <input
            {...register('amount', { required: true })}
            type='number'
            className='form-control'
          />
          <label>
            {errors.amount && (
              <span>This field is required or the input is invalid.</span>
            )}
          </label>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-md-6 form-group'>
          <label>Vendor:</label>
          <input
            {...register('vendor', { required: true })}
            type='text'
            className='form-control'
          />
          <label>{errors.vendor && <span>This field is required.</span>}</label>
        </div>
      </div>
      <row className='row justify-content-center'>
        <div className='col-md-6 form-group'>
          <label>Comment:</label>
          <input
            {...register('comment', { required: true })}
            type='text'
            className='form-control'
          />
          <label>
            {errors.comment && <span>This field is required.</span>}
          </label>
        </div>
      </row>
      <row className='row justify-content-center'>
        <button className='col-md-4 btn btn-primary' type='submit'>
          Track New Expense
        </button>
      </row>
    </form>
  );
}

export default InputForm;
