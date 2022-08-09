import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";
import { urlFor } from "../utils/sanity";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/store";

const Dish = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();

  const [isPressed, setIsPressed] = useState(false);

  const [quantity, setQuantity] = useState(0);

  const addToCartHandler = () => {
    setQuantity(quantity + 1);

    dispatch(addToCart({ id, name, description, price, image, quantity: 1 }));
  };

  const removeFromCartHandler = () => {
    setQuantity(quantity - 1);

    dispatch(removeFromCart(id));
  };

  return (
    <>
      <TouchableOpacity
        className={`mb-4 flex-row justify-between ${
          isPressed ? "border-b-0" : "border-b pb-4"
        } border-gray-200 `}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View>
          <Text className="text-xl mb-1">{name}</Text>

          <Text className="text-sm text-gray-400 mb-1.5">{description}</Text>

          <Text className="text-sm text-gray-400">${price}</Text>
        </View>

        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            className="h-20 w-20"
            source={{ uri: urlFor(image).url() }}
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="pb-4 flex-row items-center space-x-2 border-b border-gray-200 mb-4">
          <TouchableOpacity
            className={`${
              quantity <= 0 ? "bg-gray-500" : "bg-[#00CCBB]"
            } w-8 h-8 rounded-full flex items-center justify-center`}
            disabled={quantity <= 0}
            onPress={removeFromCartHandler}
          >
            <MinusIcon size={20} color="white" />
          </TouchableOpacity>

          <Text>{quantity}</Text>

          <TouchableOpacity
            className="bg-[#00CCBB] w-8 h-8 rounded-full flex items-center justify-center"
            onPress={addToCartHandler}
          >
            <PlusIcon size={20} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Dish;
