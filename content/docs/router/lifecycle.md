---
Title: 'Router Lifecycle'
Keywords: 'router, mahal-router, lifecycle'
Description: 'mahal provides mahal-router for developing router based app.'
---

# Router Lifecycle

Different router lifecycle are - 

1. beforeEach or notFound
2. navigate
3. afterEach

<br>
All lifecycle are emitted as events, so it can be listened in **outside** as well as **inside component**.

## 1. beforeEach

beforeEach is called after route is found. It can result a boolean result or route.

* Boolean result - if it returns boolean result and if it is false then navigation is stopped.
* Route result - if it returns route result, then it is considered as replacement route and redirected to returned route.

The `beforeEach` event contains new route as argument.


```
router.on("beforeEach",(to)=>{
   console.log("beforeEach",to);
});
```

if the target route does not exist then **notFound** event is emitted

### notFound

`notFound` is called when no route is found. It is called with `to` route.

```
router.on("notFound",(to)=>{
   console.log("notFound",to);
});
```

## 2. navigate

navigate is called after beforeEach is resolved. The event indicates route is being changed. It contains the new route as arguments.

```
router.on("navigate",(to)=>{
   console.log("navigate",to);
});
```

## 3. afterEach

afterEach is called after navigate is resolved. It indicates change of route. It is called with `to` route, `from` route and `error` if any.

```
router.on("afterEach",(to, from, error)=>{
   console.log("afterEach",to, from);

   if(error){
       console.error("error", error);
   }
});
```