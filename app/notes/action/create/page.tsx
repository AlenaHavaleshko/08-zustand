import CreateNote from "@/components/CreateNote/CreateNote";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoteHub App",
  description: "NoteHub is a modern web app to take, organize, and manage your notes with ease.",
  openGraph: {
      title: "NoteHub App",
      description: "NoteHub is a modern web app to take, organize, and manage your notes with ease.",
      url: "https://notehub.com",
      siteName: "NoteHub",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
}

export default function CreatePage() {

 
  return <CreateNote />;
}