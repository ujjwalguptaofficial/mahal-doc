---
Title: 'Store Mutation'
Keywords: 'mahal, store, mutation'
Description: 'The Task decorator can be used to map the store task.'
---

# Task

The `Task` decorator can be used to map the store task.

```
<html>
<div>
	<input type="text" :value="name" @input="onNameInput" />
    <div>{{name}}</div>
    <button @click="onSubmit">Submit</button>
</div>
</html>

<script>
import { Component, Computed, Reactive } from "mahal";
import { State, Mutation, Task } from "mahal-store";

export default class extends Component {

    // map with `name` state
    @State('name') name;

    @Mutation('name') setName;

    @Task('saveInfo') saveData;

    onNameInput(e){
        const value = e.target.value;
        this.setName(value);
    }

    onSubmit(){
        this.saveData(this.name);
    }
}
</script>

```