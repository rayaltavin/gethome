export interface Memory {
  id: string;
  date: string;
  title: string;
  description: string;
}

export const memories: Memory[] = [
  {
    id: "relationship-start",
    date: "2024-11-23",
    title: "The Beginning",
    description: "The day we officially began our relationship.",
  },
  {
    id: "first-date",
    date: "2025-01-19",
    title: "Our First Date",
    description:
      "Our first in-person meeting was at Moon Gypsy in Senopati, Jakarta. The rest is history.",
  },
  {
    id: "last-chapter",
    date: "2026-11-02",
    title: "Our Last Chapter",
    description:
      "The day our relationship ended. What came before remains part of our story, remembered with gratitude.",
  },
];
