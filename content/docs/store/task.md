---
Title: 'Store Mutation'
Keywords: 'mahal, store, mutation'
Description: 'The Task decorator can be used to map the store task.'
---

# Task

The `task` decorator can be used to map the store task.

```
<html>
<div>
	<input type="text" :value="name" @input="onNameInput" />
    <div>{{name}}</div>
    <button @click="onSubmit">Submit</button>
</div>
</html>

<script>
import { Component } from "mahal";
import { state, mutation, task } from "@mahaljs/store";

export default class extends Component {

    // map with `name` state
    @state('name') name;

    @mutation('name') setName;

    @task('saveInfo') saveData;

    //map with task login of room account
    @task('login','account') login;

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