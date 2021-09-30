## Tasks

### 1. flattenTree

Implement the `flattenTree` function in `src/task-1/task-1.ts`. `flattenTree` takes a nested object which should be flattened to a single-depth with all the keys being concatenated with a slash (/). For example:

```
{
  hello: "world",
  a: {
    b: {
      c: {
        d: "e",
      },
    },
  },
  quarks: {
    up: "down",
    charm: "strange",
    top: "bottom",
  },
}
```

would become:

```
{
  hello: "world",
  "a/b/c/d": "e",
  "quarks/up": "down",
  "quarks/charm": "strange",
  "quarks/top": "bottom",
}
```

There is a sample test in `src/task-1/task-1.test.ts` using the above example to verify your solution. Feel free to add more tests to cover any edge cases you can think of.

### 2. Transactions UI

We have bootstrapped a React/Typescript project in `src` using `create-react-app` (see `CREATE-REACT-APP.md` if you are unfamiliar with this) that we would like you use for this task.

1. Create a UI that displays transactions fetched from Fidel API (see below).
2. Add pagination using the pagination API (e.g. infinite scroll, load more button etc...)

You can add any additional dependencies you'd like to complete these tasks including a styling/CSS approach of your choice.

### Documentation

- [Documentation](https://docs.fidel.uk/transactions)
- [API Reference](https://reference.fidel.uk)
- [API pagination](https://reference.fidel.uk/reference#pagination)
  - If you are constructing the query parameter string yourself, you may need to use `encodeURIComponent` on the `start` parameter.

### API Access

Use the development stage API https://api-dev.fidel.uk/v1d/.

- _Test environment secret key:_ `sk_test_8b665908-284c-4dd1-a364-7ebc575c18f6`
- _Program ID_ to fetch the transactions from: `2314f371-39b1-4c80-8040-4144ff1bad09`

You can read more about request headers in the API Reference.
