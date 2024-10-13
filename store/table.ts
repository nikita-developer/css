import { defineStore } from "pinia";
import users from "assets/userList.json";
import type User from "~/interfaces/User";

export const useTableStore = defineStore("tableStore", () => {
  const users_list = ref<User[]>(users);
  const users_filter = ref<User[]>(users);
  const search = shallowRef<string>("");

  const createUser = (user: User) => {
    user.id = users_list.value.length
    user.lastVisitedAt = String(new Date())

    users_list.value.push({...user});
    filterUsers(search.value)
  };
  const filterUsers = (search: string) => users_filter.value = users_list.value.filter((el) => el.firstName?.toLowerCase().indexOf(search.toLowerCase()) !== -1);

  return { createUser, filterUsers, users_list, users_filter, search };
});
