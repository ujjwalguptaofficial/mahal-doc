---
Title: 'Component'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# List

## for

we can use `#for` to render the items from array.

```
<html>
<div>
    <p #for(fruit,index in fruits)>
        Fruit at index {{index}} is {{fruit}} // Fruit at index 0 is Banana
    </p>
</div>
</html>
<script>
import { Component, Computed, Reactive } from "mahal";

export default class extends Component {

   @Reactive
    fruits = ["Banana", "Orange", "Apple", "Mango"];
}
</script>
```

**for with object**

Similar to array we can loop through object property. In case of object the first argument is value and second argument is key.

```
<html>
<div>
    <p #for(value,key in fruits)>
       {{key}} is {{value}} // Banana is 5
    </p>
</div>
</html>
<script>
import { Component, Computed, Reactive } from "mahal";

export default class extends Component {

   @Reactive
   fruits = { 
       "Banana":5, "Orange":3, "Apple":2, "Mango":4
   };
}
</script>
```