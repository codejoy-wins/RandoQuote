import React, { Component, Fragment } from 'react'

class QuoteMachine extends Component {

    constructor(){
        super();
        this.END_POINT = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    }

    getRando = e => {
        console.log("clicked");
    }

  render() {
      console.log(this);
    return (
      <Fragment>
        <h1>Quote Machina</h1>
        <button onClick={this.getRando}>
            Click me to get a random quote
        </button>
      </Fragment>
    )
  }
}

export default QuoteMachine;
