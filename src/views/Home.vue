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
          mv="5"
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
          short
        >
          Test Text
        </LuButton>
      </LuColumn>
    </LuRow>
    <LuRow>
      <LuColumn>
        <LuText
          tag="p"
          color="deep-purple"
          transform="capitalize"
          mv="5"
          ph="2"
          :size="20"
          underline
          italic
        >
          This is a test text
        </LuText>
      </LuColumn>
    </LuRow>
    <LuRow>
      <LuColumn pa="2" :columnWidths="{
        xs: '100%',
        md: '600px',
      }">
        <LuCard
          pa="5"
          borderRadius="1"
          bgColor="black"
        >
          <LuText tag="h2" size="heading" color="white">
            This is a Card
          </LuText>
        </LuCard>
      </LuColumn>
      <LuColumn pa="2">
        <LuCard
          pa="5"
          borderRadius="1"
        >
          <LuText tag="h2" size="heading">
            This is a Card
          </LuText>
        </LuCard>
      </LuColumn>
      <LuColumn pa="2">
        <LuCard
          pa="5"
          borderRadius="1"
        >
          <LuText tag="h2" size="heading">
            This is a Card
          </LuText>
        </LuCard>
      </LuColumn>
    </LuRow>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>
