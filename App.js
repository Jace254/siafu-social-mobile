const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Onboarding from "./screens/Onboarding";
import Wallet from "./screens/Wallet";
import Catalog from "./screens/Catalog";
import ProfileIcon from "./screens/ProfileIcon";
import DrawerMenu from "./screens/DrawerMenu";
import EmailSent from "./screens/EmailSent";
import ResetPassword from "./screens/ResetPassword";
import Login from "./screens/Login";
import DotsScreen from "./screens/DotsScreen";
import Home from "./screens/Home";
import SplashScreen from "./screens/SplashScreen";
import BottomTab8 from "./components/BottomTab8";
import BottomTab7 from "./components/BottomTab7";
import BottomTab6 from "./components/BottomTab6";
import BottomTab5 from "./components/BottomTab5";
import BottomTab4 from "./components/BottomTab4";
import BottomTab3 from "./components/BottomTab3";
import BottomTab2 from "./components/BottomTab2";
import BottomTab1 from "./components/BottomTab1";
import BottomTab from "./components/BottomTab";
import Header2 from "./components/Header2";
import Header1 from "./components/Header1";
import Header from "./components/Header";
import Header3 from "./components/Header3";
import ResetPasswordHeader from "./components/ResetPasswordHeader";
import LoginHeader from "./components/LoginHeader";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <BottomTab7 />,
    <BottomTab5 />,
    <BottomTab3 />,
    <BottomTab1 />,
    <BottomTab />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <BottomTab8 />,
    <BottomTab6 />,
    <BottomTab4 />,
    <BottomTab2 />,
    <BottomTab />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <SafeAreaView>
            <View
              style={{
                alignSelf: "stretch",
                backgroundColor: "#fff",
                shadowColor: "rgba(0, 0, 0, 0.03)",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 15,
                elevation: 15,
                shadowOpacity: 1,
                flexDirection: "row",
                padding: 16,
                alignItems: "center",
                justifyContent: "space-between",
                height: 81,
              }}
            >
              {bottomTabItemsNormal.map((item, index) => {
                const isFocused = state.index === index;
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      navigation.navigate({
                        name: state.routes[index].name,
                        merge: true,
                      });
                    }}
                  >
                    {activeIndex === index
                      ? bottomTabItemsActive[index] || item
                      : item}
                  </Pressable>
                );
              })}
            </View>
          </SafeAreaView>
        );
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={(props) => ({
          headerShown: true,
          header: () => <Header2 />,
        })}
      />
      <Tab.Screen
        name="DotsScreen"
        component={DotsScreen}
        options={(props) => ({
          headerShown: true,
          header: () => <Header1 />,
        })}
      />
      <Tab.Screen
        name="Catalog"
        component={Catalog}
        options={(props) => ({
          headerShown: true,
          header: () => <Header />,
        })}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={(props) => ({
          headerShown: true,
          header: () => <Header3 />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileIcon}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_semibold: require("./assets/fonts/Roboto_semibold.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
    Roboto_extrabold: require("./assets/fonts/Roboto_extrabold.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Raleway_medium: require("./assets/fonts/Raleway_medium.ttf"),
    Raleway_semibold: require("./assets/fonts/Raleway_semibold.ttf"),
    Raleway_bold: require("./assets/fonts/Raleway_bold.ttf"),
    "Baloo Bhai 2_bold": require("./assets/fonts/Baloo_Bhai_2_bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Onboarding"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
              <Stack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EmailSent"
                component={EmailSent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={(props) => ({
                  headerShown: true,
                  header: () => <ResetPasswordHeader />,
                })}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={(props) => ({
                  headerShown: true,
                  header: () => <LoginHeader />,
                })}
              />
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <SplashScreen />
          )}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};
export default App;
