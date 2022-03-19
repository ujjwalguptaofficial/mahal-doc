---
Title: 'Router'
Keywords: 'mahal, router, mahal-router'
Description: 'mahal provides mahal-router for developing router based app.'
---

# route-to

`route-to` is a component which can be used as alternative of `a` tag. It can take all route props and generate the `a` tag.

```
<html>
<div>
    <route-to name="user">
        User
    </route-to>
</div>
</html>
```

You can add your own tag inside `route-to`.

```
<html>
<div>
    <route-to name="user">
        <a>User</a>
    </route-to>
</div>
</html>
```