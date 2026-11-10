export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Evento Livre",
  description: "Plataforma para encontrar eventos de meu interesse no mundo todo.",
  emoji: "🌍",
  accent: "#ea580c",
  upcomingFeatures: [
    {
      title: "Interest profile",
      description:
        "Pick the topics you care about, like music, tech or sports, to personalize your events.",
    },
    {
      title: "Search events by city",
      description: "Find upcoming events in any city or country in the world.",
    },
    {
      title: "World events map",
      description: "See events as pins on an interactive world map.",
    },
    {
      title: "Date range filter",
      description: "Show only the events happening in the dates you choose.",
    },
    {
      title: "Save favorite events",
      description: "Bookmark events and find them later in a list on your dashboard.",
    },
  ] satisfies Feature[],
};
