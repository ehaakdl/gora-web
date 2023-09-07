<template>
  <VApp
    id="inspire"
    style="position:relative"
  >
    <VContainer
      style="margin: auto"
    >
      <VImg
        src="download_btn.png"
        @click="onDownload"
      />
    </VContainer>
  </VApp>
</template>
<script setup lang="ts">
import userApi from '@/api/userApi';

const userApiInst = new userApi();

const onDownload = async () => {
  userApiInst.downloadClient()
    .then((response) => {
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'client.zip');

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error('Error fetching client:', error);
    });
};
</script>
