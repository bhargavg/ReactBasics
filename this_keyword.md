# Implicit Binding
Context = Left of dot at call time

```Javascript
var sayNameMixin = function(obj) {
    obj.sayName = function() {
        console.log(this.name);
    };
};

var foo = { name: "Foo", age: 25 };
var bar = { name: "Bar", age: 27 };

sayNameMixin(foo)
sayNameMixin(bar)

foo.sayName()
bar.sayName()
```

Another example:
```Javascript
var Person = function(name, age) {
    return {
        name: name,
        age: age,
        sayName: function() {
            console.log(this.name);
        },
        mother: {
            name: "Mother",
            age: 50,
            sayName: function() {
                console.log(this.name);
            }
        }
    };
};

var foo = Person("foo", 24);
foo.sayName();
foo.mother.sayName();
```

# Explicit Binding

## `call`
Invoke a function with a given context

```Javascript
function foo(bar, baz) {
    console.log(this.name, bar, baz);
};

var my_context = {
    "name": "Foo"
};
foo.call(my_context, "5", "3.14");
```

## `apply`
Exactly same as `call`, but, arguments are passed as array

```Javascript
function foo(bar, baz) {
    console.log(this.name, bar, baz);
};

var my_context = {
    "name": "Foo"
};
foo.apply(my_context, ["5", "3.14"]);
```

## `bind`
Returns a new function without executing

```Javascript
function foo(bar, baz) {
    console.log(this.name, bar, baz);
};

var my_context = {
    "name": "Foo"
};
var bound_function = foo.bind(my_context, "5", "3.14");
bound_function()
```

# `new` Binding
When using constructor functions, ie., `new FUNCTION_NAME`, `this` will be initialized to `{}`

```Javascript
// Define a constructor function
var Animal = function(color, name, type) {
    // When invoked, `this` will be initialized to {}
    this.color = color;
    this.name = name;
    this.type = type;
};

let zebra = new Animal("black and white", "Zorro", "Zebra");

console.log(zebra.color);
```

# `window` Binding
When there is no context, `this` referes to Window context by default

```Javascript
function foo() {
    console.log(this.bar);
}

foo();
window.bar = "3.14";
foo();
```

# Curious case of `map`
```Javascript
// Window context
[1,2,3].map(function(item){
  console.log(this)
})

// Custom context
[1,2,3].map(function(item){
  console.log(this)
}, { foo: "bar" })
```
