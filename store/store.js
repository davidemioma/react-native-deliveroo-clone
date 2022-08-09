import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart-slice";
import RestaurantSlice from "./restaurant-slice";

const store = configureStore({
  reducer: { cart: CartSlice.reducer, restaurant: RestaurantSlice.reducer },
});

export const { addToCart, removeFromCart, emptyCart } = CartSlice.actions;

export const { setRestaurant } = RestaurantSlice.actions;

export default store;
