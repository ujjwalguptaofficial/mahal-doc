---
Title: 'Event in Component'
Keywords: 'event, output, component, mahal'
Description: 'Event allows to react and perform action when something happens'
---

# Event

Event allows to react and perform action when something happens. It can be considered as a way to pass output. 

In mahal - you can listen to an event by using `on:<eventname>` or `@<eventName>` syntax.

```
<html>
    <div>My name is {{name}}</div>
    <button on:click="changeName">change my name</button>
    <button @click="changeName">change my name</button>
</html>
<script>
import {Component, reactive } from "mahal"
export default class MainComponent extends Component {

    name = "ujjwal gupta"

    changeName(){
        this.name="DC is love."
    }
}
</script>
```

Mahal supports all html events like - `click`, `focus` etc . It internally uses `addEventListener`.

## Component event

A Component can emit an event which can be used by parent component. The event makes the component independent of its parent thus loosely coupled.

Consider a login form as child component which has - email and password field. It just takes the value and emit the value to its user (parent component). 

```
<html>
<div>
    <div>
        Email Id:- <input type="text" :value="email" on:input="onEmail">
    </div>
    <div>
        Password:- <input type="text" :value="password" on:input="onPassword">
    </div>
    <div>
        <button on:click="submit">Submit</button>
    </div>
</div>
</html>
<script>
import {Component, reactive } from "mahal"

export default class LoginComponent extends Component{

    @reactive
    email="";

    @reactive
    password="";

    onEmail(value){
        this.email = value;
    }

    onPassword(value){
        this.password = value;
    }

    submit(){
        this.emit("submit", {
            email: this.email,
            password: this.password
        })
    }
}
</script>
```

Now let's use the above component in a `MainComponent` - 

```
<html>
    <Login on:submit="onLoginSubmit" />
</html>
<script>
import {Component, children } from "mahal"
import Login from "./login.mahal";

@children({
    Login
})
export default class MainComponent extends Component {

    onLoginSubmit(value){
        console.log("data", value);
    }
}
</script>
```


