import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Header, TabBlog, Footer} from '../component';
import {
  IMAGE_BORDER,
  IMAGE_ITEMBLOG1,
  IMAGE_ITEMBLOG2,
  IMAGE_ITEMBLOG3,
  IMAGE_ITEMBLOG4,
  IC_BOOKMARK,
  IC_PLUS,
} from '../assets';
import {
  THEMES,
  normalize,
  normalizeHorizontal,
  fonts,
  height,
  width,
} from '../helper';
import LinearGradient from 'react-native-linear-gradient';
import {linear} from 'react-native/Libraries/Animated/Easing';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Product = [
  {
    id: 1,
    image: IMAGE_ITEMBLOG1,
    content: '2021 Style Guide: The Biggest Fall Trends',
    icon: IC_BOOKMARK,
    TagLeft: `# Fashion`,
    TagRight: `# Tips`,
    time: `4 days ago`,
  },
  {
    id: 2,
    image: IMAGE_ITEMBLOG2,
    content: '2021 Style Guide: The Biggest Fall Trends',
    icon: IC_BOOKMARK,
    TagLeft: `# Fashion`,
    TagRight: `# Tips`,
    time: `4 days ago`,
  },
  {
    id: 3,
    image: IMAGE_ITEMBLOG3,
    content: '2021 Style Guide: The Biggest Fall Trends',
    icon: IC_BOOKMARK,
    TagLeft: `# Fashion`,
    TagRight: `# Tips`,
    time: `4 days ago`,
  },
  {
    id: 4,
    image: IMAGE_ITEMBLOG4,
    content: '2021 Style Guide: The Biggest Fall Trends',
    icon: IC_BOOKMARK,
    TagLeft: `# Fashion`,
    TagRight: `# Tips`,
    time: `4 days ago`,
  },
];

const BlogComp = () => {
  const Item = ({item, index}) => {
    return (
      <View style={styles.item}>
        <View style={styles.BlogImage}>
          <Image style={styles.image} source={item.image} />
          <Image style={styles.icon} source={item.icon} />
          <View style={styles.linearFlex}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 1)']}
              style={styles.linear}>
              <Text style={styles.txtContent}>{item.content}</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.Bottom}>
          <View style={styles.borderTxt}>
            <View style={styles.TagLeft}>
              <Text style={styles.txtTagLeft}>{item.TagLeft}</Text>
            </View>
            <View style={styles.TagRight}>
              <Text style={styles.txtTagRight}>{item.TagRight}</Text>
            </View>
          </View>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        hidden={false}
      />
      <Header />
      <ScrollView>
        <Text style={styles.Title}>Blog</Text>
        <Image style={styles.borderTop} source={IMAGE_BORDER} />

        <FlatList
          data={Product}
          renderItem={Item}
          keyExtractor={(item, index) => `${item.id} ${index}`}
          contentContainerStyle={styles.FlatList}
          scrollEnabled={false}
        />
        <TouchableOpacity style = {styles.btnLoadMore}>
          <Text style={styles.txtLoadMore}>{`LOAD MORE`}</Text>
          <Image style={styles.iconPlus} source={IC_PLUS} />
        </TouchableOpacity>

        <Footer />
      </ScrollView>
    </View>
  );
};

export const Blog = React.memo(BlogComp);

const styles = StyleSheet.create({
  Title: {
    alignSelf: 'center',
    marginTop: normalize(20),
    fontSize: normalize(18),
    lineHeight: normalize(40),
    letterSpacing: normalize(4),
    fontFamily: fonts.TenorSansRegular,
    color: THEMES.LIGHT.TEXT_COLOR,
  },
  borderTop: {
    width: '40%',
    height: 10,
    alignSelf: 'center',
    marginTop: normalize(12),
    marginBottom: 12,
  },
  BlogImage: {
    margin: normalize(10),
    alignSelf: 'center',
    width: '90%',
    // alignItems:'flex-end',
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: normalize(20),
    right: 0,
    marginRight: normalizeHorizontal(20),
    height: normalize(26),
    width: 20,
    justifyContent: 'flex-start',
  },
  linearFlex: {
    justifyContent: 'flex-end',
  },
  linear: {
    position: 'absolute',
    width: '100%',
    height: normalize(50),
    alignSelf: 'flex-end',
  },
  image: {
    width: '100%',
  },
  txtContent: {
    fontSize: normalize(18),
    letterSpacing: normalize(4),
    color: '#fff',
    lineHeight: normalize(20),
  },
  Bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: normalizeHorizontal(20),
    marginRight: normalizeHorizontal(20),
    marginVertical: 10
  },
  borderTxt: {
    flexDirection: 'row',
  },
  TagLeft: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: normalize(80),
    height: normalize(26),
    borderWidth: 1,
    borderColor: '#666'
  },
  TagRight: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: normalize(60),
    height: normalize(26),
    marginLeft: normalizeHorizontal(10),
    borderWidth: 1,
    borderColor: '#666'
  },
  txtTagLeft: {
    textAlign: 'center',
    color: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTagRight: {
    textAlign: 'center',
    color: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    color: '#000',
  },
  btnLoadMore:{
    flexDirection: 'row',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor:'#888',
    backgroundColor:'#fff',
    width: normalizeHorizontal(200),
    height: normalize(40),
    marginTop: normalize(20)
  },
  txtLoadMore:{
    color: '#000',
    fontSize: normalize(16),
    lineHeight: normalize(24),
  },
  iconPlus:{
    height: normalize(20),
    aspectRatio: 1,
    marginLeft: normalizeHorizontal(8)
  }
});
