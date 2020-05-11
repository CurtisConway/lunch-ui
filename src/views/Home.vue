<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <LuButton to="about">
      Test
    </LuButton>
  </div>
</template>

<script>
import LuButton from '../components/button/LuButton.vue';

export default {
  name: 'Home',
  components: {
    LuButton,
  },
};
</script>
