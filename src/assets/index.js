// 🔽 Import images first
import diningTable from "./dining_table.png";
import bookshelf from "./sheesam_bookshelf.png";
import Table from "./teak_coffee_table.png";
import wardrobe from "./Wooden_Wardrobe.png";
import bed from "./bed.png";
import chair from "./chair.png";
import shoeRack from "./shoe.png";
import tvUnit from "./tvunit.png";
import sideTable from "./stable.png";
import cabinet from "./scabinet.png";
import plates from "./plates.png";
import tray from "./tray.png";

// 🔽 Named exports (optional if you want to use them directly elsewhere too)
export {
  diningTable,
  bookshelf,
  Table,
  wardrobe,
  bed,
  chair,
  shoeRack,
  tvUnit,
  sideTable,
  cabinet,
  plates,
  tray,
};

// 🔽 Default structured item list
export const items = [
  { name: "Dining Table", image: diningTable },
  { name: "Bookshelf", image: bookshelf },
  { name: "Coffee Table", image: Table },
  { name: "Wardrobe", image: wardrobe },
  { name: "Bed", image: bed },
  { name: "Chair", image: chair },
  { name: "Shoe Rack", image: shoeRack },
  { name: "TV Unit", image: tvUnit },
  { name: "Side Table", image: sideTable },
  { name: "Cabinet", image: cabinet },
  { name: "Plates", image: plates },
  { name: "Tray", image: tray },
];
