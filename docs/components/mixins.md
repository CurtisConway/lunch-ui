# Mixins

## Colors
<ClientOnly>
<LuRow>
<LuColumn pa="2" columnWidths="20%" v-for="color in ['red', 'pink', 'purple', 'deep-purple', 
'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'amber', 'orange',
'deep-orange', 'brown', 'blue-grey', 'grey', 'black', 'white']" :key="color">
<LuText tag="h4" size="body" transform="uppercase">{{ color }}</LuText>
<LuCard vAlign="center" hAlign="center" pa="3" :bgColor="color">
</LuCard>
</LuColumn>
</LuRow>
</ClientOnly>

### Props
| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| `color`          | String   | `undefined`  | Text color
| `bgColor`        | String   | `undefined`  | Background color

## Spacing

_All spacing amounts are multiplied by 5px_

### Props
| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| `ma`             | Number   | `undefined`  | Margin All
| `mh`             | Number   | `undefined`  | Margin Left and Right
| `mv`             | Number   | `undefined`  | Margin Top and Bottom
| `mt`             | Number   | `undefined`  | Margin Top
| `mb`             | Number   | `undefined`  | Margin Bottom
| `ml`             | Number   | `undefined`  | Margin Left
| `mr`             | Number   | `undefined`  | Margin Right
| `pa`             | Number   | `undefined`  | Padding All
| `ph`             | Number   | `undefined`  | Padding Left and Right
| `pv`             | Number   | `undefined`  | Padding Top and Bottom
| `pt`             | Number   | `undefined`  | Padding Top
| `pb`             | Number   | `undefined`  | Padding Bottom
| `pl`             | Number   | `undefined`  | Padding Left
| `pr`             | Number   | `undefined`  | Padding Right

## Borders

### Props
| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| `ba`             | Number   | `0`          | Border All width
| `bh`             | Number   | `0`          | Border Left and Right width
| `bv`             | Number   | `0`          | Border Top and Bottom width
| `bt`             | Number   | `0`          | Border Top width
| `bb`             | Number   | `0`          | Border Bottom width
| `bl`             | Number   | `0`          | Border Left width
| `br`             | Number   | `0`          | Border Right width
| `borderStyle`    | Number   | `'solid'`    | Border Style (solid, dashed, dotted)
| `borderRadius`   | Number   | `0`          | Border Radius (Number * 5px)
| `borderColor`    | String   | `undefined`  | Border Color

## Elevation

<ClientOnly>
<LuRow>
<LuColumn pa="4" columnWidths="20%" v-for="n in 25">
<LuCard vAlign="center" hAlign="center" pa="3" :elevation="n - 1">
<LuText tag="h4" size="title" bold>{{ n - 1 }}</LuText>
</LuCard>
</LuColumn>
</LuRow>
</ClientOnly>

### Props
| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| `elevation`      | Number   | `undefined`  | Determines the elevation of the component


