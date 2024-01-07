<template>
  <nav class="bg-slate-900 text-white p-4 flex items-center">
    <button v-if="showBackIcon" @click="goBack" class="mr-1">
      <span>&lt;</span>
    </button>
    HAIR RECOVERY - WOW GUILD
  </nav>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const showBackIcon = computed(() => route.path !== "/");

function goBack() {
  router.go(-1);
}
</script>