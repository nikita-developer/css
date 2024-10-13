<script setup lang="ts">
import type User from "~/interfaces/User";
import {useTableStore} from "~/store/table";

const store = useTableStore()

const new_user = ref<User>({
	firstName: "",
	lastName: "",
	email: "",
});

</script>

<template>
  <div class="user-create">
    <div class="user-create__col">
      <input
        v-model="new_user.firstName"
        type="text"
        class="user-create__field"
        placeholder="Имя"
      />
    </div>
    <div class="user-create__col">
      <input
        v-model="new_user.lastName"
        type="text"
        class="user-create__field"
        placeholder="Фамилия"
      />
    </div>
    <div class="user-create__col">
      <input
        v-model="new_user.email"
        type="text"
        class="user-create__field"
        placeholder="Почта"
      />
    </div>
    <div class="user-create__col">
      <button class="user-create__button" @click="store.createUser(new_user)">Создать</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/components/Users/styles/user-create";
</style>
