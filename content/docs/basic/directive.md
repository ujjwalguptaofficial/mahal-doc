---
Title: 'Directive'
Keywords: 'mahal'
Description: 'Directive are reusable method which can be attached on element for low level access to element.'
---

# Directive

Directive are reusable method which can be attached on element for low level access to element. Similar to component - they have lifecycle. 

The `model`, `class`, `html` are examples of directive.

A directive is called before the target element is rendered. The directive has access to element and parameter passed to it. There are three lifecycle for directive - 

1. inserted - called when target element is inserted into the DOM.
2. valueUpdated - called when binded parameter value is changed
3. destroyed - called when target element is removed from DOM.

## Examples

**Example1 - Let's create a simple name directive which will set the `data-name` on the target element.**

```
<html>
<div>
  <div id="el3" :name>Hey</div>
  <div id="el1" :name('ujjwal') #fu>Hey</div>
  <div id="el2" :name(name)>Hey</div>
</div>
</html>
<script>
import {Component, Reactive, Directive } from "mahal"

export default class extends Component {

    @Reactive name = 'hello';

    @Directive('name')
    nameDirective(el, binding) {
        el.setAttribute('data-name', binding.value || 'SUPER MAN');
    }
}
</script>
```

The above directive just use the `element` to set attribute on the target element. It doesn't use any life cycle.


**Example2 - Let's create a highlight directive which will highlight the target element.**

```
<html>
<div>
  <div id="el4" :highlight>Hey</div>
  <div id="el5" :highlight('grey')>Hey</div>
  <div id="el6" :highlight('blue','red')>Hey</div>
  <div #if(el7) id="el7" :highlight(backgroundColor , 'yellow')>Hey</div>
  <div  id="el8" :highlight(backgroundColor , color )>Hey</div>
</div>
</html>
<script>
import {Component, Reactive, Directive } from "mahal"

export default class extends Component {


    @Reactive
    backgroundColor = 'red';

    @Reactive
    color = 'blue';

    @Reactive
    el7 = true;


    @Directive('highlight')
    highlightDirective(el, binding, component) {
        var isDirectiveDestoyedCalled=false;
        function handle() {
            // when there are multiple argument passed, params becomes array otherwise basic type.

            if (binding.params.length > 1) {
                el.style.backgroundColor = binding.value[0];
                el.style.color = binding.value[1];
            }
            else {
                el.style.backgroundColor = binding.value || 'yellow';
                el.style.color = 'black';
            }
        }
        
        handle();

        return {
            inserted:()=>{
                console.log('element is inserted');
            },
            valueUpdated: handle,
            destroyed: () => {
                isDirectiveDestoyedCalled = true;
            }
        }
    }

    
}
</script>
```


