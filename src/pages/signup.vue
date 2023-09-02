<script setup lang="ts">
import userApi from '@/api/userApi';
import logo from '@/public/logo.svg?raw';
import { SignupRequest } from '@/types.d/user';
import { useRouter } from 'vue-router';

definePageMeta({
  layout: 'blank',
});

const router = useRouter();
const userApiVal = new userApi();

const email = ref<string>();
const password = ref<string>();

// todo 회원가입 api 연동
const signup = () => {
  const signupRequest:SignupRequest = {
    email: email.value,
    password: password.value,
  };

  userApiVal.signup(signupRequest).then(() => {
    router.push('/login');
  });
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
        <h5 class="text-h5 font-weight-semibold mb-1 text-center">
          Welcome to Gora!
        </h5>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="signup">
          <VRow>
            <VCol cols="12">
              <!--              todo VTextField 색깔 통일하기-->
              <VTextField
                v-model="email"
                base-color=""
                bg-color="#FFFFFF"
                type="email"
                label="Email"
              />
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
