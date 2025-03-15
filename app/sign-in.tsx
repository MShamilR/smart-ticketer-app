import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", top: 50, left: 20 }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        BusPay
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        Sign in
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text>Username</Text>
        <TextInput
          placeholder="Enter username"
          style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginTop: 5 }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Password</Text>
        <TextInput
          placeholder="Enter password"
          secureTextEntry
          style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginTop: 5 }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FF6B6B",
          padding: 15,
          borderRadius: 5,
          marginTop: 30,
        }}
        onPress={() => console.log("Signed in")}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
