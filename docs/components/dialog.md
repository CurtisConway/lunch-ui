# Dialog

<ClientOnly>
<LuRow>
<LuColumn>
<LuButton color="blue" @click="dialog = !dialog">Open Dialog</LuButton>
</LuColumn>
</LuRow>
<LuDialog v-model="dialog">
<LuColumn vAlign="center" hAlign="center">
<LuText tag="h1" size="display" bold>Easy as Lunch!</LuText>
</LuColumn>
</LuDialog>
</ClientOnly>

```vue
<LuRow>
    <LuColumn>
        <LuButton color="blue" @click="dialog = !dialog">Open Dialog</LuButton>
    </LuColumn>
</LuRow>

<LuDialog v-model="dialog">
    <LuColumn vAlign="center" hAlign="center">
        <LuText tag="h1" size="display" bold>Easy as Lunch!</LuText>
    </LuColumn>
</LuDialog>
```

### Props

| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| value            | Boolean  | `false`      | Toggles the dialog on and off


<script>
export default {
  data () {
      return {
          dialog: false,
      };
  },
}
</script>
