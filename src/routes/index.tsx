import { createFileRoute } from "@tanstack/react-router";
import SalonSite from "@/components/SalonSite";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stile & Co. — Salone di Bellezza a Roma" },
      { name: "description", content: "Stile & Co., salone di bellezza nel cuore di Roma. Taglio, colore, extension, manicure e cura ciglia. Prenota il tuo appuntamento." },
      { property: "og:title", content: "Stile & Co. — Salone di Bellezza a Roma" },
      { property: "og:description", content: "Atelier di bellezza a Roma: taglio, colore, mèches, extension, parrucche, manicure, ciglia e sopracciglia." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SalonSite />
      <Toaster position="top-center" />
    </>
  );
}
