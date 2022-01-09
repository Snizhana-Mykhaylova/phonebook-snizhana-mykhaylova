import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import operations from '../redux/phonebook/phonebook-operations';
// import Form from '../components/Form';
// import Contacts from '../components/Contacts';
// import Filter from '../components/Filter';
// import * as selectors from '../redux/phonebook/phonebook-selectors';

class HomeView extends Component {
  //   componentDidMount() {
  //     this.props.fetchContact();
  //   }

  render() {
    return (
      <div>
        <h1>
          Home Page
          <span role='img' aria-label='Иконка приветствия'>
            💁‍♀️
          </span>
        </h1>
      </div>
    );
  }
}

export default HomeView;
