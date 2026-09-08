"use client";

import React, { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/* RandomizedDotsToText — inchangé : se réinitialise en points et      */
/* rejoue l'animation dès que `text` change (c'est ça qu'on exploite   */
/* pour l'effet hover/click).                                          */
/* ------------------------------------------------------------------ */
const RandomizedDotsToText = ({ text }: { text: string }) => {
  const [displayedChars, setDisplayedChars] = useState<string[]>(Array(text.length).fill("•"));

  useEffect(() => {
    setDisplayedChars(Array(text.length).fill("•"));

    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    text.split("").forEach((char, index) => {
      const delay = Math.random() * 2000; // time for delay
      const id = setTimeout(() => {
        setDisplayedChars((prev) => {
          const next = [...prev];
          next[index] = char;
          return next;
        });
      }, delay);
      timeoutIds.push(id);
    });

    return () => timeoutIds.forEach(clearTimeout);
  }, [text]);

  return <span className="randomized-text">{displayedChars.join("")}</span>;
};

/* ------------------------------------------------------------------ */
/* Utilitaires de sélection aléatoire                                  */
/* ------------------------------------------------------------------ */
function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Tire une phrase différente de la précédente (évite l'impression que
// rien ne s'est passé si le hasard retombe deux fois sur la même)
function pickRandomDifferent<T>(arr: T[], excluding: T | undefined): T {
  if (arr.length <= 1) return arr[0];
  let choice: T;
  do {
    choice = pickRandom(arr);
  } while (choice === excluding);
  return choice;
}

/* ------------------------------------------------------------------ */
/* Le pool de phrases possibles                                        */
/* ------------------------------------------------------------------ */
const SENTENCE_POOL = [
  "Welcome To flammerzdotcom.com",
  "The only one and only for the selecetd ones.",
  "You never seen so much swag in here.",
  "For the history, for the culture, now into the worldwide web.",
  "Bussin your ass like an Ukrainain warrior",
  "You are about to witness the true power of the flam",
  "Now, its time for you to wake the fuck up",
  "No matter what, trust your shit",
  "You think your dumb ? Take a look at Buch in 2001 playing golf",
  "Financial markets are crashing, Im at the swimming pool siipin a Pina Colada",
];

/* ------------------------------------------------------------------ */
/* HomePage                                                             */
/* ------------------------------------------------------------------ */
const HomePage = () => {
  // Valeur par défaut STABLE (identique serveur/client) pour éviter
  // toute erreur d'hydratation — le vrai tirage aléatoire arrive juste
  // après, dans le useEffect, une fois qu'on est bien côté client.
  const [sentence, setSentence] = useState<string>(SENTENCE_POOL[0]);

  useEffect(() => {
    setSentence(pickRandom(SENTENCE_POOL));
  }, []);

  // Hover ET clic déclenchent la même chose : dissoudre le texte
  // actuel en points, puis révéler une nouvelle phrase au hasard.
  // Comme `RandomizedDotsToText` a une clé basée sur `sentence`,
  // changer `sentence` force un remount → reset en points → reveal.
  const cycleSentence = () => {
    setSentence((current) => pickRandomDifferent(SENTENCE_POOL, current));
  };

  return (
    <div
      className="home-container"
      style={{
        fontSize: "14px",
        textAlign: "center",
        color: "#797979",
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div
        onMouseEnter={cycleSentence}
        onClick={cycleSentence}
        style={{ margin: "10px 0", cursor: "pointer", userSelect: "none" }}
      >
        {/* La clé force le remount de RandomizedDotsToText à chaque nouvelle phrase */}
        <RandomizedDotsToText key={sentence} text={sentence} />
      </div>
    </div>
  );
};

export default HomePage;