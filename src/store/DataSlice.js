import { createSlice } from "@reduxjs/toolkit";
import image1 from "../asset/Images/al-1.jpg";
import image2 from "../asset/Images/al-2.jpg";
import image3 from "../asset/Images/al-3.jpg";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    items: [
      {
        Id: 1,
        Name: "Raw Almonds",
        Price: 575,
        image: image1,
      },
      {
        Id: 2,
        Name: "Raw California Almonds",
        Price: 1500,
        image: image2,
      },
      {
        Id: 3,
        Name: "Roasted Almonds with Salt",
        Price: 1200,
        image: image3,
      },
    ],
  },
  reducers: {
    HighToLow(state) {
      state.items.sort((a, b) => b.Price - a.Price);
    },
    LowToHigh(state) {
      state.items.sort((a, b) => a.Price - b.Price);
    },
  },
});

export const DataSliceActions = DataSlice.actions;
export default DataSlice;
