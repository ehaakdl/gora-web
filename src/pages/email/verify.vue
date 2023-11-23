<script setup lang="ts">
import logo from '@/public/logo.svg?raw';
import useUserStore from '@/stores/userStore';
import { useRoute } from 'vue-router';

definePageMeta({
  layout: 'blank',
});
const router = useRoute();
const userStore = useUserStore();
const accessToken = router.query.accessToken ? router.query.accessToken : '';
userStore.verifyUserEmail(accessToken);

</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard width="348">
      <VCardItem>
        <div class="d-flex justify-center">
          <div v-html="logo" />
          <VCardTitle class="pl-3 font-weight-semibold text-2xl text-uppercase">
            Welcome Verify Email
          </VCardTitle>
        </div>
      </VCardItem>
    </VCard>
  </div>
</template>

<style scoped>
.auth-wrapper {
  min-block-size: calc(var(--vh, 1vh) * 100);
}
</style>
