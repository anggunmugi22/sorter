import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
  Alert,
  TouchableHighlight
} from 'react-native';
import {ImageHeader, Logo} from '../../assets';
//import {PesananAktif} from '../../components/';
import ButtonIcon from '../../components/ButtonIcon';
import {WARNA_ABU_ABU} from '../../utils/constant';
import {ScrollView} from 'react-native-gesture-handler';
const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width:'100%', height:'11%',marginBottom:10, backgroundColor:'#FADC9C'}}>
        <View style={styles.layanan}>
          <View style={{width:"95%", alignItems:'center', flexDirection:'row-reverse'}}>
            <Image 
            style={{marginTop:10}}
            source={require('../../assets/images/listoption.png')}
            />
          </View>
        </View>
        
          <Text style={styles.label}>Dashboard Event</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Asterisk" type="layanan" />
            <ButtonIcon title="Tesla" type="layanan" />
            <ButtonIcon title="Gravitation" type="layanan" />
            <ButtonIcon title="Event Music" type="layanan" />
            <ButtonIcon title="Event Comedy" type="layanan" />
            <ButtonIcon title="Event seni" type="layanan" />
            <ButtonIcon title="Asterisk" type="layanan" />
            <ButtonIcon title="Tesla" type="layanan" />
            <ButtonIcon title="Gravitation" type="layanan" />
            <ButtonIcon title="Event Music" type="layanan" />
            <ButtonIcon title="Event Comedy" type="layanan" />
            <ButtonIcon title="Event seni" type="layanan" />
            <ButtonIcon title="Asterisk" type="layanan" />
            <ButtonIcon title="Tesla" type="layanan" />
            <ButtonIcon title="Gravitation" type="layanan" />
            <ButtonIcon title="Event Music" type="layanan" />
            <ButtonIcon title="Event Comedy" type="layanan" />
            <ButtonIcon title="Event seni" type="layanan" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: "150%",
    height: windowHeight * 0.09,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  hello: {
    marginTop: windowHeight * 0.03,
  },
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    marginTop: 50
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
