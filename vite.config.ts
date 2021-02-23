import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  name: "MoveAPP",
  short_name: "MOVE",
  start_url: ".",
  display: "standalone",
  background_color: "#676767",
  description: "Aplicacion del gimnasio MOVE.",
  icons: [
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "57x57",
      href: "/assets/favicon/apple-touch-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "114x114",
      href: "/assets/favicon/apple-touch-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "72x72",
      href: "/assets/favicon/apple-touch-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "144x144",
      href: "/assets/favicon/apple-touch-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "60x60",
      href: "/assets/favicon/apple-touch-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "120x120",
      href: "/assets/favicon/apple-touch-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "76x76",
      href: "/assets/favicon/apple-touch-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "152x152",
      href: "/assets/favicon/apple-touch-icon-152x152.png",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/assets/favicon/favicon-196x196.png",
      sizes: "196x196",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/assets/favicon/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/assets/favicon/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/assets/favicon/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/assets/favicon/favicon-128.png",
      sizes: "128x128",
    },
  ],
};

const workbox = {
  swDest: "/sw.js",
  globDirectory: ".",
  globPatterns: "**/*.{js,ts,tsx,css,html,png}",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      outDir: "dist",
      srcDir: "src",
      manifest: manifest,
      workbox: workbox,
    }),
  ],
});
