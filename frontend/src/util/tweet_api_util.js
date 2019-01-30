import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";
axios.default.withCredentials = true;

export const getTweets = () => {
  return axios.get('/api/tweets')
};

export const getUserTweets = id => {
  return axios.get(`/api/tweets/user/${id}`)
};

export const writeTweet = data => {
  return axios.post('/api/tweets/', data)
}
