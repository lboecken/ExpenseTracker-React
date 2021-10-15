import React, { Component } from 'react';
import Table from './Table';
import InputForm from './Input';
import { nanoid } from 'nanoid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Date: '',
      Amount: '',
      Vendor: '',
      Comment: '',
      currentExpenses: this.populateFromLocalStorage(),
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
    this.deleteExpenseFromLocalStorage =
      this.deleteExpenseFromLocalStorage.bind(this);
    this.addExpenseToLocalStorage = this.addExpenseToLocalStorage.bind(this);
    this.populateFromLocalStorage = this.populateFromLocalStorage.bind(this);
  }

  handleFormChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const uniqueExpenseID = nanoid();
    const newExpense = [
      this.state.Date,
      this.state.Amount,
      this.state.Vendor,
      this.state.Comment,
      uniqueExpenseID,
    ];
    this.setState(() => {
      return {
        currentExpenses: [...this.state.currentExpenses, newExpense],
      };
    });
    this.addExpenseToLocalStorage(newExpense);
  }

  deleteExpense(event) {
    event.preventDefault();
    const deletedExpenseIndex = this.state.currentExpenses.findIndex(
      (element) => element[4] === event.target['id']
    );
    this.deleteExpenseFromLocalStorage(
      this.state.currentExpenses[deletedExpenseIndex][4]
    );
    this.setState({
      currentExpense: this.state.currentExpenses.splice(deletedExpenseIndex, 1),
    });
  }

  deleteExpenseFromLocalStorage(expenseKey) {
    localStorage.removeItem(expenseKey);
  }

  populateFromLocalStorage() {
    const expenseList = [];
    for (let i = 0; i < localStorage.length; i++) {
      expenseList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return expenseList;
  }

  addExpenseToLocalStorage(expense) {
    const JSONexpense = JSON.stringify(expense);
    localStorage.setItem(expense[4], JSONexpense);
  }

  render() {
    return (
      <div id='app'>
        <InputForm
          updateState={this.handleFormChange}
          submitForm={this.handleFormSubmit}
        />
        <Table
          currentExpenses={this.state.currentExpenses}
          deleteExpense={this.deleteExpense}
        />
      </div>
    );
  }
}

export default App;

//copy currentExpenses to local storage whenever currentExpenses is updated.
