import { createContext, useState } from "react";
import PropTypes from "prop-types";
import RedDeadPath from '/images/games/red dead2.webp'
import LastOfUsPath from "/images/games/last-of-us.jfif"
import dota2Path from "/images/games/dota-2.jpg"
import assassinCreedPath from  "/images/games/Assassins-Creed.jpg"
import residentEvil4Path from "/images/games/resident-evil-4.jpg"
import witcher3Path from "/images/games/witcher-3.jpg"
import eldenRingPath from "/images/games/elden-ring.jfif"
import elderScrollsPath from "/images/games/elder-scrolls.jfif"
import monsetHunterPath from "/images/games/monster-hunter.jfif"
import southOfMidNight from "/images/games/south-of-midnight.jfif"
import godOfWarRagnarok from "/images/games/ragnarok.jfif"
import gtaVPath from "/images/games/gta-v.jfif"
import darkAgesPath from "/images/games/doom.jpg"
import assasinsCreedShadowPath from "/images/games/Assassins-Creed-shadows.jfif"
import hitman3Path from "/images/games/hitman-3.jfif"
import spiderMan2Path from  "/images/slider-games/spider-man.webp"
import horizonForbiddenPath from "/images/games/horizon-forbidden.jfif"
import granTurismoPath from "/images/games/gran-turismo.jfif"
import bloodBornPath from "/images/games/Bloodborne.jfif"
import uncharted4Path from "/images/games/uncharted-4.jfif"
import theLastGuardianPath from "/images/games/last-guardian.jfif"
import ghostOfTsushimaPath from "/images/games/ghost-of-tsushima.jfif"
import deathStrandingPath from "/images/games/death-stranding.jpg"
import demonsSoulsRemakePath from "/images/games/demons-souls.jfif"
import cyberpankPath from "/images/games/cyberpunk-2077.jfif"
import baldursGatePath from "/images/games/baldur's-gate.jfif"
import hades2Path from "/images/games/hades-2.jfif"
import starfild2Path from "/images/games/starfield.jfif"
import sekiroPath from "/images/games/sekiro.jfif"
import controlPath from "/images/games/control.jfif"
import halfLifePath from "/images/games/half-life.jfif"
import hollowKnightPath from "/images/games/silksong.jfif"
import alanWaks2Path from "/images/games/alan-wake-2.jfif"
import fablePath from "/images/games/fable.jfif"
import avowedPath from "/images/games/avowed.jfif"
import perfectDarkPath from "/images/games/perfect-dark.jfif"
import forzaHorizonPath from "/images/games/Forza.webp"
import gears5Path from "/images/games/Gears-5.jfif"
import haloInfinitePath from "/images/games/halo-infinite.jfif"
import stateOfDecay3Path from "/images/games/state-of-decay-3.jfif"


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
      path: RedDeadPath,
    },
    {
      id: 2,
      name: "Last of us",
      price: 70000,
      discount: 20,
      category: "PlayStation",
      path: LastOfUsPath,
    },
    {
      id: 3,
      name: "dota 2",
      price: 90000,
      discount: 0,
      category: "Steam",
      path: dota2Path,
    },
    {
      id: 4,
      name: "Assassin Creed",
      price: 120000,
      discount: 10,
      category: "Steam",
      path: assassinCreedPath,
    },
    {
      id: 5,
      name: "Resident Evil 4",
      price: 140000,
      discount: 20,
      category: "Steam",
      path: residentEvil4Path,
    },
    {
      id: 6,
      name: "The Witcher Wild Hunt",
      price: 150000,
      discount: 15,
      category: "Steam",
      path: witcher3Path,
    },
    {
      id: 7,
      name: "Elden Ring: Nightreign",
      price: 300000,
      discount: 20,
      category: "Xbox",
      path: eldenRingPath,
    },
    {
      id: 8,
      name: "The Elder Scrolls IV: Oblivion Remastered",
      price: 400000,
      discount: 30,
      category: "Xbox",
      path: elderScrollsPath,
    },
    {
      id: 9,
      name: "Monster Hunter Wilds",
      price: 200000,
      discount: 10,
      category: "Xbox",
      path: monsetHunterPath,
    },
    {
      id: 10,
      name: "South of Midnight",
      price: 150000,
      discount: 5,
      category: "Xbox",
      path: southOfMidNight,
    },
    {
      id: 11,
      name: "God of war Ragnarok",
      price: 230000,
      discount: 5,
      category: "Steam",
      path: godOfWarRagnarok,
    },
    {
      id: 12,
      name: "GTA V",
      price: 500000,
      discount: 10,
      category: "PlayStation",
      path: gtaVPath,
    },
    {
      id: 13,
      name: "Doom: The Dark Ages",
      price: 350000,
      discount: 0,
      category: "Steam",
      path: darkAgesPath,
    },
    {
      id: 14,
      name: "Assassin’s Creed Shadows",
      price: 150000,
      discount: 10,
      category: "Steam",
      path: assasinsCreedShadowPath,
    },
    {
      id: 15,
      name: "Hitman 3",
      price: 200000,
      discount: 10,
      category: "Steam",
      path: hitman3Path,
    },

    // 🎮 جدید - PlayStation
    {
      id: 16,
      name: "Spider-Man 2",
      price: 300000,
      discount: 10,
      category: "PlayStation",
      path: spiderMan2Path,
    },
    {
      id: 17,
      name: "Horizon Forbidden West",
      price: 280000,
      discount: 15,
      category: "PlayStation",
      path: horizonForbiddenPath
    },
    {
      id: 18,
      name: "Gran Turismo 7",
      price: 260000,
      discount: 5,
      category: "PlayStation",
      path: granTurismoPath,
    },
    {
      id: 19,
      name: "Bloodborne",
      price: 150000,
      discount: 20,
      category: "PlayStation",
      path: bloodBornPath,
    },
    {
      id: 20,
      name: "Uncharted 4",
      price: 120000,
      discount: 15,
      category: "PlayStation",
      path: uncharted4Path,
    },
    {
      id: 21,
      name: "The Last Guardian",
      price: 100000,
      discount: 5,
      category: "PlayStation",
      path: theLastGuardianPath,
    },
    {
      id: 22,
      name: "Ghost of Tsushima",
      price: 270000,
      discount: 10,
      category: "PlayStation",
      path: ghostOfTsushimaPath,
    },
    {
      id: 23,
      name: "Death Stranding",
      price: 200000,
      discount: 20,
      category: "PlayStation",
      path: deathStrandingPath,
    },
    {
      id: 24,
      name: "Demon's Souls Remake",
      price: 310000,
      discount: 10,
      category: "PlayStation",
      path: demonsSoulsRemakePath,
    },

    // 🎮 جدید - Steam
    {
      id: 25,
      name: "Cyberpunk 2077",
      price: 300000,
      discount: 15,
      category: "Steam",
      path: cyberpankPath,
    },
    {
      id: 26,
      name: "Baldur's Gate 3",
      price: 350000,
      discount: 10,
      category: "Steam",
      path: baldursGatePath,
    },
    {
      id: 27,
      name: "Hades II",
      price: 180000,
      discount: 5,
      category: "Steam",
      path: hades2Path,
    },
    {
      id: 28,
      name: "Starfield",
      price: 400000,
      discount: 10,
      category: "Steam",
      path: starfild2Path,
    },
    {
      id: 29,
      name: "Sekiro: Shadows Die Twice",
      price: 200000,
      discount: 15,
      category: "Steam",
      path: sekiroPath,
    },
    {
      id: 30,
      name: "Control",
      price: 150000,
      discount: 20,
      category: "Steam",
      path: controlPath,
    },
    {
      id: 31,
      name: "Half-Life Alyx",
      price: 250000,
      discount: 10,
      category: "Steam",
      path: halfLifePath,
    },
    {
      id: 32,
      name: "Hollow Knight Silksong",
      price: 140000,
      discount: 5,
      category: "Steam",
      path: hollowKnightPath,
    },
    {
      id: 33,
      name: "Alan Wake 2",
      price: 320000,
      discount: 15,
      category: "Steam",
      path: alanWaks2Path,
    },

    // 🎮 جدید - Xbox
    {
      id: 34,
      name: "Fable",
      price: 300000,
      discount: 10,
      category: "Xbox",
      path: fablePath,
    },
    {
      id: 35,
      name: "Avowed",
      price: 280000,
      discount: 15,
      category: "Xbox",
      path: avowedPath,
    },
    {
      id: 36,
      name: "Perfect Dark",
      price: 260000,
      discount: 5,
      category: "Xbox",
      path: perfectDarkPath,
    },
    {
      id: 37,
      name: "Forza Horizon 5",
      price: 320000,
      discount: 10,
      category: "Xbox",
      path: forzaHorizonPath,
    },
    {
      id: 38,
      name: "Gears 5",
      price: 200000,
      discount: 20,
      category: "Xbox",
      path: gears5Path,
    },
    {
      id: 39,
      name: "Halo Infinite",
      price: 250000,
      discount: 15,
      category: "Xbox",
      path: haloInfinitePath,
    },
    {
      id: 40,
      name: "State of Decay 3",
      price: 280000,
      discount: 10,
      category: "Xbox",
      path: stateOfDecay3Path,
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
