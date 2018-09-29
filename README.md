# vn-scroll
A vue scroll component based on better-scroll

vn-scroll is a vue scroll component that handles the scroll in mobile web applications.
vn-scroll is based on better-scroll, since it wraps the dom manipulations that the better-scroll should handle, it is very simple to use.

## [Try the demo]()

### How to use?
```bash
npm install vn-scroll
```

### Example

```vue
<template>
  <vn-scroll :data="data" :listenScroll="listenScroll" @scroll="scroll" :probeType="probeType"></vn-scroll>
</template>

<script>
  import VnScroll from 'vn-scroll';
  export default {
    components: { VnScroll }
  }
</script>
```
demo:



### Options
|    Property    |    Description   |   type   |	default	|
| :-----------------:  | ---------------- | :--------: | :----------: |
|   probeType       |   |Number| 1 |
|   click         |   |Boolean | true |
|   data  | data that the scroll component contains | Array | null |
|   listenScroll     |   | Boolean | false |
|   pullup     |   | Boolean | false |
|   refreshDelay     |  | Number | 20 |


### Functions
| Function Name | Description   |
| :--------:   | -----  |
|    enable    |  enable the scroll ability  |
|    disable    |  disable the scroll ability  |
|    refresh   |  refresh the scroll component |
|    scrollTo    |  scroll to the specific position in scroll component |
|    scrollToElement    |  scroll to the specific element in scroll component |
