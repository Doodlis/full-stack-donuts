import React, { Component } from 'react';
import axios from 'axios';
import DonutList from './DonutList';
import DonutItem from './DonutItem';
// import samples from '../../exampleDonuts';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donutList: [],
      selectedDonut: null,
    };

    // bind functions?
    this.getAllDonuts = this.getAllDonuts.bind(this);
  }

  // componentDidMount?
    // made an AJAX request in here?
  componentDidMount() {
    // call get all donuts method
    this.getAllDonuts();
  }

  // create a method to get from the API
  getAllDonuts() {
    // jquery ajax
    // fetch
    // axios
    axios.get('/api/donuts')
    .then((res) => {
      console.log('response to getAll:', res);
      // update state
      this.setState({ 
        donutList: res.data,
      });
    })
    .catch((err) => {
      console.log('why god why:', err);
    });

    // success and failure cases
  }

  render() {
    const { donutList, selectedDonut } = this.state;

    return (
      <div>
      <DonutList donuts={donutList} />
      {selectedDonut ? <DonutItem donut={selectedDonut} /> : null}
      </div>
    )
  };
};

