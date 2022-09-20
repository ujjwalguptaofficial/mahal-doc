---
Title: 'Watch'
Keywords: 'watch, unwatch, state, mahal'
Description: 'watch is a method of component, which allows to watch a state change.'
---

# watch

`watch` is a method of component, which allows to watch a state change. It emits newvalue and oldValue.

```
import { Component } from "mahal"

export default class MainComponent extends Component {
    name = "ujjwal gupta"

    onInit(){
        this.watch('name', (newValue, oldValue)=>{

        })
    }
}
```

Alternatively, you can also use `Watch` decorator from [mahaljs-util](https://github.com/ujjwalguptaofficial/mahaljs-util).

```
import { Component } from "mahal"
import { watch } from "@mahaljs/util"

export default class MainComponent extends Component {
    name = "ujjwal gupta"

    @watch('name')
    onNameChange(newValue, oldValue){
         
    }
}
```

## unwatch

`unwatch` allows you to remove watch or unsubscibe to watch. You need to provide the `state` and same `event listener` which was used to watch the state.

```
import { Component } from "mahal"

export default class MainComponent extends Component {
    name = "ujjwal gupta"

    onInit(){
        this.watch('name', this.onNameChange)
    }

    onNameChange(newValue, oldValue){
         
    }


    unWatchName(){
        this.unwatch('name',this.onNameChange)
    }
}
```