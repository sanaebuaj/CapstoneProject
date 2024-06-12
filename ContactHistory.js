import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'; // Importing necessary components from react-native

const ContactHistory = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Contact History</Text>
          <View style={styles.contentContainer}>
            <Image source={require('./assets/criminal2.jpg')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.titl}> GIGGLES, Nathan </Text>
              <Text style={styles.title1}>Approx, 40, 5'10 Tall</Text>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title1}>April 5, 2024</Text>
            <Text style={styles.title1}>He was seen in a area of recent robbery.</Text>
            <Text style={styles.title1}>May 6, 2024</Text>
            <Text style={styles.title1}>He's been in contact with someone who has been involved in illegal activities.</Text>
            <Text style={styles.title1}>May 19, 2024</Text>
            <Text style={styles.title1}>He was trespassed by park security for aggressive nature and non- compliant behavior.</Text>
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
      marginLeft:-10,
    },
    title1:{
        color: "white",
        fontSize: 20,
        marginBottom: 20,

    },
    titl:{
        color: 'red',
        fontSize: 20,
        marginTop: -80,
        marginBottom: 10,
        //marginLeft:-10
    },
   
    detailsContainer: {
      flex: 1,
    },
  });

export default ContactHistory; 

