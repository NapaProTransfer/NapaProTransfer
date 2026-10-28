import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/site";
import { copy } from "@/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: copy.en.metaTitle },
      { name: "description", content: copy.en.metaDesc },
    ],
  }),
  component: Site,
});
