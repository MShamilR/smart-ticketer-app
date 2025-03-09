import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? "#FF776F" : "#B0B0B0"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="qr-code"
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="qrcode"
              size={24}
              color={focused ? "#FF776F" : "#B0B0B0"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="history"
              size={24}
              color={focused ? "#FF776F" : "#B0B0B0"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={24}
              color={focused ? "#FF776F" : "#B0B0B0"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
