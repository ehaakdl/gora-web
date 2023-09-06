import axios from '@/composable/axios';

export default class downloadApi {
  downloadClient() {
    return axios.get('/api/v1/download/client', {
      responseType: 'blob',
    });
  }
}
