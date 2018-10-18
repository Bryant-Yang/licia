## CN

类似 extend，但只复制自己的属性，不包括原型链上的属性。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|*src|object|源对象|
|返回值|object|目标对象|

```javascript
extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```