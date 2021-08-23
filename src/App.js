import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    }
  }
  
  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }
  
  addItem() {
    // Creates new item with random ID
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // Creates copy of current list items
    const list = [...this.state.list];

    // Adds item to list
    // TODO: Check that entry is !null
    // list.length > 0 ? list.push(newItem) : console.log("insert an item dummy!");
    list.push(newItem);
 

    // State updates with new list and resets the 'newItem' input
    this.setState({
      list,
      newItem: ""
    });

  }

  deleteItem(id) {
    // copy of list items
    const list = [...this.state.list];

    // filter item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});

  }

  render() { 
    return ( 
      <div className="App">
        <body className="text-center">
          
          {/* TODO: Porting to this stuff. */}
          
          <div>
            Add item!
            <br />
            <input
              type="text"
              placeholder="Enter item"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)} />
            <button
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length} // won't run if empty field!
            >
              +
            </button>
            <br />
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button
                      onClick={() => this.deleteItem(item.id)}>
                        X
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </body>
      </div>
     );
  }
}
 
export default App;