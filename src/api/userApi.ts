import axios from '@/composable/axios';
import { LoginRequest, SignupRequest } from 'types.d/user';

export default class userApi {
  logout() {
    axios.get('/api/v1/logout');
  }

  login(req:LoginRequest) {
    return axios.post('/api/v1/login', {
      email: req.email,
      password: req.password,
      isGameClient: req.isGameClient,
    });
  }

  signup(req:SignupRequest) {
    return axios.post('/api/v1/signup', {
      email: req.email,
      password: req.password,
    });
  }

  downloadClient() {
    return axios.get('/api/v1/download/client', {
      responseType: 'blob',
    });
  }
}
