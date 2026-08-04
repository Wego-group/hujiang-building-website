import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Megasteel Industrial Building Solutions",
    short_name: "Megasteel",
    description: "Integrated industrial steel building design, fabrication and construction solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#a8c900",
  };
}
