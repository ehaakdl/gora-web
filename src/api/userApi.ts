import axios from '@/composable/axios';
import { CommonResponse } from 'types.d/common';
import { LoginRequest, SignupRequest } from 'types.d/user';

export default class userApi {
  logout(accessToken:string) {
    axios.get('/api/v1/logout', {
      headers: {
        Authorization: accessToken,
      },
    });
  }

  async login(req:LoginRequest) {
    const response:CommonResponse = await $fetch('/api/v1/login', {
      method: 'POST',
      body: req,
      headers: {
        contentType: 'application/json',
      },
    });

    return response;
  }

  async signup(req:SignupRequest) {
    const response:CommonResponse = await $fetch('/api/v1/signup', {
      method: 'POST',
      body: req,
      headers: {
        contentType: 'application/json',
      },
    });

    return response;
  }

  downloadClient() {
    return axios.get('/api/v1/download/client', {
      responseType: 'blob',
    });
  }
}
