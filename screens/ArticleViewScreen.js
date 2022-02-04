import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ArticleViewScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={true}>
      <View pointerEvents={'auto'} />
      <View style={styles.ViewV3} pointerEvents={'auto'}>
        <ExampleDataApi.FetchGetArticleGET
          id={props.route?.params?.articleId ?? 2}
        >
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
              <View>
                <ImageBackground
                  style={styles.ImageBackgroundi5}
                  resizeMode={'cover'}
                  source={{ uri: `${data && data['img_src']}` }}
                />
                <View style={styles.ViewsG}>
                  <Text
                    style={[
                      theme.typography.custom27,
                      { color: theme.colors.primary },
                    ]}
                  >
                    {fetchData?.date}
                  </Text>

                  <Text
                    style={[
                      theme.typography.headline5,
                      styles.TextWn,
                      { color: theme.colors.strong },
                    ]}
                  >
                    {fetchData?.title}
                  </Text>

                  <Text
                    style={[
                      theme.typography.subtitle1,
                      { color: theme.colors.light },
                    ]}
                  >
                    {'By: '}
                    {fetchData?.authors}
                  </Text>

                  <Text
                    style={[
                      theme.typography.body1,
                      styles.Text_8t,
                      { color: theme.colors.medium },
                    ]}
                    numberOfLines={10}
                  >
                    {fetchData?.content}
                  </Text>

                  <Button
                    onPress={() => {
                      try {
                        Linking.openURL(`${data && data['url']}`);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={styles.ButtonSC}
                    type={'outline'}
                  >
                    {'Read More →'}
                  </Button>
                </View>
              </View>
            );
          }}
        </ExampleDataApi.FetchGetArticleGET>
      </View>
      <View pointerEvents={'auto'} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageBackgroundi5: {
    width: '100%',
    height: 250,
  },
  TextWn: {
    marginTop: 12,
  },
  Text_8t: {
    marginTop: 12,
  },
  ButtonSC: {
    marginTop: 12,
  },
  ViewsG: {
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  ViewV3: {
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(ArticleViewScreen);
