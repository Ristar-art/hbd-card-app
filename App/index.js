import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Dimensions,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "./components/header";

export default function Page() {
  const { width, height } = Dimensions.get("window");
  const image = {
    width: width,
    height: height,
    uri: "https://img.freepik.com/free-vector/balloon-birthday-greeting-template-pink-gold-tone_53876-119085.jpg",
  };
  const image2 = {
    width: width,
    height: height,
    uri: "https://i.etsystatic.com/38544049/r/il/873cc8/4698883203/il_570xN.4698883203_9vov.jpg",
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Header /> */}

      {modalOpen && (
        <>
          <ImageBackground
            source={image2}
            resizeMode="contain"
            style={styles.image}
          >
            <View
              style={{
                flex: 1,
                alignItems: "fle-stat",
                justifyContent: "space-between",
                borderWidth: 1,
                borderColor: "#f2f2f2",
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  height: "50%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  //  marginBottom: 300,

                  fontSize: 18,
                  // backgroundColor: "yellow",
                }}
              >
                <Text style={{ color: "red", fontSize: 18 }}>
                  Life is very short
                </Text>
                <Text style={{ color: "red", fontSize: 18 }}>
                  but long enough
                </Text>
                <Text style={{ color: "red", fontSize: 18 }}>
                  if you love truly
                </Text>
                <Text style={{ color: "red", fontSize: 18 }}>
                  forgive quickly
                </Text>
                <Text style={{ color: "red", fontSize: 18 }}>
                  and never regret
                </Text>
                <Text style={{ color: "red", fontSize: 18 }}>
                  whatever makes you smile.
                </Text>
              </View>
              <View
                style={{
                  height: "20%",
                  width: "100%",
                  //  backgroundColor: "brown",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <TouchableOpacity
                  onPress={() => setModalOpen(false)}
                  style={{
                    display: "flex",
                    backgroundColor: "brown",
                    borderRadius: 50,
                    padding: 10,
                  }}
                >
                  <Text>Back</Text>
                </TouchableOpacity>

                {/* <Icon
                  name="close"
                  size={20}
                  color="#900"
                  onPress={() => setModalOpen(false)}
                /> */}
              </View>
            </View>
          </ImageBackground>
        </>
      )}
      {!modalOpen && (
        <>
          <ImageBackground
            source={image}
            resizeMode="contain"
            style={styles.image}
          >
            <View style={{display:"flex", height:"100%", width:"100%",   justifyContent: "flex-end", alignItems:"center"}}>
           
            <TouchableOpacity
                  onPress={() => setModalOpen(true)}
                  style={{
                    display: "flex",
                    backgroundColor: "brown",
                    borderRadius: 50,
                    padding: 10,
                 //   justifyContent: "flex-end"
                  }}
                >
                  <Text>View the message</Text>
                </TouchableOpacity>

            </View>
           
          </ImageBackground>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // padding: 24,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 500,
  },
  modalContent: {},
  modalInnerContent: {},
  modalText: {
    textAlign: "center",
    fontSize: 18,
    // fontFamily: "cursive",
    fontWeight: "bold",
    color: "red",
  },
});
