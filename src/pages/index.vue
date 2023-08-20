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

  await $fetch(`/api/v1/download/client`, {
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
    onRequest({request, options}) {
      options.headers = options.headers || {}
      options.headers.Authorization = localStorage.getItem('auth.access_token')
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
