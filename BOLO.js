import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'; // Importing necessary components from react-native

const BOLO = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>ATL/BOLO Records</Text>
          <View style={styles.contentContainer}>
            <Image source={require('./assets/Donald.jpg')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title1}>BUZZ, Bucky</Text>
              <Text style={styles.title2}>Approx, 40, 5'9 Tall</Text>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title1}>Description</Text>
            <Text style={styles.title2}>Indigenous male, 5'9" tall, medium build, short black hair, walks or runs while hunched over</Text>
            <Text style={styles.title1}>DOB/Age</Text>
            <Text style={styles.title2}>40</Text>
            <Text style={styles.title1}>Reason</Text>
            <Text style={styles.title2}>Aggressive with staff, causes disturbance</Text>
            <Text style={styles.title1}>Behavior</Text>
            <Text style={styles.title2}>Non-compliant, known to smoke a lot of Unknown Substances.</Text>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121A21',
      padding: 20,
    },
    title: {
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
      marginVertical: 20,
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    image: {
      width: 150,
      height: 150,
      marginRight: 20,
    },
    textContainer: {
      flex: 1,
    },
    title1:{
        color: "#FFE600",
        fontSize: 20,
        marginBottom: 5,
    },
    title2:{
        color: "white",
        fontSize: 16,
        marginBottom: 15,
    },
    detailsContainer: {
      flex: 1,
    },
  });

export default BOLO; 

