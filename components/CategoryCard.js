import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../utils/sanity";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-3 relative">
      <Image
        className="w-20 h-20 rounded"
        source={{
          uri: urlFor(imgUrl).url(),
        }}
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
