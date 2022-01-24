---
Title: 'Asynchronous Component'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# Asynchronous Component

Component can be loaded asynchronously which will allows you to do **code splitting**.

<div class="highlight">
Loading a component asynchronously will load the component in run time, so not being part of your parent component script bundle. This reduce your bundle size.
</div>
<br>

You can use `import` method to load the component.

```
<html>
<div>
    <Btn>Hello World</Btn>
</div>
</html>
<script>
import { Component, Children, Reactive } from "mahal"

@Children({
    Btn: import('./standard_button.mahal')
})
export class MyComponent extends Component {


}
</script>
```

You can