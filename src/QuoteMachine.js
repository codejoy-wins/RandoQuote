import React, { Component, Fragment } from 'react'

class QuoteMachine extends Component {

    constructor(){
        super();
        this.state = {
          quote: {
            content: '',
            link: '',
            title: '',
          },
          hasQuote: false
        }
        this.END_POINT = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    }

    getRando = e => {
        fetch(this.END_POINT)
        .then(response => response.json())
        .then(data => {
          if(data[0].content && data[0].title && data[0].link){ //if quote set hasquote true
            let { quote } = this.state;
            console.log(data[0]);
            quote.content = data[0].content;
            quote.title = data[0].title;
            quote.link = data[0].link;

            this.setState({ quote }, ()=> {
              if(this.state.hasQuote === false){
                this.setState({ hasQuote: true})
              }
            })
          }
          else{
            console.error("No quote found");
          }
        })
    }

  render() {
      console.log(this.state);
      const { hasQuote, quote } = this.state;
    return (
      <Fragment>
        <h1>Quote Machina</h1>
        <button onClick={this.getRando}>
            Click me to get a random quote
        </button>
        <br />
        {hasQuote === true ? JSON.stringify(quote) : 'no quote yet'}
      </Fragment>
    )
  }
}

export default QuoteMachine;
