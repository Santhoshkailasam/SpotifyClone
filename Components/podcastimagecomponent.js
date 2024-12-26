import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
const Podcastimage = (props) => {
  const [selectedImages, setSelectedImages] = useState({
    image1: false,
    image2: false,
    image3: false,
  });

  // Toggle selection for an image
  const toggleSelection = (imageKey) => {
      setSelectedImages((prev) => ({
        ...prev,
        [imageKey]: !prev[imageKey],
      }));
    }


  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => toggleSelection("image1")}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.image1} />
            {selectedImages.image1 && (
              <View style={styles.overlay}>
                <MaterialIcons name="check-circle" size={30} color="white" />
              </View>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleSelection("image2")}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.image2} />
            {selectedImages.image2 && (
              <View style={styles.overlay}>
                <MaterialIcons name="check-circle" size={30} color="white" />
              </View>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleSelection("image3")}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.image3} />
            {selectedImages.image3 && (
              <View style={styles.overlay}>
                <MaterialIcons name="check-circle" size={30} color="white" />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", marginTop: 10, marginLeft: 30 }}>
          My brother
        </Text>
        <Text style={{ color: "white", marginTop: 10, marginLeft: 50 }}>
          Distractible
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative", // To position the overlay correctly over the image
  },
  image: {
    height: 95,
    width: 95,
    marginTop: 40,
    marginLeft: 20,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Match the border radius with the image
  },
});

export default Podcastimage;
