<template>
  <ul :class="defaultClassList">
    <li v-for="(error, i) in errors" :key="i" class="mv-1">
      {{ error }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LuErrorList',
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    defaultClassList() {
      return [
        'lu-error-list',
        'bg-red',
        'text-white',
        'pv-1',
        'pr-2',
        'pl-5',
        'rad-1',
      ];
    },
  },
};
</script>
