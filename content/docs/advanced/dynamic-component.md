---
Title: 'Dynamic Component'
Keywords: 'Dynamic, component , in-place, mahal'
Description: 'Mahal provides a special component **in-place** which can be used for rendering component dynamically'
---

# Dynamic Component

Mahal provides a special component **in-place** which can be used for rendering component dynamically.

```
<html>
<div>
    <button @click="changeComponent">Change Tab</button>
    <in-place :of="compName" />
</div>
</html>
<script>
import { Component, children, reactive } from "mahal"
import Comp1 from "comp1.mahal"
import Comp2 from "comp2.mahal"

@children({
    Comp1, Comp2
})
export class MyComponent extends Component {

    @reactive
    compName = 'Comp1'

    changeComponent(){
        this.compName = 'Comp2'
    }

}
</script>
```

## Example

One of common use case of dynamic component is tab implementation.

Let's say we have two tabs - `Tab1`, `Tab2` and we want to render related component `Tab1Data`, `Tab2Data` based on which tab is active.

```
<html>
<div>
   <div class="tabs">
        <div class="tabs__item" :for(tab in tabs) @click="changeTab(tab)">
          {{tab}}
        </div>
   </div>
   <div class="tabs-content">
        <in-place :of="activeTab" />
   </div>
</div>
</html>
<script>
import { Component, children, reactive } from "mahal"
import Tab1Data from "comp1.mahal"
import Tab2Data from "comp2.mahal"

@children({
    Tab1Data, Tab2Data
})
export class MyComponent extends Component {

    tabs = ['tab1', 'tab2'];

    tabCompList = ['Tab1Data', 'Tab2Data'];

    @reactive
    activeTab='';

    onInit(){
        this.activeTab = this.tabs[0]
    }

    changeTab(tab){
        switch(tab){
            case "tab1":
                this.activeTab = this.tabCompList[0]; break;
            case "tab2":
                this.activeTab = this.tabCompList[1]; break;
        }
    }

}
</script>
```