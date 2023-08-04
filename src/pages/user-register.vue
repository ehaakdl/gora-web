<script setup lang="ts">
import logo from '@/public/logo.svg?raw'

import {useUserStore} from "~/stores/user";
import {useRouter} from 'vue-router'

definePageMeta({
  layout: "blank",
});

const router = useRouter()

// todo 회원가입 api 연동
const register = () => {

}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard width="348">
      <VCardItem>

        <div class="d-flex justify-center">
          <div v-html="logo"/>
          <VCardTitle class="pl-3 font-weight-semibold text-2xl text-uppercase">Gora</VCardTitle>
        </div>

      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1 text-center">
          Welcome to Gora!
        </h5>
      </VCardText>


      <VCardText>
        <VForm @submit.prevent="register">
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

          <!--todo 색깔 통일하기-->
          <VBtn class="mt-10" block type="submit">SignUp</VBtn>

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
