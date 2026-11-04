import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/site";

const title = "Taxi Ayia Napa & Protaras Transfers | Larnaca Airport";
const description =
  "Private airport transfers in Cyprus. Taxi Ayia Napa and Protaras transfers, including Larnaca Airport to Ayia Napa. Mercedes fleet. Book on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Taxi Ayia Napa, Protaras Transfers, Larnaca Airport to Ayia Napa, Private Airport Transfers Cyprus, Mercedes taxi Cyprus",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://napaprotransfer.com/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://napaprotransfer.com/fleet/seaside.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://napaprotransfer.com/fleet/seaside.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://napaprotransfer.com/" }],
  }),
  component: Site,
});
