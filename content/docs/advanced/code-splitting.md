---
Title: 'Asynchronous Component'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# Code Splitting

Code splitting allows you to remove a particular piece of code or component into seperate bundle out of main bundle. This increase your app load time as your bundle will be loaded later once the main bundle is loaded.

<div class="highlight">
Loading a component asynchronously will load the component in run time, so not being part of your parent component script bundle. This reduce your bundle size.
</div>
<br>

You can use `import` method to split your component.

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

## Lazy load component

Lazy loading is a process where your code will be loaded only when required. The same can be done for our components.

Imagine if a component is not used yet, why it should be loaded. It might be that for some cases - user is not going to ever use the UI.

e.g - Consider there is a profile component in your app but user most of the time spends on dashboard. So we can lazy load the profile component meaning load it when needed.

The framework provides `lazyComponent` method to convert a component into lazy.

```
<html>
<div>
    <Btn>Hello World</Btn>
</div>
</html>
<script>
import { Component, Children, Reactive, lazyComponent } from "mahal"

@Children({
    Btn: lazyComponent( ()=> import('./standard_button.mahal') )
})
export class MyComponent extends Component {


}
</script>
```