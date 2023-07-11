import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Button, Dimensions, Modal, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "./components/header";

export default function Page() {
  const { width, height } = Dimensions.get("window");
  const image = {
    width: width,
    height: height,
    uri: 'https://img.freepik.com/premium-vector/happy-birthday-celebration-greeting-with-english-calligraphy_428817-139.jpg?w=740',
  };
  const image2 = {
    width: width,
    height: height,
    uri: 'https://images.pexels.com/photos/3905857/pexels-photo-3905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Header/>
      
      <Modal visible={modalOpen} animationType="slide">
        <ImageBackground source={image2} resizeMode="contain" style={styles.image}>
          <View style={styles.modalContent}>
            <View style={styles.modalInnerContent}>
              <Text style={styles.modalText}>Life is very short</Text>
              <Text style={styles.modalText}>but long enough</Text>
              <Text style={styles.modalText}>if you love truly</Text>
              <Text style={styles.modalText}>forgive quickly</Text>
              <Text style={styles.modalText}>and never regret</Text>
              <Text style={styles.modalText}>whatever makes you smile.</Text>
            </View>
            <Icon name="close" size={20} color="#900" onPress={() => setModalOpen(false)} />
          </View>
        </ImageBackground>
      </Modal>
      <ImageBackground source={image} resizeMode="contain" style={styles.image}>
        <View style={styles.buttonContainer}>
          <Icon name="plus" size={20} color="#900" onPress={() => setModalOpen(true)} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
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
  modalContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 10,
  },
  modalInnerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 300,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'cursive',
    fontWeight: 'bold',
    color: 'red',
    
  },
});
