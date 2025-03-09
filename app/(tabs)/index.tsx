import { Text, View, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi Shamil</Text>
          <Text style={styles.subText}>Good Evening</Text>
        </View>
        <FontAwesome5 name="bus" size={24} color="black" />
      </View>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceText}>Your Available Balance</Text>
        <Text style={styles.balanceAmount}>LKR 770.00</Text>
      </View>

      {/* Placeholder for additional content */}
      <View style={styles.placeholders}>
        <View style={styles.placeholderBox} />
        <View style={styles.placeholderBox} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 0
  },
  subText: {
    fontSize: 14,
    color: "gray",
  },
  balanceCard: {
    backgroundColor: "#F5F5F5",
    padding: 38,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 16,
    color: "gray",
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "red",
    marginTop: 0,
  },
  placeholders: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  placeholderBox: {
    width: "47%",
    height: 100,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
});
