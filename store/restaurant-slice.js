import { createSlice } from "@reduxjs/toolkit";

const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurant: {},
  },
  reducers: {
    setRestaurant(state, action) {
      state.restaurant = action.payload;
    },
  },
});

export const restaurantSelector = (state) => state.restaurant.restaurant;

export default RestaurantSlice;
