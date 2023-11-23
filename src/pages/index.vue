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
        @click="clickDownload"
      />
    </VContainer>
  </VApp>
</template>
<script setup lang="ts">
import useUserStore from '@/stores/userStore';

const userStore = useUserStore();
const clickDownload = () => {
  userStore.downloadGameClient()
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
