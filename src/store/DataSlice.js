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
        Price: 1000,
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
        Price: 2000,
        image: image3,
      },
    ],
  },
  reducers: {},
});
export const DataSliceActions = DataSlice.actions;
export default DataSlice;
