# Card

<ClientOnly>
<LuRow>
<LuColumn pa="2">
<LuCard vAlign="center" hAlign="center" pa="5">
<LuText tag="h2" size="heading" bold>Easy</LuText>
</LuCard>
</LuColumn>
<LuColumn pa="2">
<LuCard vAlign="center" hAlign="center" pa="5">
<LuText tag="h2" size="heading" bold>As</LuText>
</LuCard>
</LuColumn>
<LuColumn pa="2">
<LuCard vAlign="center" hAlign="center" pa="5">
<LuText tag="h2" size="heading" bold>Lunch!</LuText>
</LuCard>
</LuColumn>
</LuRow>
</ClientOnly>

```vue
<LuRow>
    <LuColumn pa="2">
        <LuCard vAlign="center" hAlign="center" pa="5">
            <LuText tag="h2" size="heading" bold>Easy</LuText>
        </LuCard>
    </LuColumn>
    <LuColumn pa="2">
        <LuCard vAlign="center" hAlign="center" pa="5">
            <LuText tag="h2" size="heading" bold>As</LuText>
        </LuCard>
    </LuColumn>
    <LuColumn pa="2">
        <LuCard vAlign="center" hAlign="center" pa="5">
            <LuText tag="h2" size="heading" bold>Lunch!</LuText
        </LuCard>
    </LuColumn>
</LuRow>
```

### Mixes
<br>
<ClientOnly>
<router-link to="/components/mixins.html#colors">Colors</router-link>
<br>
<router-link to="/components/mixins.html#spacing">Spacing</router-link>
<br>
<router-link to="/components/mixins.html#borders">Borders</router-link>
<br>
<router-link to="/components/mixins.html#elevation">Elevation</router-link>
</ClientOnly>

### Props

| Prop             | Type     | Default      | Description
|------------------|----------|--------------|---------------
| `tag`            | String   | `div`        | Determines the HTML tag to render
| `elevation`      | String, Number  | `4`   | Determines the amount of elevation to give the card
| `vAlign`         | String   | `undefined`  | Determines the vertical alignment of the content
| `hAlign`         | String   | `undefined`  | Determines the horizontal alignment of the content
