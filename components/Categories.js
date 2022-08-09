import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { client } from "../utils/sanity";

const Categories = () => {
  const [menuCategories, setMenuCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "category"]`)
      .then((data) => setMenuCategories(data));
  }, []);

  return (
    <ScrollView
      className="pt-4"
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {menuCategories?.map((item) => (
        <CategoryCard key={item._id} imgUrl={item.image} title={item.name} />
      ))}
    </ScrollView>
  );
};

export default Categories;
