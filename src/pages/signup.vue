<script setup lang="ts">
import userApi from '@/api/userApi';
import logo from '@/public/logo.svg?raw';
import { SignupRequest } from '@/types.d/user';
import emailApi from '@/api/emailApi';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

definePageMeta({
  layout: 'blank',
});

const router = useRouter();
const userApiInst = new userApi();
const emailApiInst = new emailApi();
const { t } = useI18n();

const email = ref<string>('');
const password = ref<string>('');
const emailFirstSendFlag = ref(false);
const emailSendBtnName = ref(t('button.email_send_verify'));

const signup = () => {
  const signupRequest:SignupRequest = {
    email: email.value,
    password: password.value,
  };

  userApiInst.signup(signupRequest).then(() => {
    router.push('/login');
  });
};

function sendVerifyEmail() {
  emailApiInst.sendVerifyMail(email.value).then(() => {
    if (emailFirstSendFlag.value) {
      emailSendBtnName.value = t('button.email_resend_verify');
    } else {
      emailFirstSendFlag.value = true;
    }
  });
}
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
        <h5 class="text-h5 font-weight-semibold mb-1 text-center">
          Welcome to Gora!
        </h5>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="signup">
          <VRow>
            <VCol cols="12">
              <VTextField
                v-model="email"
                base-color=""
                bg-color="#FFFFFF"
                type="email"
                label="Email"
              />
              <VBtn
                class="mt-10"
                block
                type="button"
                @click="sendVerifyEmail"
              >
                {{ emailSendBtnName }}
              </VBtn>
            </VCol>

            <VCol cols="12">
              <VTextField
                v-model="password"
                label="Password"
                type="password"
                base-color=""
                bg-color="#FFFFFF"
              />
            </VCol>
          </VRow>

          <!--todo 색깔 통일하기-->
          <VBtn
            class="mt-10"
            block
            type="submit"
          >
            SignUp
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
