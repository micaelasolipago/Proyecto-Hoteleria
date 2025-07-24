import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";

export const meta: MetaFunction = () => [
  { title: "Argenway | Proyectos Memorables" },
  { name: "description", content: "Somos desarrolladores y gerenciadores hotelero-inmobiliarios. Creamos proyectos memorables con estándares internacionales." },
  { name: "keywords", content: "inversiones inmobiliarias, hoteles Hilton, desarrollos hoteleros, Argenway, Bariloche, Rosario" },
  { property: "og:title", content: "Argenway | Proyectos Memorables" },
  { property: "og:description", content: "Desarrolladores y gerenciadores hotelero-inmobiliarios con proyectos de la cadena Hilton" },
  { property: "og:type", content: "website" },
];

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-inter antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
