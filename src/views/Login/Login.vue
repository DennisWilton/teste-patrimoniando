<template>
  <h1>
    {{
      AuthManager.isLogged
        ? `You are in, ${AuthManager.user?.username}`
        : `Sorry! You are out.`
    }}
  </h1>
  <div>
    <span>{{ AuthManager.user.username }}</span>
  </div>
  <div>
    <button @click="AuthManager.login">Logar</button>
  </div>
</template>

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
