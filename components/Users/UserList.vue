<script setup lang="ts">
import UserItem from "~/components/Users/UserItem.vue";
import type User from "~/interfaces/User";

const { users = [] } = defineProps<{
  users?: User[];
}>();
</script>

<template>
  <div class="user-list">
	  <div class="user-list-head">
		  <div class="user-list-head__title">Id</div>
		  <div class="user-list-head__title">Имя</div>
		  <div class="user-list-head__title">Фамилия</div>
		  <div class="user-list-head__title">Почта</div>
		  <div class="user-list-head__title">Дата визита</div>
	  </div>
    <UserItem
      v-for="user in users"
      :key="user.id"
      :user
      class="user-list__item"
    ></UserItem>
  </div>
</template>

<style scoped lang="scss">
@import "@/components/Users/styles/user-list";
</style>
