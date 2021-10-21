import React from 'react';

const Table = (props) => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <table className='table table-bordered table-hover justify-content-center'>
          <thead className='table-light'>
            <tr>
              <th style={{ width: '15%' }} className='md-2'>
                Date
              </th>
              <th style={{ width: '10%' }} className='md-2'>
                Amount
              </th>
              <th style={{ width: '20%' }} className='md-2'>
                Vendor
              </th>
              <th style={{ width: '35%' }} className='md-2'>
                Comment
              </th>
              <th style={{ width: '10%' }} className='md-2'></th>
            </tr>
          </thead>
          <tbody>
            {props.currentExpenses.map((element) => {
              return (
                <tr key={element[4]}>
                  <td>{element[0]}</td>
                  <td>{element[1]}</td>
                  <td>{element[2]}</td>
                  <td>{element[3]}</td>
                  <td>
                    <button id={element[4]} onClick={props.deleteExpense}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
