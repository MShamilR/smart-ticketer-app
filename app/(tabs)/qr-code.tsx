import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Share,
  StyleSheet,
  Dimensions,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("window");
const QR_PREFIX = "http://localhost:9000/ticket/";

const generateRandomCode = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const QRScreen = () => {
  const [code, setCode] = useState(generateRandomCode());
  const qrValue = `${QR_PREFIX}4dffiUI4yd`;

  const handleShare = async () => {
    try {
      await Share.share({ message: `Here is my BusPay QR Code: ${qrValue}` });
    } catch (error) {
      console.error("Error sharing QR:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.header}>Smart Ticketer QR</Text>
        <FontAwesome5 name="bus" size={24} color="black" />
      </View>

      <View style={styles.qrContainer}>
        <QRCode value={qrValue} size={width * 0.85} />
      </View>

      <Text style={styles.qrMessage}>Show this QR to your ticketer</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={24} color="white" />
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => setCode(generateRandomCode())}
        >
          <Ionicons name="refresh-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  topSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 0,
  },
  header: { fontSize: 24, fontWeight: "bold" },
  busIcon: { marginRight: 10 },
  qrContainer: {
    marginTop: height * 0.03,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  qrMessage: { marginTop: 10, fontSize: 16, color: "gray" },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 0,
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF776F",
    paddingVertical: 12,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  shareText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  resetButton: {
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
});

export default QRScreen;
