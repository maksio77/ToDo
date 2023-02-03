import { Component } from "react";

import Filter from './components/filter';
import List from './components/list';
import AddItem from './components/add-item';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { header: 'Помити машину', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus reprehenderit suscipit.', id: 1 },
        { header: 'Курси', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus reprehenderit suscipit.', id: 2 },
        { header: 'Футбол', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus reprehenderit suscipit.', id: 3 },
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  addItem = (header, text) => {
    const thing = {
      header,
      text,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newArray = [...data, ...thing];

      return{
        data: newArray
      }
    })
  }

    render() {
      const { data } = this.state;
      return (
        <div className="App">
          
          <Filter />
          
          <List data={data}
            onDelete={this.deleteItem} />

          <AddItem onAdd={this.addItem}/>
        
        </div>
      );
    }
  }


export default App;