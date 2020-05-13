# Components

## Grid

The grid is a simple flex grid utilising rows and columns, as well as a 12-point grid system with manual overrides -
resulting in simple, effective, efficient, and scalable responsive components.

### Row

<ClientOnly>
<LuRow 
    tag="section"
    vAlign="center"
    hAlign="center"
    :wrap="true"
>
<h2 style="padding:5px;">
    LetUs UI Rocks!
</h2>
</LuRow>
</ClientOnly>

```vue
<LuRow 
    tag="section"
    vAlign="center"
    hAlign="left"
    :wrap="true"
>
    <h2>
        LetUs UI!
    </h2>
</LuRow>
```

<h3>Props</h3>

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

### Column

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
        sm: 10,
        md: 8,
        lg: 6,
        xl: 4,
    }"
>
<h2>LetUs</h2>
</LuColumn>
<LuColumn 
    tag="div"
    hAlign="center"
    :columnSizes="{
        xs: 12,
        sm: 10,
        md: 8,
        lg: 6,
        xl: 4,
    }"
>
<h2>UI</h2>
</LuColumn>
<LuColumn 
    tag="div"
    hAlign="center"
    :columnSizes="{
        xs: 12,
        sm: 10,
        md: 8,
        lg: 6,
        xl: 4,
    }"
>
<h2>Rocks!</h2>
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
            sm: 10,
            md: 8,
            lg: 6,
            xl: 4,
        }"
    >
        <h2>LetUs</h2>
    </LuColumn>
    <LuColumn 
        tag="div"
        :columnSizes="{
            xs: 12,
            sm: 10,
            md: 8,
            lg: 6,
            xl: 4,
        }"
    >
        <h2>UI</h2>
    </LuColumn>
    <LuColumn 
        tag="div"
        :columnSizes="{
            xs: 12,
            sm: 10,
            md: 8,
            lg: 6,
            xl: 4,
        }"
    >
        <h2>Rocks!</h2>
    </LuColumn>
</LuRow>
```

<h3>Props</h3>

| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| `tag`            | String   | 'div'        | The HTML tag to render the row as
| `reverse`        | Boolean  | false        | Will reverse the flex direction of the row
| `wrap`           | Boolean  | true         | Will allow children of the row to wrap
| `vAlign`         | String   | 'center      | Aligns child flex containers vertically to the center of the row
| `hAlign`         | String   | 'left'       | Aligns child flex containers horizontally to the left of the row
| `columnSizes`    | Object   | `{}`         | Accepts 5 keys `xs, sm, md, lg, xl` representing the amount of columns the component will take up in a 12 point grid at that breakpoint
| `columnWidths`   | Object, String  | `{}`  | **Overrides columnSizes** - Accepts 5 keys `xs, sm, md, lg, xl` representing a string value for the width at that breakpoint. Can also accept a singular string for all breakpoints

<br>
<hr>
<br>

## Button

<ClientOnly>
<LuRow>
<LuColumn style="padding:10px;">
<LuButton>LetUs</LuButton>
</LuColumn>

<LuColumn style="padding:10px;">
<LuButton type="outline">UI</LuButton>
</LuColumn>

<LuColumn style="padding:10px;">
<LuButton type="text">Rocks!</LuButton>
</LuColumn>
</LuRow>
</ClientOnly>

```vue
<LuRow>
    <LuColumn style="padding:10px;">
        <LuButton>LetUs</LuButton>
    </LuColumn>
    
    <LuColumn style="padding:10px;">
        <LuButton type="outline">UI</LuButton>
    </LuColumn>

    <LuColumn style="padding:10px;">
        <LuButton type="text">Rocks!</LuButton>
    </LuColumn>
</LuRow>
```

<h3>Props</h3>

| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| `to`             | String, Location | `undefined` | Turns the button into a link. Can be either a string, or a router location object
| `size`           | String, Number   | `undefined` | Determines the width of the button. Can be either the string "small" or "large" or a number representing the width
| `color`          | String           | `'blue'`    | Determines the theme color of the button based off of the preset list of color strings
| `type`           | String           | `'solid'`   | Determines the type of button, can either be `solid`, `outline`, or `text`
| `disabled`       | Boolean          | `false`     | Disables any click events on the button and reduces it's opacity