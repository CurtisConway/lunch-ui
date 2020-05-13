# Components

## Row

<ClientOnly>
<LuRow 
    tag="section"
    vAlign="center"
    hAlign="center"
    :wrap="true"
>
<div style="padding:5px;">
    1
</div>
<div style="padding:5px;">
    2
</div>
<div style="padding:5px;">
    3
</div>
<div style="padding:5px;">
    4
</div>
</LuRow>
</ClientOnly>

```vue
<LuRow 
    tag="section"
    vAlign="center"
    hAlign="left"
    :wrap="true"
>
    <div style="padding:5px;">
        1
    </div>
    <div style="padding:5px;">
        2
    </div>
    <div style="padding:5px;">
        3
    </div>
    <div style="padding:5px;">
        4
    </div>
</LuRow>
```

### Props

| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| `tag`            | String   | 'div'        | The HTML tag to render the row as
| `reverse`        | Boolean  | false        | Will reverse the flex direction of the row
| `wrap`           | Boolean  | true         | Will allow children of the row to wrap
| `vAlign`         | String   | 'center      | Aligns child flex containers vertically to the center of the row
| `hAlign`         | String   | 'left'       | Aligns child flex containers horizontally to the left of the row

## Column

## Button