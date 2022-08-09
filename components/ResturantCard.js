import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { urlFor } from "../utils/sanity";
import { useNavigation } from "@react-navigation/native";

const ResturantCard = ({
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
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white rounded overflow-hidden mr-3"
      onPress={() =>
        navigation.navigate("Restaurant", {
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
      }
    >
      <Image className="w-64 h-36" source={{ uri: urlFor(imgUrl).url() }} />

      <View className="py-4 px-3 flex-col space-y-1">
        <Text className="font-bold text-lg">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon size={20} color="green" opacity={0.5} />

          <Text className="text-xs text-green-500">{rating} .</Text>

          <Text className="text-xs text-gray-500">{genre}</Text>
        </View>

        <View className="flex-row items-center space-x-1 ">
          <LocationMarkerIcon size={20} color="gray" opacity={0.4} />

          <Text className="text-xs text-gray-500 flex-row ">
            Nearby . <Text className="max-w-[10px] truncate">{address}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
