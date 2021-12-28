---
Title: 'Get started'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# Get Started

The `mahal` is a javascript framework for UI development. It is similar to react or vue but without virtual DOM. 

<div class="highlight">
Mahal is a hindi word which means palace. In human life - every house is a palace for the people leaving in, in the same way an UI application is important for the users and can be considered as mahal.
</div>

In this Get Started tutorial - we will learn about how we can create a simple counter app.

## Installation

**Install the mahal package via npm:**

```bash
npm i mahal
```

## Setup

```
import { Mahal } from "mahal";
import Main from "./components/main";

export const app = new Mahal(Main, document.querySelector('#app'));

```

### Components

Let's create a main component. Create a file named - `count.mahal`

```
<html>
<div>
  <div>{{count}}</div>
  <button on:click="incrementCount">Increment count</button>
</div>
</html>
<script>
import {Component,Reactive} from "mahal";
export class Main {

  @Reactive
  count = 0;

  incrementCount(){
    this.count++;
  }
}
</script>

```

 

### Some important links

- [Examples](https://github.com/ujjwalguptaofficial/mahal-examples)
