<template>
  <div class="login">
    <h1>Você está deslogado.</h1>
    <button @click="AuthManager.login">Logar</button>
  </div>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
</style>

<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import AuthManager from '../../app/AuthManager/AuthManager';

const router = useRouter();
watch(
  () => AuthManager.isLogged,
  () => {
    if (AuthManager.isLogged) {
      router.push({ name: 'Dashboard' });
    }
  }
);
</script>
