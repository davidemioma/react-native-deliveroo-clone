import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import ResturantCard from "./ResturantCard";

const FeaturedRow = ({ id, title, description, restaurants }) => {
  return (
    <View className="mt-5 px-4">
      <View className="flex-row items-start">
        <View className="flex-1">
          <Text className="font-bold text-lg">{title}</Text>

          <Text className="font-bold text-xs text-gray-400">{description}</Text>
        </View>

        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>

      <ScrollView
        className="pt-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {restaurants?.map((item) => (
          <ResturantCard
            key={item._id}
            id={item._id}
            imgUrl={item.image}
            title={item.name}
            rating={item.rating}
            genre={item.category.name}
            address={item.address}
            short_description={item.short_description}
            dishes={item.dishes}
            lat={item.lat}
            lng={item.lng}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
