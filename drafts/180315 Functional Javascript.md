# Functional Javascript

This series is written for people who can see the benefits of functional programming, but have struggled to get started.

Follow me on my journey towards understanding functional javascript.

## Function As First-Class Objects
Variables are easy to understand and use

```javascript
const specialNumber = 123
typeof specialNumber // "number"

specialNumber * 2 // 246
```
We assign `specialNumber` to the integer `123`, and we see it's of the type `number`

Javascript functions are first-class. This means they are their own type, and can be used just like any other object. Functions can be assigned to variables, placed in arrays, manipulated, and changed.

```javascript
function addOne (number) {
	return number + 1
}

typeof(addOne) // "function"

const array = [addOne, addOne, addOne] // [ƒ, ƒ, ƒ]
```

### Scenario
Imagine building a shipping calculator

```javascript
function airShipping (weight, price) {
	return weight * price
}

const domesticAirShip = airShipping

typeof domesticAirShip // "function"

domesticAirShip(3, 5) // 15
```
Above is an example of assigning the `airShipping` function to the variable `domesticAirShip`, which we can then call.

It might seem contrived, but it illustrates that functions can be assigned to variables, passed around as arguments, and manilupated just like any other type like integers, strings, objects.

Imagine that different countries had a different price multiplier to ship to. We could copy and paste the following without much thought:

```javascript
function airShipping (weight, price) {
	return weight * price
}

function airShipGermany (weight, price) {
	return weight * price * 1.2
}

function airShipItaly (weight, price) {
	return weight * price * 1.5
}
```

### The Problem
However, we can see that we've duplicated code. What if one day the calculations for `airShipping` changes, and the developer forgets to update the code for the other countries?

What if we could make a function... that made functions for us to handle shipping to Germany and Italy?

> How can we create new functions from existing functions?

> **Create a function that takes the existing function as an input argument, and returns a new function as the output**

### The Solution
Because our existing functions are first-class objects, we can pass them into a function the builds new functions for us.

```javascript
function airShipping (weight, price) {
	return weight * price
}

function shipInternational (shipFunction, multiplier) {
	return function (weight, price) {
		return shipFunction(weight, price) * multiplier
	}
}

const airShipGermany = shipInternational(airShipping, 1.2)

const airShipItaly = shipInternational(airShipping, 1.5)

airShipItaly(4, 5) // 30
```

The `shipInternational` function is takes a shipping function as the first argument, and the multiplier as the second, and returns us a function that still takes a `weight` and `price` argument, and multiplies it by the multiplier.

Notice that `shipInternational` is a function that operates on other functions. When a function accepts another function as an argument or returns a function, it is a **Higher Order Function**.

Now imagine if this shipping company now has to calculate railway shipping internationally also. Higher order functions like `shipInternational` are powerful because they let you easily compose functions together.

```javascript
function railShipping (weight, price) {
	return weight * price + 30
}

const railShipGermany = shipInternational(railShipping, 1.2)

const railShipItaly = shipInternational(railShipping, 1.5)

railShipItaly(4, 5) // 75
```

## Closures

Notice that our `shipInternational` function has



point free style
