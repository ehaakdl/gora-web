export default class userApi {
  async logout(accessToken:string) {
    await $fetch('/api/v1/logout', {
      headers: {
        Authorization: accessToken,
      },
    });
  }
}
