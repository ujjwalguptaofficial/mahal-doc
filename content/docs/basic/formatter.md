---
Title: 'Formatter'
Keywords: 'formatter, component, mahal'
Description: 'Formatter can be used to convert one value to another value in UI'
---

# Formatter

A formatter is a method which can be used to format(convert one value to another value) in UI using **pipe symbol**. .

A decorator `Formatter` is used to declare a method formatter. A formatter method accepts a parameter which is converted into some other format or value.

Let's create a **upper** formatter which will convert a value into upper case.

```
<html>
    <div :data-name="name | upper">My name is {{name | upper}}</div>
</html>
<script>
import {Component, Formatter } from "mahal"
export class MyComponent extends Component {

    name = "ujjwal gupta"

    @Formatter('upper')
    toUpper(value){
        return value.toUpperCase();
    }

}
</script>
```

👉 A formatter can be used in `text binding` and `attributes`. 

## Multiple formatter

Multiple formatter can be used at a time, which will pass the value from one formatter to another in the same way as declared for use in html code.

Consider a case where a numeric value needs to be - 

1. Round off (remove decimal value)
2. Add the dollar symbol

```
<html>
    <div>Amount is {{name | round | dollar}}</div>
</html>
<script>
import {Component, Formatter } from "mahal"
export class MyComponent extends Component {

    amount = 5.12345678

    @Formatter('round')
    roundValue(value){
        return Math.round(value);
    }

    @Formatter('dollar')
    addDollarSymbol(value){
        return Math.dollar(value);
    }

}
</script>
```

## Global formatter

A formatter can be also registered globally, so that it can be used in all components. 

```
export const app = new Mahal(Main, document.querySelector('#app'));
app.extend.formatter("dollar", (value: string) => {
    return "$" + value;
});
```


 

