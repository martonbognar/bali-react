import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.ebac = this.ebac.bind(this);
    this.calculateEbac = this.calculateEbac.bind(this);
  }

  calculateEbac() {
    let alcohol = 0;
    let period = ((new Date()).getTime() - this.props.drinks[0].startTime.getTime()) / (1000 * 60 * 60);
    for (let i = 0; i < this.props.drinks.length; i++) {
      let alcoholml = (parseInt(this.props.drinks[i].amount, 10) / 10) * parseInt(this.props.drinks[i].strength, 10);
      let grams = alcoholml * 0.789;
      alcohol += grams;
    }
    return this.ebac(alcohol, period).toFixed(5);
  }

  ebac(alcohol, period) {
    let bw = this.props.gender === "male" ? 0.58 : 0.49;
    let result = ((0.806 * (alcohol / 10) * 1.2) / (bw * this.props.weight)) - (0.017 * period);
    return result > 0 ? result : 0;
  }

  render() {
    let value = this.calculateEbac();

    return (
      <div>
        Alcohol: {value}
      </div>
    );
  }
}

export default Calculator;