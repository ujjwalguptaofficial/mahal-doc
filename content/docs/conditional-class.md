---
Title: 'Component'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# Conditional class

We can add classes based on some condition.

Consider a case where you have to add the `active` class if active variable is true.


```
<html>
    <div #addClass({'active':isActive})>Hello World</div>

    <div #addClass({'state-0':state===0,state-gt-10':state>10,'nested-3':nested.nested1.nested2.nested3==0})>
        Hey I am at state
    </div>

   <div #addClass('state--0','state--01') #if(state==0)>0th{{state}}</div>

</html>
<script>
import {Component, Reactive } from "mahal"

export default class NameComponent extends Component {

    @Reactive
    isActive;

    @Reactive
    nested = {
        nested1: {
            nested2: {
                nested3: 10
            }
        }
    }

    @Reactive
    state;
}
</script>
```


