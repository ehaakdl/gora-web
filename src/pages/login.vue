<script setup lang="ts">
import logo from '@/public/logo.svg?raw';

import { useRouter } from 'vue-router';
import { useUserStore } from "~/stores/user";

definePageMeta({
  layout: "blank",
});

const router = useRouter()
const userStore = useUserStore()
const redirectGoogleLogin = () => {
  const config = useRuntimeConfig()
  window.location.href = config.public.BASE_URL + '/oauth2/authorize/google'
}

const onLogin = async () => {
  userStore.successLogin('mock access')
  router.push('/')
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
        <VForm @submit.prevent="() => {}">
          <VRow>
            <VCol cols="12">
              <!--              todo VTextField 색깔 통일하기-->
              <VTextField
                base-color=""
                bg-color="#FFFFFF"
                type="email"
                label="Email"
              />
            </VCol>

            <VCol cols="12">
              <VTextField
                label="Password"
                type="password"
                base-color=""
                bg-color="#FFFFFF"
              />
            </VCol>
          </VRow>

          <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
            <!--              todo 네모박스 체크박스 적용하기-->
            <VCheckbox
              label="Remember Me"
            />
            <RouterLink to="{name: forget-password}">
              forget password
            </RouterLink>
          </div>
          <!--todo 색깔 통일하기-->
          <VBtn
            block
            type="submit"
            @click="onLogin"
          >
            Login
          </VBtn>
        </VForm>
      </VCardText>

      <div class="hr-sect">
        or
      </div>

      <VCol
        class="text-center text-base"
      >
        <RouterLink
          class="text-primary ms-2"
          to="{name: 'register'}"
        >
          Create an account
        </RouterLink>
      </VCol>

      <VCardItem>
        <div class="d-flex justify-center">
          <VImg
            src="google_login.png"
            @click="redirectGoogleLogin"
          />
        </div>
      </VCardItem>
    </VCard>
  </div>
</template>

<style scoped>
.auth-wrapper {
  min-block-size: calc(var(--vh, 1vh) * 100);
}

.hr-sect {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 12px;
  margin: 8px 0px;
}

.hr-sect::before,
.hr-sect::after {
  content: "";
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.35);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin: 0px 16px;
}
</style>
