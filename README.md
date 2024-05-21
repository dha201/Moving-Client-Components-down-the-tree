# Instructions for the Problem

You get the following error on the right hand side:

```
You're importing a component that needs createContext. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
Learn more: https://nextjs.org/docs/getting-started/react-essentials
```

This is because we are not allowed to createContext inside a Server Component which in this case is app/layout.tsx.

- Refactor the app in a way that this error is resolved and we can access the context value.
- Dark Mode App is able to change the mode once clicked on the switch.
