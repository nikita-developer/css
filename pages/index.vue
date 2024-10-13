<script setup lang="ts">
import UserList from "~/components/Users/UserList.vue";
import type User from "~/interfaces/User";
import { useTableStore } from "~/store/table";
import UserCreate from "~/components/Users/UserCreate.vue";

const store = useTableStore();

const pagination_options = {
  list_size: 5,
  dots_size: 3,
  start_dot: 1,
};

const user_list = ref<User[]>(store.users_list);

const changePagination = (dot: number) =>
  (user_list.value = store.users_filter.filter(
    (_, idx) =>
      idx < dot * pagination_options.list_size &&
      idx >= dot * pagination_options.list_size - pagination_options.list_size,
  ));

const sort = () => (user_list.value = user_list.value.reverse());
</script>

<template>
  <div class="users-table">
    <Search
      class="users-table__search"
      @change="store.filterUsers(store.search)"
      v-model="store.search"
    ></Search>
    <div class="users-table-sort">
      <button class="users-table-sort__button" @click="sort">
        Сортировка по id
      </button>
    </div>
    <UserList :users="user_list"></UserList>
    <UserCreate></UserCreate>
    <Pagination
      :users="store.users_filter"
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
