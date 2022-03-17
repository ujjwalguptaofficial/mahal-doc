---
Title: 'Get started'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# Get Started

The `mahal` is a javascript framework for UI development. It is similar to react or vue but without virtual DOM. 

<div class="highlight">
Mahal is a hindi word which means palace.
</div>
<br>

**In this Get Started tutorial - we will learn about how we can create a simple counter app.**

You can download the code of this tutorial from - [https://github.com/ujjwalguptaofficial/mahal-examples](https://github.com/ujjwalguptaofficial/mahal-examples)

## Installation

mahal provides **mahal-creator** for initializing the project and help you with the development.

Install the mahal package via npm

```bash
npm i mahal-creator -g
```

**Note-** If the installation fails - try with sudo.

## Setup

Once `mahal-creator` is installed. Use this command to initiate the project - 

```
mahal-creator init
```

### Component

A Component is reusable piece of UI code and acts as buliding block for your app. A single component contains - 

1. HTML - html code to represent UI.
2. Script - javascript code for handling logic
3. Style - css code for styling the UI.

Let's create a component for our counter app. Create a file - `counter.mahal`

```
<html>

<div>
  <div>{{count}}</div>
  <button on:click="incrementCount">Increment count</button>
</div>

</html>

<script>
import { Component, Reactive } from "mahal";
export default class extends Component{

  @Reactive
  count = 0;

  incrementCount(){
    this.count++;
  }
}
</script>

```

The above component - 

1. Renders the `count` from the script.
2. Contains a button which will call method `incrementCount` on click.
3. It uses `Reactive` decorator which makes the `count` variable reactive. It means if you will change the value of `count` - automatically it will be updated in UI.

<br>
Let's use this `counter` component now. Open `app.mahal` and add this component as children.

```
<html>

<div>
  <Count />
</div>

</html>

<script>
import { Component, Reactive, Children } from "mahal";
import Count from "@/components/count.mahal";

@Children({
  Count
})
export default class extends Component {

   
}
</script>
```

That's it and now `Count` component will be rendered as children of `App` Component.


We hope you are able to understand this tutorial. Now let's make our `mahal (palace)` and show it to world. 

### Some important links

- [Examples](https://github.com/ujjwalguptaofficial/mahal-examples)
