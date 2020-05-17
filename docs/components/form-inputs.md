# Form Inputs

## Mixins

These props are available to all form inputs.

### Inputs

| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| elementId        | String   | `undefined`  | Determines the ID attribute of the input
| value            | String   | `undefined`  | Determines the value of the input **(2 way binding works with v-model)**
| label            | String   | `undefined`  | Determines the label of the input
| inputStyle       | String   | `undefined`  | Determines the style of the input (outline, underline, solo)
| persistentLabel  | Boolean  | `false`      | Keeps the label pinned to the top of the input, does not animate it
| color            | String   | `black`      | Determines the theme color of the input - border color and text color
| typingTimeout    | Number   | `500`        | Determines the timeout on typing for the input to emit an input event
| autoComplete     | Boolean  | `true`       | Determines the autocomplete state of the input

### Validation

| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| required         | Boolean  | `false`      | Adds an asterix to the label _(has no bearing on input validation)_
| rules            | Array    | `[]`         | The validation rules to assert against the value of the input. Is an array of functions that either return `true` or a `string` representing the error message (ex. `v => !!v || Input is required.`).
| errors           | Array    | `[]`         | Forces the error state on the input with a list of persistent errors
| success          | Boolean  | `false`      | Forces the success state on the input
| validate         | Boolean  | `true`       | Determines whether or not the input will utilise validation

## Text Input

<ClientOnly>
<LuRow pv="2">
<LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
<LuTextInput label="Outline Input" value="Easy" color="blue"></LuTextInput>
</LuColumn>
<LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
<LuTextInput label="Underline Input" value="As" inputStyle="underline" color="blue"></LuTextInput>
</LuColumn>
<LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
<LuTextInput label="Solo Input" value="Lunch!" inputStyle="solo" color="blue"></LuTextInput>
</LuColumn>
<LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
<LuTextInput v-model="requiredVal" label="Required Input" color="blue" required :rules="[v => !!v || 'Input is required.']"></LuTextInput>
</LuColumn>
</LuRow>
</ClientOnly>

```vue
<LuRow pv="2">
    <LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
        <LuTextInput 
            label="Outline Input" 
            value="Easy"
        ></LuTextInput>
    </LuColumn>
    <LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
        <LuTextInput 
            label="Underline Input" 
            value="As" 
            inputStyle="underline"
        ></LuTextInput>
    </LuColumn>
    <LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
        <LuTextInput 
            label="Solo Input"
            value="Lunch!" 
            inputStyle="solo"
        ></LuTextInput>
    </LuColumn>
    <LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
        <LuTextInput 
            label="Required Input" 
            value="Lunch!" 
            inputStyle="solo"
        ></LuTextInput>
    </LuColumn>
    <LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
        <LuTextInput 
            label="Required Input" 
            color="blue" 
            v-model="requiredVal" 
            :rules="[v => !!v || 'Input is required.']"
            required
        ></LuTextInput>
    </LuColumn>
</LuRow>
```

### Props

| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| type             | String   | `text`       | Determines the input type _(text, password, email, tel, number, search)_


## Select Input

<ClientOnly>
<LuRow pv="2">
<LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
<LuSelectInput label="Select Input" :items="['Easy', 'As', 'Lunch']" color="blue"></LuSelectInput>
</LuColumn>
<LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
<LuSelectInput label="Select Input" :items="['Easy', 'As', 'Lunch']" inputStyle="underline" color="blue"></LuSelectInput>
</LuColumn>
</LuRow>
</ClientOnly>

```vue
<LuRow pv="2">
    <LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
        <LuSelectInput 
            label="Select Input" 
            :items="['Easy', 'As', 'Lunch']" 
            color="blue"
        ></LuSelectInput>
    </LuColumn>
    <LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
        <LuSelectInput 
            label="Select Input" 
            :items="['Easy', 'As', 'Lunch']" 
            inputStyle="underline" 
            color="blue"
        ></LuSelectInput>
    </LuColumn>
</LuRow>
```

### Props
| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| items            | Array    | `[]`         | The items to select from can either be an array of strings or an array of objects with a `label` and `value` key _(ex. `[{label: 'foo', value: 'bar'}]`)_
| multiple         | Boolean  | `false`      | Allows multiple selection of items (requires and will return an array as the value)


<script>
export default {
  data () {
      return {
          requiredVal: '',
      };
  },
}
</script>
