# Button

<ClientOnly>
<LuRow vAlign="center">
<LuColumn pa="2">
<LuButton>Easy</LuButton>
</LuColumn>
<LuColumn pa="2">
<LuButton type="outline" short>As</LuButton>
</LuColumn>
<LuColumn pa="2">
<LuButton type="text">Lunch!</LuButton>
</LuColumn>
</LuRow>
</ClientOnly>

```vue
<LuRow vAlign="center">
    <LuColumn pa="2">
        <LuButton>Easy</LuButton>
    </LuColumn>
    
    <LuColumn pa="2">
        <LuButton type="outline" short>As</LuButton>
    </LuColumn>

    <LuColumn pa="2">
        <LuButton type="text">Lunch!</LuButton>
    </LuColumn>
</LuRow>
```

### Mixes
<br>
<ClientOnly>
<router-link to="/components/mixins.html#colors">Colors</router-link>
<br>
<router-link to="/components/mixins.html#spacing">Spacing</router-link>
</ClientOnly>

### Props

| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| `to`             | String, Location | `undefined` | Turns the button into a link. Can be either a string, or a router location object
| `size`           | String, Number   | `undefined` | Determines the width of the button. Can be either the string "small" or "large" or a number representing the width
| `color`          | String           | `'blue'`    | Determines the theme color of the button based off of the preset list of color strings
| `type`           | String           | `'solid'`   | Determines the type of button, can either be `solid`, `outline`, or `text`
| `short`          | String           | `false`    | Renders a shorter button
| `disabled`       | Boolean          | `false`     | Disables any click events on the button and reduces it's opacity
