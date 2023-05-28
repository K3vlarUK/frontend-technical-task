import {  FlatList, Dimensions, Text } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import Slide from './Slide';
import { Dog, SavedDogs } from '../../context/types';
import styled from '@emotion/native';

interface CarouselProps {
    dogData: SavedDogs[];
    onDeleteDogPress: (dog: Dog) => void;
}

const View = styled.View`
    paddingBottom: 25px;
    alignItems: center;
`

// Not even going to pretend I came up with all of this, my experiences with Carousels all
// Very much came from external packages so I had to do some digging to get something working
// Using what was supplied

const Carousel: React.FC<CarouselProps> = ({dogData, onDeleteDogPress}) => {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
    indexRef.current = index;
    const onScroll = useCallback((event: any) => {
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
        keyExtractor: useCallback((e: any) => e.id, []),
        getItemLayout: useCallback(
          (_: any, index: number) => ({
            index,
            length: windowWidth,
            offset: index * windowWidth,
          }),
          []
        ),
      };

    return (
        <>
            <FlatList
            data={dogData}
            style={{ flex: 1 }}
            renderItem={({ item, index }) => {
                return <Slide dog={item} onDeletePress={onDeleteDogPress} key={index} />;
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            {...flatListOptimizationProps}
            />
            <View>
                <Text>Dog {index + 1} of {dogData.length}</Text>
                <Text>Swipe To view all your saved dogs.</Text>
            </View>
        </>
    );
}

export default Carousel