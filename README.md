# Use typescript to write a simple sorting algorithm
In this project I am going to write a sorting algorithm which will be used to sort arrays of various elements, including a linked list, using Typescript `interface`s.

The project uses npm package `concurrently` to start `tsc` compiler in watch mode (`tsc -w`) and restart the app with `nodemon build/index.js` every time that a change occurs.

## Type guards

If we had a union type such as `number[] | string` Typescript would have allowed us to read only the properties which string and array have in common.

If we want to restore  access to the properties in a union type we can use type guards.

For *number, string or boolean* we use `typeof`, for anything else we use `instanceof`

Example:

```typescript
if (this.collection instanceof Array) {
}

OR

if (typeof this.collection === 'number')
if (typeof this.collection === 'string')
if (typeof this.collection === 'boolean')
```