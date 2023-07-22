<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
</script>

<template>
<VContainer>
  <VCard>
    <VCardItem title="Login"/>
    <VCardItem class="justify-center">
      <VLabel>Email</VLabel>
      <VInput label="Email"></VInput>

      <VLabel>Password</VLabel>
      <VInput></VInput>

      <VCheckbox>Remember me?</VCheckbox>

      <VBtn>Login</VBtn>
    </VCardItem>

    <VCardItem>
      <hr/>
      <VIcon></VIcon>
    </VCardItem>
    <VCardItem>

    </VCardItem>

  </VCard>
</VContainer>
</template>

<style scoped>

</style>