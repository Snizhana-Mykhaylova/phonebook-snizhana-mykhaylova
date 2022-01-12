import React, { Component } from 'react';

class HomeView extends Component {
  render() {
    return (
      <>
        <h2 className='section__title'>
          Home Page
          <span role='img' aria-label='Иконка приветствия'>
            💁‍♀️
          </span>
        </h2>
      </>
    );
  }
}

export default HomeView;
