import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { restaurantSelector } from "../store/restaurant-slice";
import { cartSelector } from "../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { XIcon } from "react-native-heroicons/solid";
import { urlFor } from "../utils/sanity";
import { totalAmount } from "../store/cart-slice";
import { removeFromCart } from "../store/store";

const CartScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const restaurant = useSelector(restaurantSelector);

  const cartitems = useSelector(cartSelector);

  const total = useSelector(totalAmount);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <View className="relative bg-white pt-12 pb-5 px-4">
          <View className="flex items-center">
            <Text className="font-extrabold text-lg">Basket</Text>

            <Text className="text-sm text-gray-400 font-bold">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            className="bg-[#00CCBB] absolute right-4 bottom-8 w-8 h-8 rounded-full flex items-center justify-center"
            onPress={() => navigation.goBack()}
          >
            <XIcon size={25} color="white" />
          </TouchableOpacity>
        </View>

        <View className="bg-white px-4 py-2 my-6 flex-row items-center space-x-2">
          <Image
            className="w-7 h-7 rounded-full p-4 bg-gray-300"
            source={{ uri: "https://links.papareact.com/wru" }}
          />

          <Text className="flex-1">Deliver's in 50-75 min</Text>

          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {cartitems.map((item, i) => (
            <View
              key={i}
              className="bg-white flex-row items-center space-x-2.5 py-2 px-4 border-b border-gray-200"
            >
              <Text className="text-[#00CCBB]">{item.quantity} x</Text>

              <Image
                className="w-12 h-12 rounded-full"
                source={{ uri: urlFor(item.image).url() }}
              />

              <Text className="flex-1">{item.name}</Text>

              <Text className="text-gray-600">${item.price}</Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromCart(item.id))}
              >
                <Text className="text-[#00CCBB] text-sm">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <View className="bg-white p-4 mt-4 space-y-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-400">Subtotal</Text>

          <Text className="text-gray-400">${total.toFixed(2)}</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-gray-400">Delivey Fee</Text>

          <Text className="text-gray-400">$3.99</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-lg">Order Total</Text>

          <Text className="font-bold">${(total + 3.99).toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          className="bg-[#00CCBB] p-4 rounded-lg"
          onPress={() => navigation.navigate("Prep-Order")}
        >
          <Text className="text-white text-lg text-center font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
