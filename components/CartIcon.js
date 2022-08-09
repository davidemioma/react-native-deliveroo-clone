import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { cartSelector, totalAmount } from "../store/cart-slice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
  const navigation = useNavigation();

  const cart = useSelector(cartSelector);

  const total = useSelector(totalAmount);

  return (
    <View className="fixed bottom-10 z-50 w-full px-4">
      <TouchableOpacity
        className="bg-[#00CCBB] rounded p-4 flex-row items-center space-x-2"
        onPress={() => navigation.navigate("Cart")}
      >
        <Text className="bg-[#01a296] px-2 text-white text-lg font-extrabold">
          {cart.length}
        </Text>

        <Text className="flex-1 text-center text-white text-lg font-extrabold">
          View Cart
        </Text>

        <Text className="text-lg text-white font-extrabold">
          ${total.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
