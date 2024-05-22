/**
Next-Themes: Dark Mode and Theme Switching in Next.js
next-themes is a popular library that simplifies the implementation of dark mode and theme switching functionality in Next.js applications. It provides a convenient way to manage theme state and allows users to switch between different themes seamlessly.

Key Features
Dark Mode Support: next-themes makes it easy to add dark mode functionality to your Next.js app by providing a ThemeProvider component that wraps your application and manages the theme state.

Theme Switching: With next-themes, you can effortlessly switch between different themes, such as light and dark modes, using the provided hooks and utilities.

Persistent Theme Preference: The library automatically saves the user's theme preference in the browser's local storage or cookies, ensuring that the selected theme persists across page reloads and visits.

Flexible Customization: next-themes allows you to customize the theme names, default theme, and the attribute used to apply the theme classes to your HTML elements.

SSR Support: The library seamlessly integrates with Next.js's server-side rendering (SSR) and provides a way to handle the initial theme on the server-side.

Easy Integration: next-themes is easy to integrate into your Next.js application. Simply wrap your pages or components with the ThemeProvider and use the provided hooks, such as useTheme, to access and modify the theme state.
 */

'use client';

import { ThemeProvider } from 'next-themes';

export default function Theme({children} : {children: React.ReactNode;}) {
    return (
        <ThemeProvider attribute="class">{children}</ThemeProvider>
    )
}
