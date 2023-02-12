// table
// custom class component
// we can re-use this anytime, but as data is hard-coded into it, makes it difficult

import React, { Component } from 'react';
import Table from './Table';  
import Form from './Form';

// class App extends Component {
//   render() {
//     //properties (props)
//     //data as JSON below
//     const characters = [
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mac',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring actress',
//       },
//       {
//         name: 'Dennis',
//         job: 'Bartender',
//       },
//     ]
//     //pass data through the child component using *properties (like data-attributes), read-only
//     //property will be called 'characterData', and will pass through 'characters' variable created earlier.
//     return (
//       <div className="container">
//         <Table characterData={characters}  />
//       </div>
//     )
//   }
// }

//state - data that should be saved or modified without necessating adding to DB
//example: adding and removing items from a shopping cart before confirming a purchase

class App extends Component{
  //declare a 'state' object
  state = {
    //object contains properties for everything that you want to store in a state
    //copy/move data from earlier property into 'state'
    characters: [
      // {
      //   name: 'Charlie',
      //   job: 'Janitor',
      // },
      // {
      //   name: 'Mac',
      //   job: 'Bouncer',
      // },
      // {
      //   name: 'Dee',
      //   job: 'Aspring actress',
      // },
      // {
      //   name: 'Dennis',
      //   job: 'Bartender',
      // },
    ],
  }

  
removeCharacter = (index) => {
  const { characters } = this.state

  //manipulate the state using this.setState()
  //retrieve the set of characters from an array
  //filter array based on index (parameter)
  //return new array

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index;
    })
  });
}

handleSubmit = character => {
  this.setState({characters: [...this.state.characters, character]});
}

  render() {
    const { characters } = this.state;
    
    return (
      <div className="container">
        <h1>React Project</h1>
        <p>
          This basic React.js project adds a user, and their job title to the table above.
          <br></br>
          There is also the option of deleting it by pressing the delete button in the "Remove" column. 
        </p>  
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App