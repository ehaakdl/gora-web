<template>
  <VApp id="inspire" style="position:relative">
    <VContainer
        style="margin: auto"
    >
      <VImg @click="download" src="download_btn.png"></VImg>
    </VContainer>
  </VApp>

</template>
<script setup lang="ts">
const download = () =>{
  console.log("download")
}
</script>
