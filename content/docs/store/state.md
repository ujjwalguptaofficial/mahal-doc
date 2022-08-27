---
Title: 'Store State'
Keywords: 'mahal, store, state'
Description: 'The State decorator can be used to map the state value.'
---

# State

The `State` decorator can be used to map the state value. The mapped value is reactive which means it is automatically updated when state is mutated.

```
<html>
<div>
	<div>{{name}}</div>
</div>
</html>

<script>
import { Component, Computed, Reactive } from "mahal";
import { State} from "@mahaljs/store";

export default class extends Component {

    // map with `name` state
    @State('name') name;
}
</script>

```