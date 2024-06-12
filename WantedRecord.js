import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'; 

const WantedRecords = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wanted Records</Text>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/criminal2.jpg')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title1}>GIGGLES, Nathan</Text>
          <Text style={styles.title2}>Approx, 40, 5'10 Tall</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title1}>Case #</Text> 
        <Text style={styles.title2}>CA20249653</Text>
        <Text style={styles.title2}>Unit 7435, Calgary Police service.</Text>
        <Text style={styles.title2}>
          Hair: Brown, shaved hair & has a moustache 
        </Text>
        <Text style={styles.title2}>
          Eyes: Grey. Build: Medium. 
        </Text>
        <Text style={styles.title2}>
          Additional details: Has several tattoos including a skull on the left side of his neck
        </Text>
        <Text style={styles.title1}>Warrants include:</Text>
        <Text style={styles.title2}>
          • Break & enter.
          </Text>
          <Text style={styles.title2}>
           • 3x failure to comply. 
           </Text>
          <Text style={styles.title2}>
        • Obtaining property under false pretenses under $5,000.
        </Text>
        <Text style={styles.title2}>
          • 3x failure to appear. 
          
          </Text>
          <Text style={styles.title2}>
            • Unlawful confinement & 2x assaulting a peace officer. 
            </Text>
          <Text style={styles.title2}>
            • 4x assault with a weapon.
        </Text>
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
    marginTop: -100,
    flex: 1,
    marginLeft: -10,
  },
  title1:{
    color: "#FF0000",
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

export default WantedRecords;
