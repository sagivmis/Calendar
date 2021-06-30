import React from "react";
// import { Image } from "semantic-ui-react";
import back from "./images/back.png";
import "semantic-ui-css/semantic.min.css";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // paddingTop: 100,
    width: "100%",
    height: 410,
    opacity: 0.6,
    position: "absolute",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
const Background = () => {
  return (
    <div className="background-container">
      <div className="upperHalf">
        <Image
          style={styles.container}
          className="cart-images"
          source={{
            uri: back,
          }}
        />
      </div>

      <div className="lowerHalf"></div>
    </div>
  );
};

export default Background;
