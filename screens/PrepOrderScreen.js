import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PrepOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 6000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image
        className="w-96 h-96"
        source={require("../assets/gifImage.gif")}
        animation="slideInUp"
        iterationCount={1}
      />

      <Animatable.Text
        className="text-lg text-white font-bold text-center my-10"
        animation="slideInUp"
        iterationCount={1}
      >
        Waiting for restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PrepOrderScreen;
