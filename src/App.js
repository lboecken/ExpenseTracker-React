import React, { useState } from 'react';
import Table from './Table';
import InputForm from './Input';
import { nanoid } from 'nanoid';

const App = () => {
  const [formValues, setFormValues] = useState({
    date: '',
    amount: '',
    vendor: '',
    comment: '',
  });
  const [currentExpenses, setCurrentExpenses] = useState(
    populateFromLocalStorage()
  );

  function populateFromLocalStorage() {
    const expenseList = [];
    // could try array.forEach
    for (let i = 0; i < localStorage.length; i++) {
      expenseList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return expenseList;
  }
  function deleteExpenseFromLocalStorage(expenseKey) {
    localStorage.removeItem(expenseKey);
  }
  function addExpenseToLocalStorage(expense) {
    localStorage.setItem(expense[4], JSON.stringify(expense));
  }

  function handleFormChange(event) {
    event.preventDefault();
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newExpense = [
      formValues.date,
      formValues.amount,
      formValues.vendor,
      formValues.comment,
      nanoid(),
    ];
    setCurrentExpenses([...currentExpenses, newExpense]);
    addExpenseToLocalStorage(newExpense);
  }

  function deleteExpense(event) {
    event.preventDefault();
    const deletedExpenseIndex = currentExpenses.findIndex(
      (element) => element[4] === event.target['id']
    );
    console.log(deletedExpenseIndex);
    deleteExpenseFromLocalStorage(currentExpenses[deletedExpenseIndex][4]);

    currentExpenses.splice(deletedExpenseIndex, 1);
    setCurrentExpenses([...currentExpenses]);
  }

  return (
    <div id='app'>
      <InputForm updateState={handleFormChange} submitForm={handleFormSubmit} />
      <Table currentExpenses={currentExpenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
