<template>
  <div class="flex justify-center items-center flex-col">
    <img loading="lazy" class="w-3/5" src="/src/img/gem-3-150.png" />
    <span v-if="text" class="text-md">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped></style>
