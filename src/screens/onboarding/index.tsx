import React, {FC, useState} from 'react';
import {FlatList, Dimensions, View} from 'react-native';
import svgIcons from '../../assets/Icons';
import Dot from './components/Dot/Dot';
import OnboardingItem from './components/OnboardingItem/OnboardingItem';
import Login from './components/Login/Login';
import styles from './styles';

const DATA = [
  {
    key: 1,
    icon: svgIcons.Icon1,
    mainText: `Set your own schedule`,
    subText: `Easy to plan and set the schedule that fits you the best. Work extra on weekends, or evenings.`,
  },
  {
    key: 2,
    icon: svgIcons.Icon2,
    mainText: `Get new customer bookings`,
    subText: `Get bookings even when you are asleep.`,
  },
  {
    key: 3,
    icon: svgIcons.Icon3,
    mainText: `Get paid`,
    subText: `All you have to do to start getting paid is connect your bank account.`,
  },
  {
    key: 4,
    icon: svgIcons.Icon4,
    mainText: `Get reviews, and showcase your portfolio`,
    subText: `Get verified customer reviews to build your brands markability online.`,
  },
];

const {width} = Dimensions.get('window');

const OnboardingScreen: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onScrollHandler = (event: any) => {
    const leftSpace = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(leftSpace / width);
    setActiveIndex(currentIndex);
  };
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <OnboardingItem
            icon={item.icon}
            mainText={item.mainText}
            subText={item.subText}
          />
        )}
        onScroll={onScrollHandler}
        horizontal
        pagingEnabled
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}
        style={styles.itemsFlatList}
      />
      <View style={styles.wrapper}>
        <FlatList
          data={DATA}
          renderItem={({index}) => (
            <Dot index={index} activeIndex={activeIndex} />
          )}
          horizontal
          pagingEnabled
          disableIntervalMomentum
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dotsFlatList}
        />
        <Login />
      </View>
    </>
  );
};

export default OnboardingScreen;
