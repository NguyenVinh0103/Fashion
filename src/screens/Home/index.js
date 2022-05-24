import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  THEMES,
  normalize,
  normalizeHorizontal,
  fonts,
  height,
} from '../../helper';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Footer,
  Header,
  ProductSlider,
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
  OnBoarding,
} from '../../component';
import {
  IC_BOTTOMCONTENT,
  IMAGE_BORDER,
  IC_BACK,
  IC_NEXT,
  IC_INDICATOR,
  IC_LOGO,
  IMAGE_SHIT,
  IMAGE_CONTENT,
  IC_PRADA,
  IC_BURBERRY,
  IC_BOSS,
  IC_CARTIER,
  IC_GUCCI,
  IC_TIFFANY,
} from '../../assets';

const Brand = [
  {
    id: 1,
    image: IC_PRADA,
  },
  {
    id: 2,
    image: IC_BURBERRY,
  },
  {
    id: 3,
    image: IC_BOSS,
  },
  {
    id: 4,
    image: IC_CARTIER,
  },
  {
    id: 5,
    image: IC_GUCCI,
  },
  {
    id: 6,
    image: IC_TIFFANY,
  },
];

const Home = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const Item = ({item, index}) => {
    return <Image source={item.image} style={styles.brand} />;
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        hidden={false}
      />
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <OnBoarding />
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
        {/* <ButtonSubmit /> */}
        <FlatList
          data={Brand}
          renderItem={Item}
          keyExtractor={(item, index) => `${item.id} ${index}`}
          numColumns={3}
        />
        <Image style={styles.border} source={IMAGE_BORDER} />
        <Text style={styles.txtCollections}>{`Collections`}</Text>
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
          <Image style={styles.shit} source={IMAGE_SHIT} />
        </View>
        <Text style={styles.txtTitle}>{`Follow Us`}</Text>
        <Image style={styles.shit} source={IMAGE_SHIT} />
        <FollowUs />
        <Footer />
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
    backgroundColor: THEMES.LIGHT.PRIMARY_BACKGROUND,
  },
  scrollView: {
    marginTop: normalize(10),
    flexGrow: 1,
  },
  txtTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '400',
    letterSpacing: 8,
    fontSize: fonts.FONT_SIZE_18,
    lineHeight: normalize(40),
    color: '#000',
    marginTop: normalize(-50),
  },
  txtCollections: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '400',
    letterSpacing: 8,
    fontSize: fonts.FONT_SIZE_18,
    lineHeight: normalize(40),
    color: '#000',
    marginBottom: normalize(8),
  },
  border: {
    // backgroundColor:'#555555',
    width: '40%',
    height: 10,
    alignSelf: 'center',
    marginTop: normalize(12),
    marginBottom: 12,
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
    marginHorizontal: 20,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 20,
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
