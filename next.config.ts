import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contacto",
        destination: "https://wa.me/573228948551",
        permanent: true,
      },
      {
        source: "/practica/asesoramiento-estrategico",
        destination: "/practica",
        permanent: true,
      },
      {
        source: "/equipo/camila-restrepo",
        destination: "/equipo",
        permanent: true,
      },
      {
        source: "/equipo/andres-mejia",
        destination: "/equipo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
