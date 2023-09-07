import axios from '@/composable/axios';

export default class emailApi {
  verify(accessToken:string) {
    return axios.post(`/api/v1/user/email-verify?accessToken=${accessToken}`);
  }

  sendVerifyMail(email:string) {
    return axios.post(`/api/v1/user/email/verify-send?email=${email}`);
  }
}
