---
Title: 'Fragment'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# Fragment

Fragment let you group list of element without adding extra nodes. 

```
<html>
<div>
   <fragment>
      <div>Hello</div>
      <div>World</div>
   </fragment>
</div>
</html>
```

Fragment can be used to render the list of elements conditionally.

```
<html>
<table>
    <fragment :for(user in users)>
        <tr :if(user.isEdit)>
            <td> <input type="text" :value="user.name"/> </td>
        </tr>
        <tr :else>
            <td>{{user.name}}</td>
        </tr>
    </fragment>
</table>
</html>
```