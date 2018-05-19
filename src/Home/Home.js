import React, { Component } from 'react';

class Home extends Component {
  render () {
    return (
      <div className='container'>
        <React.Fragment>
          <h4>Hello world!</h4>
          <button onClick={() => this.props.auth.logout()}>Logout</button>
        </React.Fragment>
      </div>
    );
  }
}

export default Home;
