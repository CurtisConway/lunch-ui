<template>
  <svg height="20" width="20" :class="['triangle', fillColorFromColor]">
    <polygon points="10,13 15,7 5,7"/>
  </svg>
</template>

<script>
import colors from '../../../assets/js/mixins/colors';

export default {
  name: 'LuTriangle',
  mixins: [colors],
};
</script>
