import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { urlFor } from "../utils/sanity";
import {
  ArrowLeftIcon,
  StarIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import {
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import Dish from "../components/Dish";
import CartIcon from "../components/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../store/cart-slice";
import { setRestaurant } from "../store/store";

const RestaurantScreen = () => {
  const dispatch = useDispatch();

  const cartitems = useSelector(cartSelector);

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      lat,
      lng,
    },
  } = useRoute();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        lat,
        lng,
      })
    );
  }, []);

  return (
    <>
      <ScrollView>
        <View className="relative">
          <Image
            className="h-56 w-full bg-gray-300"
            source={{ uri: urlFor(imgUrl).url() }}
          />

          <TouchableOpacity
            className="absolute top-10 left-5 bg-gray-100 p-2 rounded-full"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={25} color="#00CC88" />
          </TouchableOpacity>
        </View>

        <View className="bg-white w-full p-4 text-sm">
          <Text className="text-2xl font-bold">{title}</Text>

          <View className="flex-row items-center space-x-2 my-2">
            <StarIcon size={20} opacity={0.5} color="green" />

            <Text className="text-green-500">{rating} . Others</Text>

            <LocationMarkerIcon size={20} opacity={0.4} color="gray" />

            <Text className="text-gray-500 text-sm">Nearby . {address}</Text>
          </View>

          <Text className="text-gray-500 mb-2">{short_description}</Text>

          <TouchableOpacity className="flex-row items-center border-t border-gray-200 pt-4">
            <View className="flex-1 flex-row items-center space-x-3">
              <QuestionMarkCircleIcon size={20} color="gray" />

              <Text className="font-bold">Have a food allergy?</Text>
            </View>

            <ChevronRightIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <Text className="my-4 ml-4 font-bold text-xl">Menu</Text>

        <View className="bg-white p-4">
          {dishes?.map((item, i) => (
            <Dish
              key={i}
              id={item._id}
              name={item.name}
              description={item.short_description}
              price={item.price}
              image={item.image}
            />
          ))}
        </View>
      </ScrollView>

      {cartitems.length > 0 && <CartIcon />}
    </>
  );
};

export default RestaurantScreen;
