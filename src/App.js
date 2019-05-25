import React from 'react';
import {Button, Container, Col, Row} from 'reactstrap' 

class App extends React.Component {
  state = {
    content: '',
    author: '',
    quotes: [
      {quote: 'I love you the more in that I believe you had liked me for my own sake and for nothing else.', author: 'John Keats', id: 1},
      {quote: 'But man is not made for defeat. A man can be destroyed but not defeated.', author: 'Ernest Hemingway',id: 2},
      {quote: 'When you reach the end of your rope, tie a knot in it and hang on.', author: 'Franklin D. Roosevelt',id: 3},
      {quote: 'There is nothing permanent except change.', author: 'Heraclitus',id: 4},
      {quote: 'You cannot shake hands with a clenched fist.', author: 'Indira Gandhi',id: 5},
      {quote: 'Let us sacrifice our today so that our children can have a better tomorCol.', author: 'A. P. J. Abdul Kalam',id: 6},
      {quote: 'It is better to be feared than loved, if you cannot be both.', author: 'Niccolo Machiavelli',id: 7},
      {quote: 'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.', author: 'Amelia Earhart',id: 8},
      {quote: 'Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.', author: 'Henry James',id: 9},
      {quote: 'Learning never exhausts the mind.', author: 'Leonardo da Vinci',id: 0}
    ]
  }
  componentWillMount() {
    let newQuote = [...this.state.quotes].sort((a, b) => 0.5 - Math.random());
    console.log(newQuote);
    let newContent = newQuote[0].quote;
    let newAuthor = newQuote[0].author;
    this.setState({content: newContent, author: newAuthor})
    newQuote.shift();
    console.log(newQuote);
    this.setState({quotes: newQuote})
  }
  handleClick = (e) => {
    if (this.state.quotes.length > 0) {
      let newQuote = [...this.state.quotes].sort((a, b) => 0.5 - Math.random());
      console.log(newQuote);
      let newContent = newQuote[0].quote;
      let newAuthor = newQuote[0].author;
      this.setState({content: newContent, author: newAuthor})
      newQuote.shift();
      console.log(newQuote);
      this.setState({quotes: newQuote})
    } else {this.setState({content: "No more quote for you ><'", author: "By: The best boyfriend ever!!"})}
  }
  
  render() {
    return (
      <Container id="quote-box" className="vh-100">
        <Row className="align-items-center h-75">
          <Col className="text-center">
            <h1>Your quote is: </h1>
            <h1 id="text">{this.state.content}</h1><br/>
            <h1 id="author">{this.state.author}</h1>
            <Button color="primary" onClick={this.handleClick} id="new-quote">Give quote!</Button>
            <br/>
            <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet me!</a>
          </Col>
        </Row>  
      </Container>
    );
  }
}

export default App;
