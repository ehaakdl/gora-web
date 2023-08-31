export default class userApi {
  async logout(accessToken:string) {
    await $fetch('/api/v1/logout', {
      headers: {
        Authorization: accessToken,
      },
    });
  }
// todo 
  async login(userReq) {
    const accessToken:string = await $fetch('/api/v1/login', {
      method: 'POST',
      body: userReq,
      headers: {
        contentType: 'application/json',
      },
    });
    return accessToken;
  }
}
