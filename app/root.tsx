import { cssBundleHref } from '@remix-run/css-bundle';
import clsx from 'clsx';
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from 'remix-themes';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import type {
  LinksFunction,
  LoaderFunctionArgs,
} from '@remix-run/node';

import './tailwind.css';
import { themeSessionResolver } from './session.server';

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: 'stylesheet', href: cssBundleHref }]
    : []),
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider
      specifiedTheme={data.theme}
      themeAction="/action/set-theme"
    >
      <App />
    </ThemeProvider>
  );
}

function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  // The component's JSX
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="description" content="Remix tutorial" />
        <title>Remix Dashboard</title>
        {/* Meta component for Remix-managed meta tags */}
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />

        {/* Links component for Remix-managed link tags */}
        <Links />
      </head>
      <body className="h-screen bg-background text-primary font-bold font-sans antialiased">
        <Outlet />

        {/* ScrollRestoration component manages scroll position */}
        <ScrollRestoration />
        {/* Scripts component includes necessary Remix scripts */}

        <Scripts />
      </body>
    </html>
  );
}
