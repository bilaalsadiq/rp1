import React, { Component } from "react";

// simple component (function) - doesn't contain the word "class"
// components can be nested in other components, and simple and class components can be mixed.
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

//passes property through as parameter
const TableBody = (props) => {

    //maps through the array to return a table row, for each object in array
    //contained in the 'rows' variable - which gets returned as an expression
    //Always use keys when making lists in React, as they help identify each list item
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

// (custom) class component - capitalised to seperate as 'custom component'
// class component must include *render()*, and the return can only return one parent element
// class Table extends Component {
//     render() {
//         //access the characterData prop (App.js) 
//         const { characterData } = this.props
//         return (
//             <table class="table">
//                 <TableHeader />
//                 {/* Send data to virtual DOM */}
//                 <TableBody characterData={characterData} />
//             </table>
//         )
//     }
// }

const Table = (props) => {
    const { characterData, removeCharacter } = props;

    return(
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    );
}

export default Table;