import React from 'react';
import TweetBox from './tweet_box';

class TweetCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          text: "",
          newTweet: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({newTweet: nextProps.newTweet.text});
  }

  handleSubmit(e) {
    e.preventDefault();
    let tweet = {
      text: this.state.text
    };

    this.props.composeTweet(tweet);
    this.setState({text: ''})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    };

    const formStyle = {
      border: '1px solid black',
      borderRadius: '4px',
      width: '25%',
      height: '15%'
    };

    const buttonStyle = {
      backgroundColor: '#55acee',
      display: 'inline-block',
      borderRadius: '10px'
    };

    return (
        <div style={divStyle}>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="textarea"
                        value={this.state.text}
                        onChange={this.update()}
                        placeholder="What's happening?" style={formStyle}
                    />
                    <input type="submit" value="Tweet" style={buttonStyle}/>
                </div>
            </form>
            <br />
            <TweetBox text={this.state.newTweet} />
        </div>
    )
  }
}

export default TweetCompose;
