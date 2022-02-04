import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const FeedScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      hasSafeArea={false}
      scrollable={false}
    >
      <View pointerEvents={'auto'} />
      <View style={styles.Viewtq}>
        <ExampleDataApi.FetchListOfProductsGET limit={20}>
          {({ loading, error, data, doFetch }) => {
            const fetchData = data;
            if (!fetchData || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return (
              <FlatList
                data={fetchData}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <View style={styles.ViewbK}>
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('ArticleViewScreen', {
                              articleId: listData?.id,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={{ backgroundColor: theme.colors.surface }}
                      >
                        <View
                          style={[
                            styles.Viewcw,
                            {
                              backgroundColor: theme.colors.surface,
                              borderColor: theme.colors.divider,
                            },
                          ]}
                        >
                          <View style={styles.Viewf4}>
                            <Text
                              style={[
                                theme.typography.custom30,
                                styles.Texten,
                                { color: theme.colors.primary },
                              ]}
                            >
                              {listData?.date}
                            </Text>

                            <Text
                              style={[
                                theme.typography.headline6,
                                { color: theme.colors.strong },
                              ]}
                              numberOfLines={2}
                            >
                              {listData?.title}
                            </Text>
                          </View>

                          <View>
                            <ImageBackground
                              style={styles.ImageBackgroundU8}
                              resizeMode={'cover'}
                              source={{ uri: `${item && item['img_src']}` }}
                            />
                          </View>
                        </View>
                      </Touchable>
                    </View>
                  );
                }}
                numColumns={1}
              />
            );
          }}
        </ExampleDataApi.FetchListOfProductsGET>
      </View>
      <View pointerEvents={'auto'} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Texten: {
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  Viewf4: {
    paddingTop: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    paddingRight: 12,
  },
  ImageBackgroundU8: {
    width: '100%',
    height: 200,
  },
  Viewcw: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  ViewbK: {
    paddingTop: 12,
    left: 2,
  },
  Viewtq: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(FeedScreen);
