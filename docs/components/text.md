# Text

<ClientOnly>
<LuText size="display">Display</LuText>
<LuText size="heading">Heading</LuText>
<LuText size="subheading">SubHeading</LuText>
<LuText size="title">Title</LuText>
<LuText size="subtitle">SubTitle</LuText>
<LuText>Body</LuText>
<LuText size="caption">Caption</LuText>
<LuText size="tiny">Tiny</LuText>
<LuText :size="25">25 Pixels</LuText>
</ClientOnly>

```vue
<LuText size="display">Display</LuText>
<LuText size="heading">Heading</LuText>
<LuText size="subheading">SubHeading</LuText>
<LuText size="title">Title</LuText>
<LuText size="subtitle">SubTitle</LuText>
<LuText>Body</LuText>
<LuText size="caption">Caption</LuText>
<LuText size="tiny">Tiny</LuText>
<LuText :size="25">25 Pixels</LuText>
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
| `tag`            | String   | `p`          | Determines the HTML tag to render
| `transform`      | String   | `undefined`  | Determines the text transform - `uppercase` or `capitalize`
| `size`           | String, Number   | `body`      | Determines the font size of the text. Can be one of the default styles or a number representing the width
| `color`          | String           | `black`     | Determines the text color based off of the preset list of color strings
| `bold`           | Boolean          | `false`     | Bolds the text
| `italic`         | Boolean          | `false`     | Italicises the text
| `underline`      | Boolean          | `false`     | Underlines the text
