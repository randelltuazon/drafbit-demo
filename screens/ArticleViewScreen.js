import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
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
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={true}>
      <View pointerEvents={'auto'} />
      <View style={styles.ViewbZ} pointerEvents={'auto'}>
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
                  style={styles.ImageBackground_6P}
                  resizeMode={'cover'}
                  source={{ uri: `${data && data['img_src']}` }}
                />
                <View style={styles.View_28}>
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
                      styles.TextGJ,
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
                      styles.Textti,
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
                    style={styles.ButtonkY}
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
  ImageBackground_6P: {
    width: '100%',
    height: 250,
  },
  TextGJ: {
    marginTop: 12,
  },
  Textti: {
    marginTop: 12,
  },
  ButtonkY: {
    marginTop: 12,
  },
  View_28: {
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  ViewbZ: {
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(ArticleViewScreen);
