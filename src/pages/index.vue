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
  // not work 
  $fetch('/api/v1/download/client', {
    method: 'GET',
  }).then((res) => {
    console.log(res.size);
  });
  
  // work
  $fetch(`http://localhost:8080/api/v1/download/client`, {
    method: 'GET',  
  }).then((res) => {
    console.log(res.size);
  });
};
</script>
