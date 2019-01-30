import React from 'react';

class TweetBox extends React.Component {
  render() {
    const divStyle = {
      textAlign: 'left',
      padding: '10px 50px',
      margin: '1px',
      backgroundColor: 'white',
      width: '50%',
      display: 'inline-block'
    };

    const h3Style = {
      display: 'inline-block'
    };

    var curr_time = new Date();
    if(this.props.hours) {
      var time_elapsed = (curr_time - this.props.hours)
      if(time_elapsed*0.000000277778 > 1) {
        time_elapsed *= 0.000000277778;
        time_elapsed = Math.floor(time_elapsed) + 'h';
      } else if(time_elapsed*0.0000166 > 1) {
        time_elapsed *= 0.00001666;
        time_elapsed = Math.floor(time_elapsed) + 'm'
      } else {
        time_elapsed /= 1000;
        time_elapsed = Math.floor(time_elapsed) + 's'
      }
    }
    return (
        <div style={divStyle}>
          <h3 style={h3Style}>{this.props.user}</h3>&nbsp; &nbsp;{time_elapsed}<br/>
          {this.props.text}
        </div>
    );
  }
}

export default TweetBox;
