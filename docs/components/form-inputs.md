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
<LuRow>
<LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
<LuTextInput label="Outline Input" value="Easy"></LuTextInput>
</LuColumn>
<LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
<LuTextInput label="Underline Input" value="As" inputStyle="underline"></LuTextInput>
</LuColumn>
<LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
<LuTextInput label="Solo Input" value="Lunch!" inputStyle="solo"></LuTextInput>
</LuColumn>
</LuRow>
</ClientOnly>

```vue
<LuRow>
    <LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
        <LuTextInput label="Outline Input" value="Easy"></LuTextInput>
    </LuColumn>
    <LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
        <LuTextInput label="Underline Input" value="As" inputStyle="underline"></LuTextInput>
    </LuColumn>
    <LuColumn :columnSizes="{xs: 12, md: 6}" pa="2">
        <LuTextInput label="Solo Input" value="Lunch!" inputStyle="solo"></LuTextInput>
    </LuColumn>
</LuRow>
```

### Props

| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| type             | String   | `text`       | Determines the input type _(text, password, email, tel, number, search)_
