<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <LuButton
      to="about"
      color="green"
      type="outline"
      size="small"
      disabled
    >
      Test Text
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
