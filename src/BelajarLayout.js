import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
    render() {
      return (
      <View style={styles.containerMain}>
        <View style={styles.head}>
          <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }} >
          Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.slider}>
          <Text style={{ fontSize: 25, textAlign: 'center' }}>Ini Slider</Text>
        </View>
        <View style={styles.isiBtn}>
          <View style={styles.btn1}>
            <View style={styles.button}><Text style={styles.text}> L </Text></View>
            <View style={styles.button}><Text style={styles.text}> O </Text></View>
            <View style={styles.button}><Text style={styles.text}> V </Text></View>
            <View style={styles.button}><Text style={styles.text}> E </Text></View>
            <View style={styles.button}><Text style={styles.text}> X </Text></View>
          </View>
          <View style={styles.btn2}>
            <View style={styles.button}><Text style={styles.text}> E </Text></View>
            <View style={styles.button}><Text style={styles.text}> M </Text></View>
            <View style={styles.button}><Text style={styles.text}> A </Text></View>
            <View style={styles.button}><Text style={styles.text}> K </Text></View>
            <View style={styles.button}><Text style={styles.text}> Y </Text></View>
          </View>
          <View style={styles.footer}>
            <Text style={{ fontSize: 23, color: 'black', textAlign: 'center' }} >
            #JaenKuliahdiPTI</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FF6F00',
    flex: 1,
    flexDirection: 'column' //default Flex Direction adalah column
    //ketika Column maka memenuhi layar secara vertikal
    ////ketika Row maka memenuhi layar secara horizontal
  },
  head: { //Layar dalam android dibagi menjadi 3 lebar sesuai nilai flex
    flex: 1, //
    backgroundColor: '#FFA000',
    marginTop: 25,
    alingItems: 'center',
    justifyContent: 'center',

  },
  slider: {
    flex: 6, // lebar dari box menjadi lebih besar dari 1
    backgroundColor: '#FFF8E1',
    flexDirection: 'column',
    justifyContent: 'space-around',
    //space-around membuat spasi pada tulisan ->main access
    //space-between membuat spasi diantara tulisan
    alignItems: 'center'
    //center mengatur tulisan pada box bagian tengah
    //flex-end mengatur tulisan pada box bagian akhir
    //flex-start mengatur tulisan pada box bagian awal
  },
  btn1: {
    flex: 4, // lebar box lebih besar dari 2
    backgroundColor: '#FFECB3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  btn2: {
    flex: 4, // lebar box lebih besar dari 2
    backgroundColor: '#FFECB3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  button: { //kotak-kotak kecil
    width: 50,
    height: 50,
    backgroundColor: '#FF6F00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  isiBtn: { //border padding
    flex: 9,
    backgroundColor: '#FF8F00'
  },
  footer: {
    flex: 1, // lebar box atau lebih besar dari 2
    backgroundColor: '#FFECB3',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
});
