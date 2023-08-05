<template>
  <VApp id="inspire" style="position:relative">
    <VContainer
        style="margin: auto"
    >
      <VImg @click="onDownload" src="download_btn.png"></VImg>
    </VContainer>
  </VApp>

</template>
<script setup lang="ts">

const onDownload = async () => {
  const config = useRuntimeConfig()

  await $fetch(config.public.API_BASE_URL + `/download/client`, {
    method: "GET",
    async onResponse({request, response, options}) {
      const url = window.URL.createObjectURL(response._data);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'client.zip');

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    },
    onRequestError(context: FetchContext & { error: Error }): Promise<void> | void {
      console.log(context.error)
    },
    onResponseError(context: FetchContext & { response: FetchResponse<R> }): Promise<void> | void {
      console.log(context.error)
    }
  })
}
</script>
