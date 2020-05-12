<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <LuButton to="about" color="green" type="solid" :size="542">
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
