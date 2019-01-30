import React from 'react';
import { Link } from 'react-router-dom'
// import { SearchBar } from 'react-native-elements';
import './navbar.css'

const divStyle = {
  backgroundColor: 'white',
  borderBottom: '1px solid black'
};
const linkStyle = {
  padding: '10px 5px',
  textColor: 'gray',
  textDecoration: 'none',
};
const linkStyleRight = {
  textColor: 'gray',
  textDecoration: 'none',
  float: 'right'
};
const buttonStyle = {
  float: 'right',
  backgroundColor: '#55acee',
  borderRadius: '10px'
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.searchUser = this.searchUser.bind(this);
    this.state = {
      searchedUser: ""
    };
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  update() {
    return e => this.setState({
      searchedUser: e.currentTarget.value
    });
  }

  searchUser(e) {
    e.preventDefault();
    console.log(this.state.searchedUser)
    let query = {
      handle: this.state.searchedUser
    };

    console.log(query)
    this.props.fetchUserTweets(query);
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div style={divStyle}>
                <Link to={'/tweets'} style={linkStyle}>Home</Link>
                <Link to={'/new_tweet'} style={linkStyle}>Tweet</Link>
                <button style={buttonStyle} onClick={this.logoutUser}>Logout</button>
                {<form style={linkStyleRight}>
                  <input type="text"
                    placeholder="Search Twitter"
                    value={this.state.searchedUser}
                    onChange={this.update()}
                  />
                </form>}
                <Link to={'/profile'} style={linkStyleRight}>Profile</Link>
            </div>
        );
      } else {
        return (
            <div style={divStyle}>
                <Link to={'/signup'} style={linkStyle}>Signup</Link>
                <Link to={'/login'} style={linkStyle}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;
