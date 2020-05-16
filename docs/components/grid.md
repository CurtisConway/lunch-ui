# Grid

The grid is a simple flex grid utilising rows and columns, as well as a 12-point grid system with manual overrides -
resulting in simple, effective, efficient, and scalable responsive components.

## Row

<ClientOnly>
<LuRow 
    tag="section"
    vAlign="center"
    hAlign="center"
>
<LuText tag="h2" size="heading" mv="2">Easy as Lunch!</LuText>
</LuRow>
</ClientOnly>

```vue
<LuRow 
    tag="section"
    vAlign="center"
    hAlign="left"
>
    <LuText tag="h2" size="heading" mv="2">Easy as Lunch!</LuText>
</LuRow>
```

### Mixes
<br>
<ClientOnly>
<router-link to="/components/mixins.html#colors" target="_blank">Colors</router-link>
<br>
<router-link to="/components/mixins.html#spacing" target="_blank">Spacing</router-link>
</ClientOnly>

### Props

| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| `tag`            | String   | 'div'        | The HTML tag to render the row as
| `reverse`        | Boolean  | false        | Will reverse the flex direction of the row
| `wrap`           | Boolean  | true         | Will allow children of the row to wrap
| `vAlign`         | String   | 'center      | Aligns child flex containers vertically to the center of the row
| `hAlign`         | String   | 'left'       | Aligns child flex containers horizontally to the left of the row

<br>
<hr>
<br>

## Column

<ClientOnly>
<LuRow 
    tag="section"
    vAlign="center"
    hAlign="center"
    :wrap="true"
>
<LuColumn 
    tag="div"
    hAlign="center"
    :columnSizes="{
        xs: 12,
        md: 4,
    }"
>
<LuText tag="h2" size="heading" mv="2">Easy</LuText>
</LuColumn>
<LuColumn 
    tag="div"
    hAlign="center"
    :columnSizes="{
        xs: 12,
        md: 4,
    }"
>
<LuText tag="h2" size="heading" mv="2">as</LuText>
</LuColumn>
<LuColumn 
    tag="div"
    hAlign="center"
    :columnSizes="{
        xs: 12,
        md: 4,
    }"
>
<LuText tag="h2" size="heading" mv="2">Lunch!</LuText>
</LuColumn>
</LuRow>
</ClientOnly>

```vue
<LuRow 
    tag="section"
    vAlign="center"
    hAlign="left"
    :wrap="true"
>
    <LuColumn 
        tag="div"
        :columnSizes="{
            xs: 12,
            md: 4,
        }"
    >
        <LuText tag="h2" size="heading" mv="2">Easy as Lunch!</LuText>
    </LuColumn>
    <LuColumn 
        tag="div"
        :columnSizes="{
            xs: 12,
            md: 4,
        }"
    >
        <LuText tag="h2" size="heading" mv="2">Easy as Lunch!</LuText>
    </LuColumn>
    <LuColumn 
        tag="div"
        :columnSizes="{
            xs: 12,
            md: 4,
        }"
    >
        <LuText tag="h2" size="heading" mv="2">Easy as Lunch!</LuText>
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
| `tag`            | String   | 'div'        | The HTML tag to render the row as
| `reverse`        | Boolean  | false        | Will reverse the flex direction of the row
| `wrap`           | Boolean  | true         | Will allow children of the row to wrap
| `vAlign`         | String   | 'center      | Aligns child flex containers vertically to the center of the row
| `hAlign`         | String   | 'left'       | Aligns child flex containers horizontally to the left of the row
| `columnSizes`    | Object   | `{}`         | Accepts 5 keys `xs, sm, md, lg, xl` representing the amount of columns the component will take up in a 12 point grid at that breakpoint
| `columnWidths`   | Object, String  | `{}`  | **Overrides columnSizes** - Accepts 5 keys `xs, sm, md, lg, xl` representing a string value for the width at that breakpoint. Can also accept a singular string for all breakpoints
