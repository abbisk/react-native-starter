import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../../src/assets/images/signup.png")}>
            <Image style={styles.logo} source={require("../../src/assets/images/logo.jpg")}></Image>
            <View style={styles.loginButton}>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",

    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo: {
        height: 100,
        width: 100,
        position: "absolute",
        top: 50,
    }

})

export default WelcomeScreen;