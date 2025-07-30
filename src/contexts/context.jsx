import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MyContext = createContext(null);

export default function ContextProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileMenus, setShowMobileMenus] = useState(false);
  const [products] = useState([
    {
      id: 1,
      name: "Red Dead Redemption 2",
      price: 110000,
      discount: 10,
      category: "PlayStation",
      path: "/images/games/red dead2.webp",
    },
    {
      id: 2,
      name: "Last of us",
      price: 70000,
      discount: 20,
      category: "PlayStation",
      path: "/images/games/last-of-us.jfif",
    },
    {
      id: 3,
      name: "dota 2",
      price: 90000,
      discount: 0,
      category: "Steam",
      path: "/images/games/dota-2.jpg",
    },
    {
      id: 4,
      name: "Assassin Creed",
      price: 120000,
      discount: 10,
      category: "Steam",
      path: "/images/games/Assassins-Creed.jpg",
    },
    {
      id: 5,
      name: "Resident Evil 4",
      price: 140000,
      discount: 20,
      category: "Steam",
      path: "/images/games/resident-evil-4.jpg",
    },
    {
      id: 6,
      name: "The Witcher Wild Hunt",
      price: 150000,
      discount: 15,
      category: "Steam",
      path: "/images/games/witcher-3.jpg",
    },
    {
      id: 7,
      name: "Elden Ring: Nightreign",
      price: 300000,
      discount: 20,
      category: "Xbox",
      path: "/images/games/elden-ring.jfif",
    },
    {
      id: 8,
      name: "The Elder Scrolls IV: Oblivion Remastered",
      price: 400000,
      discount: 30,
      category: "Xbox",
      path: "/images/games/elder-scrolls.jfif",
    },
    {
      id: 9,
      name: "Monster Hunter Wilds",
      price: 200000,
      discount: 10,
      category: "Xbox",
      path: "/images/games/monster-hunter.jfif",
    },
    {
      id: 10,
      name: "South of Midnight",
      price: 150000,
      discount: 5,
      category: "Xbox",
      path: "/images/games/south-of-midnight.jfif",
    },
    {
      id: 11,
      name: "God of war Ragnarok",
      price: 230000,
      discount: 5,
      category: "Steam",
      path: "/images/games/ragnarok.jfif",
    },
    {
      id: 12,
      name: "GTA V",
      price: 500000,
      discount: 10,
      category: "PlayStation",
      path: "/images/games/gta-v.jfif",
    },
    {
      id: 13,
      name: "Doom: The Dark Ages",
      price: 350000,
      discount: 0,
      category: "Steam",
      path: "/images/games/doom.jpg",
    },
    {
      id: 14,
      name: "Assassin’s Creed Shadows",
      price: 150000,
      discount: 10,
      category: "Steam",
      path: "/images/games/Assassins-Creed-shadows.jfif",
    },
    {
      id: 15,
      name: "Hitman 3",
      price: 200000,
      discount: 10,
      category: "Steam",
      path: "/images/games/hitman-3.jfif",
    },

    // 🎮 جدید - PlayStation
    {
      id: 16,
      name: "Spider-Man 2",
      price: 300000,
      discount: 10,
      category: "PlayStation",
      path: "/images/slider-games/spider-man.webp",
    },
    {
      id: 17,
      name: "Horizon Forbidden West",
      price: 280000,
      discount: 15,
      category: "PlayStation",
      path: "/images/games/horizon-forbidden.jfif",
    },
    {
      id: 18,
      name: "Gran Turismo 7",
      price: 260000,
      discount: 5,
      category: "PlayStation",
      path: "/images/games/gran-turismo.jfif",
    },
    {
      id: 19,
      name: "Bloodborne",
      price: 150000,
      discount: 20,
      category: "PlayStation",
      path: "/images/games/Bloodborne.jfif",
    },
    {
      id: 20,
      name: "Uncharted 4",
      price: 120000,
      discount: 15,
      category: "PlayStation",
      path: "/images/games/uncharted-4.jfif",
    },
    {
      id: 21,
      name: "The Last Guardian",
      price: 100000,
      discount: 5,
      category: "PlayStation",
      path: "/images/games/last-guardian.jfif",
    },
    {
      id: 22,
      name: "Ghost of Tsushima",
      price: 270000,
      discount: 10,
      category: "PlayStation",
      path: "/images/games/ghost-of-tsushima.jfif",
    },
    {
      id: 23,
      name: "Death Stranding",
      price: 200000,
      discount: 20,
      category: "PlayStation",
      path: "/images/games/death-stranding.jpg",
    },
    {
      id: 24,
      name: "Demon's Souls Remake",
      price: 310000,
      discount: 10,
      category: "PlayStation",
      path: "/images/games/demons-souls.jfif",
    },

    // 🎮 جدید - Steam
    {
      id: 25,
      name: "Cyberpunk 2077",
      price: 300000,
      discount: 15,
      category: "Steam",
      path: "/images/games/cyberpunk-2077.jfif",
    },
    {
      id: 26,
      name: "Baldur's Gate 3",
      price: 350000,
      discount: 10,
      category: "Steam",
      path: "/images/games/baldur's-gate.jfif",
    },
    {
      id: 27,
      name: "Hades II",
      price: 180000,
      discount: 5,
      category: "Steam",
      path: "/images/games/hades-2.jfif",
    },
    {
      id: 28,
      name: "Starfield",
      price: 400000,
      discount: 10,
      category: "Steam",
      path: "/images/games/starfield.jfif",
    },
    {
      id: 29,
      name: "Sekiro: Shadows Die Twice",
      price: 200000,
      discount: 15,
      category: "Steam",
      path: "/images/games/sekiro.jfif",
    },
    {
      id: 30,
      name: "Control",
      price: 150000,
      discount: 20,
      category: "Steam",
      path: "/images/games/control.jfif",
    },
    {
      id: 31,
      name: "Half-Life Alyx",
      price: 250000,
      discount: 10,
      category: "Steam",
      path: "/images/games/half-life.jfif",
    },
    {
      id: 32,
      name: "Hollow Knight Silksong",
      price: 140000,
      discount: 5,
      category: "Steam",
      path: "/images/games/silksong.jfif",
    },
    {
      id: 33,
      name: "Alan Wake 2",
      price: 320000,
      discount: 15,
      category: "Steam",
      path: "/images/games/alan-wake-2.jfif",
    },

    // 🎮 جدید - Xbox
    {
      id: 34,
      name: "Fable",
      price: 300000,
      discount: 10,
      category: "Xbox",
      path: "/images/games/fable.jfif",
    },
    {
      id: 35,
      name: "Avowed",
      price: 280000,
      discount: 15,
      category: "Xbox",
      path: "/images/games/avowed.jfif",
    },
    {
      id: 36,
      name: "Perfect Dark",
      price: 260000,
      discount: 5,
      category: "Xbox",
      path: "/images/games/perfect-dark.jfif",
    },
    {
      id: 37,
      name: "Forza Horizon 5",
      price: 320000,
      discount: 10,
      category: "Xbox",
      path: "/images/games/Forza.webp",
    },
    {
      id: 38,
      name: "Gears 5",
      price: 200000,
      discount: 20,
      category: "Xbox",
      path: "/images/games/Gears-5.jfif",
    },
    {
      id: 39,
      name: "Halo Infinite",
      price: 250000,
      discount: 15,
      category: "Xbox",
      path: "/images/games/halo-infinite.jfif",
    },
    {
      id: 40,
      name: "State of Decay 3",
      price: 280000,
      discount: 10,
      category: "Xbox",
      path: "/images/games/state-of-decay-3.jfif",
    },
  ]);

  const handleShowSidebar = () => {
    setShowSidebar(true);
  };

  const handleHideSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <MyContext.Provider
      value={{
        products,
        showSidebar,
        handleShowSidebar,
        handleHideSidebar,
        showMobileMenus,
        setShowMobileMenus,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
