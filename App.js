// App.js
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AllAppsScreen from "./app/AllAppsScreen";
import ProfileScreen from "./app/ProfileScreen";
import {
  NavAllAppsActiveIcon,
  NavAllAppsIcon,
  NavGameActiveIcon,
  NavGameIcon,
  NavGoldActiveIcon,
  NavGoldIcon,
  NavHomeActiveIcon,
  NavHomeIcon,
  NavProfileActiveIcon,
  NavProfileIcon,
} from "./assets/icon";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case "Home":
                return focused ? (
                  <NavHomeActiveIcon width={28} height={28} />
                ) : (
                  <NavHomeIcon width={19} height={19} />
                );
              case "All Apps":
                return focused ? (
                  <NavAllAppsActiveIcon width={28} height={28} />
                ) : (
                  <NavAllAppsIcon width={19} height={19} />
                );
              case "Gold":
                return focused ? (
                  <NavGoldActiveIcon width={28} height={28} />
                ) : (
                  <NavGoldIcon width={19} height={19} />
                );
              case "Game":
                return focused ? (
                  <NavGameActiveIcon width={28} height={28} />
                ) : (
                  <NavGameIcon width={19} height={19} />
                );
              case "Profile":
                return focused ? (
                  <NavProfileActiveIcon width={28} height={28} />
                ) : (
                  <NavProfileIcon width={19} height={19} />
                );
              default:
                return null;
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={AllAppsScreen} />
        <Tab.Screen name="All Apps" component={AllAppsScreen} />
        <Tab.Screen name="Gold" component={AllAppsScreen} />
        <Tab.Screen name="Game" component={AllAppsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
