---
Title: 'Store'
Keywords: 'mahal, store, ui, framework'
Description: 'Store are used to save state of the application which can be accessed in all components.'
---

# Store

Store are used to save state of the application which can be accessed in all components. It can be treated as data layer which contains data stored as a single unit.

Mahal provides [mahal-store](https://github.com/ujjwalguptaofficial/mahal-store) for store management. But it doesn't force you to use this, you are free to use any other store library.

👉 mahal-store uses [Godam](https://github.com/ujjwalguptaofficial/godam) for store management. mahal-store just provides you different hooks as decorator to easily integrate with mahal framework.

A simple example of store looks like this in Godam - 

```
import { Godam, Mutation,Expression, Task, computed} from "godam";

class MyState{

    constructor(){
        this.name = "Ujjwal Gupta"
    }

}


class MyMutation extends Mutation{

    name(value){
        this.state.name = value;
    }
}

class MyExpression extends Expression {

    @computed('name')
    get nameLength() {
        return this.get('name').length;
    }

    nameWithPrefix(prefix){
        return prefix + this.get('name')
    }
}

class MyTask extends Task {

    saveInfo(name){
        const savedName = this.get('name');
        if(name!=savedName){
            this.set('name', name);
        }
        const payload = {
            name : name,
            count: this.eval('nameCount')
        }
    }
}


export const myStore = new Godam({
    state : MyState,
    mutation: MyMutation,
    expression: MyExpression,
    task: MyTask
})
```

For more info, please read the godam docs - [https://github.com/ujjwalguptaofficial/godam](https://github.com/ujjwalguptaofficial/godam)

Let's use `myStore` in our mahal app.

#### Install mahal-store

```
npm i @mahaljs/store
```

#### Use mahal-store

`mahal-store` is exported as plugin. So you need to install the plugin in your app.

```
import { Mahal } from "mahal";
import Main from "./components/main.mahal";
import MahalStore from "@mahaljs/store";

// import godam instance
import { myStore } from "../store";

export const app = new Mahal(Main, '#app');

// install mahal store plugin and pass your godam instance as arguments which will be used as store
app.extend.plugin(MahalStore, myStore);

app.create();
```

Once plugin is installed, you can access the `store` variable available on the `global` prop in the component. Let's see how to use it inside component - 

```
<html>
<div>
	<div>{{name}}</div>
</div>
</html>

<script>
import { Component } from "mahal";

export default class extends Component {

    onInit(){
        this.store = this.global.store;
    }

    get name(){
         return this.store.get("name");
    }
}
</script>

```

It is recommend to create a Base class, so that `this.store` can be used without initiating this in each component - 

```
import { Component } from "mahal";

export class BaseComponent extends Component{

    get store(){
        return this.global.store;
    }
}

export default class extends BaseComponent {

    get name(){
         return this.store.get("name");
    }
}
```

Now you can extend `BaseComponent` in each component which will allow you to reuse common codes.

mahal-store provides following decorators as hooks to help you access the store in easiest way - 

* [State](/docs/store/state)
* [Mutation](/docs/store/mutation)
* [Task](/docs/store/task)
* [Expression](/docs/store/expression)
