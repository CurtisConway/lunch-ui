<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <LuRow
      tag="main"
      vAlign="center"
      hAlign="left"
      :wrap="true"
    >
      <LuColumn
        tag="section"
        :columnWidths="{
          xs: '100%',
          md: '50%',
          lg: '30%',
        }"
      >
        <LuButton
          to="about"
          color="green"
          type="outline"
          disabled
        >
          Test Text
        </LuButton>
      </LuColumn>
      <LuColumn
        tag="section"
        :columnWidths="{
          xs: '30%',
          md: '50%',
          lg: '100%',
        }"
      >
        <LuButton
          to="about"
          color="green"
          type="outline"
          disabled
        >
          Test Text
        </LuButton>
      </LuColumn>
    </LuRow>
  </div>
</template>

<script>
import LuButton from '../components/button/LuButton.vue';
import LuRow from '../components/grid/LuRow.vue';
import LuColumn from '../components/grid/LuColumn.vue';

export default {
  name: 'Home',
  components: {
    LuButton,
    LuRow,
    LuColumn,
  },
};
</script>
