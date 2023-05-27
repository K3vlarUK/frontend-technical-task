import {  FlatList, Dimensions } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import Slide from './Slide';
import { Dog } from '../../context/types';

interface CarouselProps {
    dogData: Dog[];
    onDeleteDogPress: (dog: Dog) => void;
}

const Carousel: React.FC<CarouselProps> = ({dogData, onDeleteDogPress}) => {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
    indexRef.current = index;
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2,
        keyExtractor: useCallback(e => e.id, []),
        getItemLayout: useCallback(
          (_, index) => ({
            index,
            length: windowWidth,
            offset: index * windowWidth,
          }),
          []
        ),
      };

    return (
        <FlatList
        data={dogData}
        style={{ flex: 1 }}
        renderItem={({ item }) => {
            return <Slide dog={item} onDeletePress={onDeleteDogPress} />;
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
        />
    );
}

export default Carousel