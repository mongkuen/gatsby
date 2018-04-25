# Function Arguments

In functional programming, you want the output of a function to be the input of another. 

However because functions can return and accept many values as arguments, it's not always possible to use the output of a function directly as the input of another.

### First Some Terminology
- Unary Function: Function that only accepts 1 argument 
	- `function (arg1) { ... }`

- Binary Function: Function that only accepts 2 arguments
	- `function (arg1, arg2) { ... }`

- N-ary Function: Function that accepts a fixed N number of arguments
 	- `function (arg1, arg2, arg3) { ... }`

- Variatic Function: Function that accepts an unfixed number of arguments
	- `function (...args) { ... }`  

## Part 1: Manipulating Multiple Arguments
###Scenario
Imagine the following: 

```javascript
function getGameScores () {
	// ...fetch game scores
	return [3, 5, 12, 7]
}

function sumRecentScores (score1, score2, multiplier=1) {
	return (score1 + score2) * multiplier
}
```

Function `getGameScores` returns an array of game score integers. 

Function `sumRecentScores` takes 2 recent scores to add together, and depending on the game settings, multplies the scores by a multiplier. 

Optimally we want to take the output of `getGameScores` to feed into the input of `sumRecentScores`. We might think to do something like this: 

```javascript
sumRecentScores(...getGameScores())
```

The `...` spread operator takes the array and spreads them as arguments into `sumRecentScores`

So the above code is functionally equivalent to: 

```javascript
sumRecentScores(3, 5, 12, 7) // 96 
```

### The Problem

However there's an issue, `sumRecentScores` Wants to add the first 2 scores together, and have the third argument be a multiplier.

We've provided the first 2 scores into the function, but our third score `12` is being used as a multiplier! Our recent score now shows as being `96`, when we expected it to be `8`!

> How can we prevent the third score from being used as an argument? 

> **Create a modified `sumRecentScores` function that ignores all but the first 2 arguments**

### The Solution

We don't want to repeat and rewrite `sumRecentScores`, instead we can write a utility to return us a binary function from the 3N-ary `sumRecentScores`. 

```javascript
// binary returns a function that ignores all but the first two arguments
function binary (fn) {
	return function two (arg1, arg2) {
		return fn(arg1, arg2)
	}
}
```

The `binary` utility function takes any function as the input and outputs a function that ONLY takes 2 arguments `arg1, arg2`, and feeds them into the original function.

So we can correctly sum our game scores by doing the following: 

```javascript
// binary version of the sumRecentScores function
const binarySumRecent = binary(sumRecentScores) 

binarySumRecent(...getGameScores()) // 8

// or on a single line
binary(sumRecentScores)(...getGameScores()) // 8
```

## Part 2: Manipulating Single Argument
### Scenario

Notice the requirement to spread the game score array into the 2 arguments `binarySumRecent` needs. 

Every time we use `binarySumRecent`, you have to remember to spread out the score array, otherwise the code would fail. 

### The Problem

What if we had to calculate this sum over and over again in many places, and we do not want the code to error because we forget to use the spread operator on the score array? 

> How can we use the return array of `getGameScores()` directly as input arguments, without modifying it? 

> **Create a modified `binarySumRecent` function that spreads out the array as arguments for you**

### The Solution

We can use the same approach as before, to make a utility to return us a unary function that accepts an array, and spreads the array as arguments into our binary `binarySumRecent` function

```javascript
// spreadArgs returns a function that spreads one argument out into individual arguments
function spreadArgs (fn) {
	return function spread (args) {
		return fn(...args)
	}
}
```
The `spreadArgs` utility function takes only one argument `args`, but applies the spread operator for us, so we don't have to do it repeatedly when we use the function 

So we can correctly sum our game scores by doing the following:

```javascript
const spreadBinarySumRecent = spreadArgs(binary(sumRecentScores))

spreadBinarySumRecent(getGameScores()) //8

// or on a single line
spreadArgs(binary(sumRecentScores))(getGameScores()) // 8
```

Once you familiarize yourself with the utilities, it's easy to tell at a glance that we're doing the following things: 

1. Getting game scores via `getGameScores()`

2. Spreading game scores via `spreadArgs`


3. Only using the first two scores via `binary`

4. And summing them together via `sumRecentScores`

## Common Argument-Modifying Utilities


```javascript
// unary takes a function and returns one that ignores all but the first argument
function unary (fn) {
	return function one (arg) {
		return fn(arg)
	}
}

// binary returns a function that ignores all but the first two arguments
function binary (fn) {
	return function two (arg1, arg2) {
		return fn(arg1, arg2)
	}
}

// flip the order of first two arguments
function flip (fn) {
	return function flipped (arg1, arg2, ...args) {
		return fn(arg2, arg1, ...args)
	}
}

// reverse order of all arguments
function reverseArgs (fn) {
	return function reversed (...args) {
		return fn(...args.reverse())
	}
}

// spread/apply array as individual arguments
function spreadArgs (fn) {
	return function spread (args) {
		return fn(...args)
	}
}

// gather/unapply individual arguments into an array 
function gatherArgs (fn) {
	return function gather (...args) {
		return fn(args)
	}
}
```





