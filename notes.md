- Almost always put the script tag just before the closing body tag.

```html
<script>
 console.log("hey");
</script>
```

```javascript
<script scr="./some.js"></script>
```

```javascript
<script scr="./some.js">
  console.log('Hey'); //will not work
</script>
```

- `type` in script tag not necessary unless we're using modules
- cannot self close script tag