import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUserTweets } from '../../actions/tweet_actions'

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTweets: data => dispatch(fetchUserTweets(data)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
