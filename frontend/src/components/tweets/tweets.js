import React from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';

class Tweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }
  }

  componentWillMount() {
    this.props.fetchTweets();
  }

  componentWillReceiveProps(newState) {
    this.setState({ tweets: newState.tweets });
  }

  render() {
    if (this.state.tweets.length === 0) {
      return (<div>There are no Tweets</div>)
    } else {
      const divStyle = {
        textAlign: 'center'
      };
      // console.log(this.state.tweets)
      // console.log(this.state.tweets[0].date - curr_time.getTime())
      return (
        <div style={divStyle}>
          {this.state.tweets.map(tweet => (
            <TweetBox key={tweet._id} text={tweet.text} user={tweet.user.handle} hours={tweet.date}/>
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Tweet);
