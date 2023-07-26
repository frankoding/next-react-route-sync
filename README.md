# useManualRouteChange

The `useManualRouteChange` hook is a temporary workaround designed to maintain URL path consistency between Next.js and React Router during the migration process from React (using `react-router-dom`) to Next.js. This hook allows you to test the migration progress even before it's fully completed.

## Installation

You can install the `useManualRouteChange` hook using either Yarn or npm:

```bash
# Using Yarn
yarn add next-react-route-sync

# Using npm
npm install next-react-route-sync
```

Alternatively, you can get the source code for the hook directly from GitHub and add it to your project.

## When to Use

Use the `useManualRouteChange` hook when you are in the process of migrating a large React app with `react-router-dom` to Next.js. It helps ensure that changes in one routing system are accurately reflected in the other, providing a seamless transition experience for users.

Please note that this hook is intended for temporary use during the migration process only. Once the migration is complete, it is recommended to remove the hook to keep the codebase clean and avoid unnecessary complexity.

## How to Use

To use the `useManualRouteChange` hook, follow these steps:

1. Install the hook using Yarn or npm as shown above.

2. Import the hook in the component where you want to ensure URL path consistency:

   ```jsx
   import useManualRouteChange from "next-react-route-sync";
   ```

3. Call the `useManualRouteChange` hook inside your component:

   ```jsx
   const MyComponent = () => {
     useManualRouteChange();

     // Your component logic here

     return <div>Your component content</div>;
   };
   ```

   TIP: Add the hook to your main/initial React router component so that any route not handled by Next.js will be manually changed.

4. That's it! The hook will handle URL path synchronization between Next.js and React Router as you navigate through your app.

## Important Notes

- This hook is for temporary use during the migration process only. Once the migration is complete, please remove the hook to keep your codebase clean and maintainable.

- The `useManualRouteChange` hook is not intended for production use. It's specifically designed to facilitate migration testing and may not cover all edge cases.

## Contributing

This hook is provided as-is, and contributions are welcome. However, please keep in mind its temporary nature and specific purpose during the migration process. If you encounter any issues or have suggestions, feel free to open an issue or submit a pull request. Your feedback will be valuable in enhancing this temporary solution.

## GitHub Repository

The source code for `useManualRouteChange` can be found on GitHub at [https://github.com/frankoding/next-react-route-sync](https://github.com/frankoding/next-react-route-sync). Feel free to explore the code and contribute to its development.
