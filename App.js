import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import store from "./store/store";
import CartScreen from "./screens/CartScreen";
import PrepOrderScreen from "./screens/PrepOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />

            <Stack.Screen name="Restaurant" component={RestaurantScreen} />

            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{ presentation: "modal", headerShown: false }}
            />

            <Stack.Screen
              name="Prep-Order"
              component={PrepOrderScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />

            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
