import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { client } from "../utils/sanity";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [featured, setFeatured] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"]{
           ...,
           restaurants[]->{
            ...,
            category->{
             name,
            },
            dishes[]->{
            ...
            }
           }
        }`
      )
      .then((data) => setFeatured(data));
  }, []);

  return (
    <SafeAreaView className="bg-white pt-2">
      <View className="mt-10 px-4 flex-row items-center space-x-2">
        <Image
          className="w-10 h-10 rounded-full"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />

        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>

          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center justify-between space-x-2 p-4">
        <View className="flex-row items-center space-x-2 bg-gray-200 flex-1 p-2">
          <SearchIcon size={20} color="gray" />

          <TextInput
            placeholder="Resturants and Cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsIcon size={20} color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100 "
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        <Categories />

        {featured?.map((item) => (
          <FeaturedRow
            key={item._id}
            id={item._id}
            title={item.name}
            description={item.short_description}
            restaurants={item.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
