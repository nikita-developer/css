<script setup lang="ts">
import UserList from "~/components/Users/UserList.vue";
import users from "assets/userList.json";
import type User from "~/interfaces/User";

const pagination_options = {
	list_size: 5,
	dots_size: 3,
	start_dot: 1
}

const $users = ref<User[]>(users);
const $filter = ref<User[]>(users);

const search = shallowRef<string>("");

const changePagination = (dot: number) => $users.value = $filter.value.filter((_, idx) => idx < dot * pagination_options.list_size && idx >= dot * pagination_options.list_size - pagination_options.list_size);

const sort = () => $users.value = $users.value.reverse()
const filter = () => $filter.value = users.filter((el) => el.firstName?.toLowerCase().indexOf(search.value.toLowerCase()) !== -1);
</script>

<template>
  <div class="users-table">
    <Search
      class="users-table__search"
      @change="filter"
      v-model="search"
    ></Search>
	  <div class="users-table-sort">
	    <button class="users-table-sort__button" @click="sort">Сортировка по id</button>
	  </div>
    <UserList :users="$users"></UserList>
    <Pagination
      :users="$filter"
      :list_size="pagination_options.list_size"
      :dots_size="pagination_options.dots_size"
      :start_dot="pagination_options.start_dot"
      @change="changePagination"
      class="users-table__pagination"
    ></Pagination>
  </div>
</template>

<style scoped lang="scss">
@import "@/pages/styles/users-table";
</style>
