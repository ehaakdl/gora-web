import { CommonResponse } from 'types.d/common';
import { LoginRequest } from 'types.d/user';

export default class userApi {
  async logout(accessToken:string) {
    await $fetch('/api/v1/logout', {
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
}
