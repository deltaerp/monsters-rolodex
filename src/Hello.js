import React from 'react';

class Hello extends React.Component {

    constructor () {
        super();
        this.state = {
            customerName: 'Juan A Colindres',
            customerAddress: 'Tegucigalpa'
        };
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>Customer information</h2>
          <p>{this.state.customerName}</p>
        </div>
      );
    }
  }

export default Hello;
