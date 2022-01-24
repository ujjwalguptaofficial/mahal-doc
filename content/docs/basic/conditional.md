---
Title: 'Component'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# Conditional

## if

The directive `if` is used to render an element conditionally. The element will be rendered only when the expression is truthy.

```
<html>
    <div :if(flag)>Marvel</div>
</html>
<script>
import {Component, Reactive } from "mahal"

export default class NameComponent extends Component {

    @Reactive
    flag=true;
}
</script>
```

## else

The directive `else` block can be used to indicate an else condition for `if`.

```
<html>
    <div :if(flag)>Marvel</div>
    <div :else>DC</div>
</html>
<script>
import {Component, Reactive } from "mahal"

export default class NameComponent extends Component {

    @Reactive
    flag=true;
}
</script>
```

## else-if

else-if serves as "else-if" block for "if" condition.


```
<html>
    <div :if(marvel)>Marvel</div>
    <div :else-if(dc)>DC</div>
    <div :else>Cartoon network</div>
</html>
<script>
import {Component, Reactive } from "mahal"

export default class NameComponent extends Component {

    @Reactive
    marvel=false;

    @Reactive
    dc = true

}
</script>
```