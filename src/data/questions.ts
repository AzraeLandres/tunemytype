export const questions = [
  {
    id: 1,
    title: "C'est le matin, ton humeur est plutôt…",
    options: [
      { label: "", scores: ["vibe", "focus"] },
      { label: "Electro", scores: ["drive", "vision"] },
      { label: "Rock", scores: ["chaos", "drive"] },
      { label: "Classique", scores: ["focus", "vision"] },
    ],
  },
  {
    id: 2,
    title: "Quel est ton mood de travail préféré ?",
    options: [
      { label: "Silence total", scores: ["focus", "vision"] },
      { label: "Musique d'ambiance", scores: ["vibe", "focus"] },
      { label: "Rythme énergique", scores: ["drive", "chaos"] },
      { label: "Playlist random", scores: ["chaos", "vibe"] },
    ],
  },
  {
    id: 3,
    title: "Tu préfères…",
    options: [
      { label: "Organiser ma playlist", scores: ["focus", "drive"] },
      { label: "Changer selon mon humeur", scores: ["chaos", "vibe"] },
      { label: "Découvrir des nouveautés", scores: ["vision", "chaos"] },
      { label: "Réécouter mes classiques", scores: ["focus", "vibe"] },
    ],
  },
];
