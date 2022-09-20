---
Title: 'Get started'
Keywords: 'get started, mahal'
Description: 'Get started with mahal'
---

# Get Started

<iframe width="100%" height="443" src="https://www.youtube.com/embed/6S9iMpv57Bg?list=PLdsO1qVTxvBVCBkNR-stLZGhEtCRfJQhh" title="Mahal.js Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br><br>
The `mahal` is a javascript framework for UI development. It is similar to react or vue but without virtual DOM. 

<div class="highlight">
Mahal is a hindi word which means palace.
</div>
<br>


**In this Get Started tutorial - we will learn about how we can create a simple counter app.**

You can download the code of this tutorial from - [https://github.com/ujjwalguptaofficial/mahal-examples/count](https://github.com/ujjwalguptaofficial/mahal-examples/tree/main/count)

## Setup

mahal provides [**mahal-creator**](https://github.com/ujjwalguptaofficial/mahal-creator) for initializing the project and help you with the development.

Let's initiate a new project

```bash
npx @mahaljs/creator init
```

once the project is successfully initiated, run these command -

```
cd <project name>
npm run dev
```

this wil start the development server 

### Component

A Component is reusable piece of UI code and acts as buliding block for your app. A single component contains - 

1. HTML - html code to represent UI.
2. Script - javascript code for handling logic
3. Style - css code for styling the UI.

<br>
Let's create a component for our counter app. Create a file - `counter.mahal`

```
<html>

<div>
  <div>{{count}}</div>
  <button on:click="incrementCount">Increment count</button>
</div>

</html>

<script>
import { Component, reactive } from "mahal";
export default class extends Component{

  @reactive
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
3. It uses `reactive` decorator which makes the `count` variable reactive. It means if you will change the value of `count` - automatically it will be updated in UI.

<br>
Let's use this `counter` component now. Open `app.mahal` and add this component as children.

```
<html>

<div>
  <Count />
</div>

</html>

<script>
import { Component, reactive, children } from "mahal";
import Count from "@/components/count.mahal";

@children({
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
