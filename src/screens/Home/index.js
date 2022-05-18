import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {height, normalize, normalizeHorizontal, width} from '../../helper';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Footer,
  Header,
  CartComponent,
  ButtonSubmit,
  ButtonBuyNow,
  ProductSize,
  ProductDefaul,
  ProductContent,
  ProductCenter,
  Collections,
  Tags,
  Service,
  FollowUs,
  ProductCenterHorizontal,
} from '../../component';
import {
  IMAGE_CONTENT,
  IC_BOTTOMCONTENT,
  IMAGE_BORDER,
  IC_BACK,
  IC_NEXT,
  IC_INDICATOR,
  IC_LOGO,
  IMAGE_SHIT,
} from '../../assets';

const Home = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        hidden={false}
      />
      <Header />
      <ScrollView style = {styles.scrollView}>
        <View>
          <Image style={styles.content} source={IMAGE_CONTENT} />
          <View style={styles.txt}>
            <Text style={styles.txtContent}>{`Luxury`}</Text>
            <Text style={styles.txtContent}>{` Fashion`}</Text>
            <Text style={styles.txtContent}>{`& Accessories`}</Text>
            <View style={styles.txtBottom}>
              <Text
                style={styles.txtBottomContent}>{`Explore Collection`}</Text>
            </View>
            <Image style={styles.iconBottomContent} source={IC_BOTTOMCONTENT} />
          </View>
        </View>
        <Text style={styles.txtTitle}>{`New Arrival`}</Text>
        <Image style={styles.border} source={IMAGE_BORDER} />
        <View style={styles.nav}>
          <Text style={styles.txtNav}>{`All`}</Text>
          <Text style={styles.txtNav}>{`Apparel`}</Text>
          <Text style={styles.txtNav}>{`Dress`}</Text>
          <Text style={styles.txtNav}>{`Tshirt`}</Text>
          <Text style={styles.txtNav}>{`Bag`}</Text>
        </View>
        <ProductCenter />
        <TouchableOpacity style={styles.btnExplore}>
          <Text style={styles.txtExplore}>{`Explore More`}</Text>
          <Image source={IC_NEXT} style={styles.iconNext} />
        </TouchableOpacity>
        <Image style={styles.border} source={IMAGE_BORDER} />
        {/* <ButtonSubmit/> */}
        {/* <Footer /> */}
        <View style={styles.txtBrandCenter}>
          <View style={styles.brand}>
            <Text style={styles.txtBrand}>{`PRADA`}</Text>
            <Text style={styles.txtBrand}>{`BURBERRY`}</Text>
            <Text style={styles.txtBrand}>{`BOSS`}</Text>
          </View>
          <View style={styles.brand1}>
            <Text style={styles.txtBrand}>{`Cartier`}</Text>
            <Text style={styles.txtBrand}>{`G U C C I`}</Text>
            <Text style={styles.txtBrand}>{`TIFFANY & CO.`}</Text>
          </View>
        </View>
        <Image style={styles.border} source={IMAGE_BORDER} />
        <Text style={styles.txtTitle}>{`Collections`}</Text>
        <Collections />
        <Text style={styles.txtTitle}>{`Just for You`}</Text>
        <View style={styles.just}>
          <ProductCenterHorizontal />
        </View>
        <Image style={styles.indicator} source={IC_INDICATOR} />
        <Text style={styles.txtTitle}>{`@Trending`}</Text>
        <View style={styles.Tag}>
          <Tags style={styles.txtTag} />
          <Tags style={styles.txtTag} />
          <Tags style={styles.txtTag} />
        </View>
        <View style={styles.Tag}>
          <Tags style={styles.txtTag} />
          <Tags style={styles.txtTag} />
          <Tags style={styles.txtTag} />
        </View>
        <View style={styles.service}>
          <Image style={styles.indicator} source={IC_LOGO} />
          <View style={styles.textService}>
            <Text
              style={
                styles.txtService
              }>{`Making a luxurious lifestyle accessible`}</Text>
            <Text
              style={
                styles.txtService
              }>{`for a generous group of women is our`}</Text>
            <Text style={styles.txtService}>{`daily drive.`}</Text>
          </View>
          <Image style={styles.border} source={IMAGE_BORDER} />
          <Service />
          {/* <Image style={styles.shit} source={IMAGE_SHIT} /> */}
        </View>
        <Text style={styles.txtTitle}>{`Follow Us`}</Text>
        <Image style={styles.shit} source={IMAGE_SHIT} />
        <FollowUs />
        <Footer/>
      </ScrollView>
      {/* <ButtonBuyNow/> */}
      {/* <Cart/> */}
      {/* <ButtonSubmit/> */}
      {/* <ProductSize/> */}
      {/* <ProductDefaul/> */}
      {/* <ProductContent/> */}
      {/* <ProductCenter/> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView:{
    marginTop: normalize(10)
  },
  content: {
    width: '100%',
    marginTop: normalize(10),
  },
  txt: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },
  txtContent: {
    letterSpacing: 1.5,
    fontSize: '700',
    fontStyle: 'italic',
    fontSize: normalize(40),
    lineHeight: normalize(44),
  },
  txtBottom: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '90%',
    alignSelf: 'center',
    height: normalize(50),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },
  txtBottomContent: {
    color: '#FCFCFC',
    fontWeight: '400',
    fontSize: normalize(16),
    lineHeight: normalize(24),
    fontStyle: 'normal',
  },
  iconBottomContent: {
    alignSelf: 'center',
    marginTop: normalize(20),
    width: '20%',
  },
  txtTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '400',
    letterSpacing: 8,
    fontSize: normalize(18),
    lineHeight: normalize(40),
    color: '#000',
    marginTop: normalize(10),
  },
  border: {
    // backgroundColor:'#555555',
    width: '40%',
    height: 10,
    alignSelf: 'center',
    marginVertical: 12,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNav: {
    marginHorizontal: 10,
    marginTop: normalizeHorizontal(10),
    fontSize: normalize(16),
    fontWeight: '400',
    letterSpacing: 1,
  },
  btnExplore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: normalize(10),
  },
  txtExplore: {
    fontSize: normalize(16),
    fontWeight: '400',
    color: '#000',
    marginHorizontal: 20,
  },
  brand: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  brand1: {
    flexDirection: 'row',
    textAlign: 'center',
    alignSelf: 'center',
  },
  txtBrand: {
    marginHorizontal: 20,
    color: '#333',
    fontWeight: '600',
    letterSpacing: 2,
    textAlign: 'center',
    fontSize: normalize(16),
    marginVertical: 10,
  },
  txtBrandCenter: {
    alignSelf: 'center',
  },
  indicator: {
    alignSelf: 'center',
    marginTop: normalize(20),
  },
  Tag: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  txtTag: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  service: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  textService: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(16),
  },
  txtService: {
    fontSize: normalize(14),
    fontWeight: '400',
    lineHeight: normalize(20),
    letterSpacing: 1,
  },
  shit: {
    alignSelf: 'center',
    width: '20%',
    aspectRatio: 1,
  },
});
