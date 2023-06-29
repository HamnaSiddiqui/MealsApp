import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import FavouritesContextProvider from "./store/context/favourites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#202123" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#343541" },
        drawerContentStyle: { backgroundColor: "#202123" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#383838",
        drawerActiveBackgroundColor: "#A9A9A9",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <FavouritesContextProvider>
      {/* <Provider store={store}> */}

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#202123" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#343541" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealsDetails"
            component={MealsDetailsScreen}
            options={{ title: "About Meals" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </Provider> */}
    </FavouritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000104",
  },
});
