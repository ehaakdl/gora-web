<script setup lang="ts">
import logo from '@/public/logo.svg?raw';

import { useNuxtApp } from '#app';

definePageMeta({
  layout: 'blank',
});

const DEFAULT_DURATION = 4;

const sendButtonText = ref('Send');
const isReSend = ref(false);
const durationSec = ref(DEFAULT_DURATION);
const intervalId = ref();
const message = ref('');
const visibleMessage = ref(false);
const visibleTimer = ref(false);
const containerWidth = ref('100%');

function resetTimer() {
  durationSec.value = DEFAULT_DURATION;
  clearInterval(intervalId.value);
}

function startTimer() {
  intervalId.value = setInterval(() => {
    if (durationSec.value <= 0) {
      sendButtonText.value = 'Send';
      isReSend.value = false;
      visibleMessage.value = true;
      const { $i18n } = useNuxtApp();
      message.value = $i18n.t('times_up');
      visibleTimer.value = false;
      containerWidth.value = '100%';
      resetTimer();
    } else {
      durationSec.value -= 1;
    }
  }, 1000);
}

const sendVerifyMail = () => {
  if (intervalId.value) {
    resetTimer();
  }

  if (!isReSend.value) {
    isReSend.value = true;
    sendButtonText.value = 'Resend';
  }

  containerWidth.value = '80%';
  visibleTimer.value = true;
  visibleMessage.value = false;

  startTimer();
// todo 메일 발송 api 연동
//   router.push('/user/signup')
};
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard width="348">
      <VCardItem>
        <div class="d-flex justify-center">
          <div v-html="logo" />
          <VCardTitle class="pl-3 font-weight-semibold text-2xl text-uppercase">
            Gora
          </VCardTitle>
        </div>
      </VCardItem>

      <VCardText class="pt-2">
        <h6 class="text-h6 font-weight-semibold mb-1 text-center">
          {{ $t('please_auth_email') }}
        </h6>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="sendVerifyMail">
          <div class="d-flex">
            <!--              todo VTextField 색깔 통일하기-->
            <div :style="{ width: containerWidth }">
              <VTextField

                base-color=""
                bg-color="#FFFFFF"
                type="email"
                label="Email"
                :readonly="isReSend"
              />
            </div>

            <VLabel
              v-if="visibleTimer"
              class="ml-5"
            >
              {{ durationSec }}
            </VLabel>
          </div>

          <VLabel
            v-if="visibleMessage"
            class="pt-3"
          >
            {{ message }}
          </VLabel>

          <!--todo 색깔 통일하기-->
          <VBtn
            class="mt-10"
            block
            type="submit"
          >
            {{ sendButtonText }}
          </VBtn>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped>
.auth-wrapper {
  min-block-size: calc(var(--vh, 1vh) * 100);
}
</style>
