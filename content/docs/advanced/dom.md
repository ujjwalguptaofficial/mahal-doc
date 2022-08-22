---
Title: 'Dom'
Keywords: 'dom, ref, find, findAll, mahal'
Description: 'The component DOM is available at component `element` property.'
---

# DOM

The component DOM is available at component `element` property. This allows you to view the DOM and also manipulate it when required in edge cases.

**Note:-** It is not advisable to manipulate element directly unless not possible to achieve using the declarative HTML. Manipulating element directly might have some unknown effect.

```
<html>
<div>
   Hello
</div>
</html>
<script>
import { Component } from "mahal"
export class MyComponent extends Component {

   onInit(){
       console.log('element dom', this.element);
   }

}
</script>
```

## ref

`ref` is a directive which allows you to store a DOM element in a variable. This is handy in case when you want to interact with a HTML node.

```
<html>
<div>
   <div :ref(helloDiv)>Hello</div>
</div>
</html>
<script>
import { Component } from "mahal"
export class MyComponent extends Component {

   onInit(){
       this.on("mount", this.mounted);
   }

   mounted(){
     const divEl = this.helloDiv;
   }

}
</script>
```

## find

`find` method can be used for querying a node inside the current component. It is similar to `querySelector`.

```
<html>
<div>
   <div class='hello'>Hello</div>
</div>
</html>
<script>
import { Component } from "mahal"
export class MyComponent extends Component {

   onInit(){
       const el = this.find('.hello');
   }

}
</script>
```

## findAll

`findAll` method can be used for querying multiple node inside the current component. It is similar to `querySelectorAll`.

```
<html>
<div>
   <div class='hello'>Hello</div>
   <div class='hello'>World</div>
</div>
</html>
<script>
import { Component } from "mahal"
export class MyComponent extends Component {

   onInit(){
       const els = this.findAll('.hello');
   }

}
</script>
```
