import React, { Component } from "react";


const Table = (props) => {
    return (
        <table>
            <thead> 
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Vendor</th>
                    <th>Comment</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.currentExpenses.map((element) => {
                    return (<tr key={element[4]}>
                        <td>{element[0]}</td>
                        <td>{element[1]}</td>
                        <td>{element[2]}</td>
                        <td>{element[3]}</td>
                        <button onClick={props.deleteExpense}>Delete</button>                                                
                    </tr>)
                })
                }
            </tbody>
        </table>
    )
}

export default Table;