import React, { Component } from 'react';

import AddCar from './Components/AddCar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars: [],
      shops: {},
      carinput: ''
    };
  }

  handleAddCar = () => {
    const state = { ...this.state };
    state.cars.push({ name: state.carinput });
    state.carinput = '';
    this.setState({ ...state });
  };

  handleOnChangeCar = e => {
    this.setState({ carinput: e.target.value });
  };

  handleChangeName = index => {
    console.log('index', index);

    console.log('the state', this.state);
    const state = { ...this.state };
    state.cars[index].name = 'Lamborghini';

    this.setState({ ...state });
  };

  render() {
    return (
      <div className="App">
        <AddCar
          addcar={this.handleAddCar}
          getInput={this.handleOnChangeCar}
          stateData={this.state}
        />

        <hr />
        {this.state.cars.map((car, index) => {
          return (
            <div key={index}>
              <h4>{car.name}</h4>
              <button onClick={() => this.handleChangeName(index)}>
                change name
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
