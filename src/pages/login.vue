<script setup lang="ts">

import {useUserStore} from "~/stores/user";
import { useRouter } from 'vue-router'

definePageMeta({
  layout: "blank",
});

const router = useRouter()
const userStore = useUserStore()


const redirectGoogleLogin = () => {
  userStore.successLogin()
  // window.location.href = "https://naver.com"
}

const login = ()=>{
  userStore.successLogin()
  router.push('/')
}
</script>

<template>
  <VApp id="inspire" style="position:relative">
    <VContainer
        style="margin: auto"
    >
      <VRow
          justify="center"
      >
        <VCol cols="12" sm="4">
          <VCard>
            <VCardTitle class="text-center">Login</VCardTitle>

            <VCardItem>
              <VLabel>Email</VLabel>
<!--              todo VTextField 색깔 통일하기-->
              <VTextField base-color="" bg-color="#FFFFFF" type="text"></VTextField>

              <VLabel>Password</VLabel>
              <VTextField base-color="" bg-color="#FFFFFF" type="password"></VTextField>

<!--              todo 네모박스 체크박스 적용하기-->
              <VCheckbox label="Remember me?"></VCheckbox>
<!--todo 색깔 통일하기-->
                <VBtn width="100%" @click="login">Login</VBtn>
            </VCardItem>
            <div class="hr-sect">or</div>
            <VCardItem>
              <VImg @click="redirectGoogleLogin" src="google_login.png"/>
            </VCardItem>
            <VCardItem>

            </VCardItem>

          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </VApp>
</template>

<style scoped>
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
