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

const onDownload = async () => {
  await $fetch('/api/v1/logout', {
    method: 'GET',
    async onResponse({ response }) {
      // eslint-disable-next-line no-underscore-dangle
      const url = window.URL.createObjectURL(response._data);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'client.zip');

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    },
    headers: {
      Authorization: localStorage.getItem('auth.access_token') || '',
    },
  });
};
</script>
