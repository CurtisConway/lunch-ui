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
          color="green"
          type="outline"
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
    <LuRow>
      <LuColumn>
        <LuText>This is a test text</LuText>
      </LuColumn>
    </LuRow>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>
