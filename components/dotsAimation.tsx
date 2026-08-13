"use client";
import React, { useState, useEffect } from 'react';

const RandomizedDotsToText = ({ text }) => {
  // État pour stocker l'affichage actuel (points ou lettres)
  const [displayedChars, setDisplayedChars] = useState(Array(text.length).fill('•'));

  useEffect(() => {
    const intervalIds = [];
    
    // Pour chaque caractère dans le texte
    text.split('').forEach((char, index) => {
      // Générer un délai aléatoire entre 0 et 2000ms (2 secondes)
      const delay = Math.random() * 3000;
      
      // Remplacer le point par la lettre après le délai
      const intervalId = setTimeout(() => {
        setDisplayedChars((prev) => {
          const newChars = [...prev];
          newChars[index] = char;
          return newChars;
        });
      }, delay);
      
      intervalIds.push(intervalId);
    });

    // Nettoyer les timeouts lors du démontage du composant
    return () => intervalIds.forEach(clearTimeout);
  }, [text]);

  return <span className="randomized-text">{displayedChars.join('')}</span>;
};

// Exemple d'utilisation dans une page
const HomePage = () => {
  const sentences = [
    "Welcome To",
    "flammerzdotcom.com",
  ];

  return (
    <div className="home-container" style={{ fontSize: '24px', textAlign: 'center', marginTop: '50px', color:"#b6b4b4" }}>
      {sentences.map((sentence, index) => (
        <div key={index} style={{ margin: '10px 0' }}>
          <RandomizedDotsToText text={sentence} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;