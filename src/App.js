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
      currentExpenses: [],
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  handleFormChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const uniqueExpenseID = nanoid();
    this.setState(() => {
      return {
        currentExpenses: [
          ...this.state.currentExpenses,
          [
            this.state.Date,
            this.state.Amount,
            this.state.Vendor,
            this.state.Comment,
            uniqueExpenseID,
          ],
        ],
      };
    });
  }

  deleteExpense(event) {
    event.preventDefault();
    const deletedExpenseIndex = this.state.currentExpenses.findIndex(
      (element) => element[4] === event.target['id']
    );
    const newCurrentExpense = this.state.currentExpenses.splice(
      deletedExpenseIndex,
      1
    );
    this.setState({ currentExpense: newCurrentExpense });
  }

  render() {
    return (
      <div id='app'>
        <InputForm
          updateState={this.handleFormChange.bind(this)}
          submitForm={this.handleFormSubmit.bind(this)}
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

function updateLocalStorage(expense) {
  return true;
}

//copy currentExpenses to local storage whenever currentExpenses is updated.
