<script setup lang="ts">
import type User from "~/interfaces/User";

const {
  users = [],
  dots_size = 3,
  list_size = 2,
  start_dot = 1,
} = defineProps<{
  users?: User[];
  dots_size?: number;
  list_size?: number;
  start_dot?: number;
}>();

const emit = defineEmits(["change"]);

const editDots = () => new Array(Math.ceil(users.length / (list_size < 1 ? 1 : list_size))).fill(0).map((e, i) => i + 1);
const editVisibleDots = () => new Array(dots_size > editDots().length ? editDots().length : dots_size).fill(0).map((e, i) => i + 1);

const dots = ref<number[]>(editDots());
const visible_dots = ref<number[]>(editVisibleDots());
const start_page = shallowRef(start_dot);

const prev = () => {
  if (visible_dots.value[0] > 1) visible_dots.value = visible_dots.value.map((el) => --el);
};

const next = () => {
  if (visible_dots.value[visible_dots.value.length - 1] < dots.value.length) visible_dots.value = visible_dots.value.map((el) => ++el);
};

const checkDot = (dot: number) => {
  start_page.value = dot;
  emit("change", dot);
};

watch(
  () => users,
  () => {
    dots.value = editDots();
    visible_dots.value = editVisibleDots();
	  emit("change", start_page.value);
  },
);

onBeforeMount(() => checkDot(start_dot));
</script>

<template>
  <div class="pagination">
    <div class="pagination__prev" @click="prev"><</div>
    <div class="pagination__body">
      <div
        class="pagination__page"
        v-for="dot in visible_dots"
        :class="{ active: start_page === dot }"
        :key="dot"
        @click="checkDot(dot)"
      >
        {{ dot }}
      </div>
    </div>
    <div class="pagination__next" @click="next">></div>
  </div>
</template>

<style scoped lang="scss">
@import "@/components/Pagination/styles/pagination";
</style>
