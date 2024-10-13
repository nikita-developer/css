<script setup lang="ts">
import type User from "~/interfaces/User";
import type { PropType } from "vue";

defineProps({
  user: {
    type: Object as PropType<User>,
    default: {},
  },
});
</script>

<template>
  <div class="user-item">
    <div class="user-item__col">{{ user?.id }}</div>
    <div class="user-item__col">{{ user?.firstName }}</div>
    <div class="user-item__col">{{ user?.lastName }}</div>
    <div class="user-item__col">{{ user?.email }}</div>
    <div class="user-item__col">{{ user?.lastVisitedAt }}</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/components/Users/styles/user-item";
</style>
