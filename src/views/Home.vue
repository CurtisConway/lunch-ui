<template>
  <div class="home" style="position:relative;">
    <img alt="Vue logo" src="../assets/logo.png">
    <LuDialog v-model="dialog">
      <LuText tag="h2" size="heading">Hello</LuText>
    </LuDialog>
    <LuRow
      tag="main"
      vAlign="center"
      hAlign="left"
      :wrap="true"
    >
      <LuColumn pa="5" tag="section">
        <LuButton
          color="green"
          type="outline"
          mv="5"
          @click="dialog = !dialog"
        >
          Open Dialog
        </LuButton>
      </LuColumn>

      <LuColumn pa="5">
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
      <LuColumn pa="2" :columnSizes="{xs: 12, sm: 6}">
        <LuTextInput
          v-model="inputValue"
          label="Test Label"
          color="grey"
          persistentLabel
          :errors="[
            'Too many words',
          ]"
        />
      </LuColumn>
      <LuColumn pa="2" :columnSizes="{xs: 12, sm: 6}">
        <LuTextInput
          v-model="inputValue2"
          label="Test Label"
          color="grey"
          success
        />
      </LuColumn>
      <LuColumn pa="2" :columnSizes="{xs: 12, sm: 6}">
        <LuTextInput
          v-model="inputValue3"
          label="Test Label"
          color="blue"
          inputStyle="underline"
          :rules="[
            v => !!v || 'Required',
          ]"
        />
      </LuColumn>
      <LuColumn pa="2" :columnSizes="{xs: 12, sm: 6}">
        <LuTextInput
          v-model="inputValue4"
          label="Test Label"
          color="blue"
          inputStyle="solo"
        />
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
  data() {
    return {
      dialog: false,
      inputValue: '',
      inputValue2: '',
      inputValue3: '',
      inputValue4: '',
    };
  },
};
</script>
