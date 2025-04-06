import { Redirect, Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useSession } from "@/ctx";

export default function TabLayout() {
  const { user, isLoading } = useSession();

  if (!isLoading && !user) {
    return <Redirect href="/sign-in" />;
  }
  
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60, // Slightly bigger tab bar
          paddingBottom: 10, // Adjust spacing
        },
        tabBarLabelStyle: {
          fontWeight: "bold", // Make text bold
          fontSize: 12, // Adjust size if needed
        },
        tabBarActiveTintColor: "#FF776F", // Focused color
        tabBarInactiveTintColor: "#B0B0B0", // Default color
      }}
    >
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
          title: "QR Code",
          headerShown: false,
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
          title: "Activity",
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
          title: "Profile",
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
