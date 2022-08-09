import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restaurantSelector } from "../store/restaurant-slice";
import { useNavigation } from "@react-navigation/native";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import { setRestaurant, emptyCart } from "../store/store";

const DeliveryScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const restaurant = useSelector(restaurantSelector);

  const onPressHandler = () => {
    dispatch(setRestaurant({}));

    dispatch(emptyCart());

    navigation.navigate("Home");
  };

  return (
    <View className="flex-1 bg-[#00ccbb]">
      <SafeAreaView className="mt-10 z-50">
        <View className="p-4 flex-row items-center justify-between">
          <TouchableOpacity onPress={onPressHandler}>
            <XIcon size={30} color="white" />
          </TouchableOpacity>

          <Text className="text-lg text-white font-light">Order Help</Text>
        </View>

        <View className="bg-white mx-4 my-2 p-4 shadow-md z-50">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimate Arrival</Text>

              <Text className="text-3xl font-bold">45-55 minutes</Text>
            </View>

            <Image
              className="w-20 h-20"
              source={{ uri: "https://links.papareact.com/fls" }}
            />
          </View>

          <Progress.Bar size={30} indeterminate={true} color="#00ccbb" />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        className="z-0 flex-1 -mt-10"
        initialRegion={{
          latitude: restaurant?.lat,
          longitude: restaurant?.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: restaurant?.lat, longitude: restaurant?.lng }}
          title={restaurant?.title}
          description={restaurant?.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView>

      <SafeAreaView className="bg-white p-4 flex-row items-center space-x-5">
        <Image
          className="w-12 h-12 rounded-full bg-gray-300"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />

        <View className="flex-1">
          <Text className="text-lg">David Junior</Text>

          <Text className="text-gray-400">Your rider</Text>
        </View>

        <Text className="text-lg text-[#00ccbb] font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
