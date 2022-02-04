import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        style={styles.ImageBackground_4m}
        source={Images.Space}
        resizeMode={'cover'}
      >
        <View style={styles.ViewW2} pointerEvents={'auto'}>
          <View
            style={[styles.Viewoj, { backgroundColor: theme.colors.strong }]}
            pointerEvents={'auto'}
          >
            <Image
              style={styles.ImageVB}
              resizeMode={'cover'}
              source={Images.Logo}
            />
          </View>
        </View>

        <View style={styles.Viewta} pointerEvents={'auto'}>
          <View
            style={[
              styles.ViewdB,
              {
                backgroundColor: theme.colors.surface,
                borderRadius: theme.roundness,
              },
            ]}
          >
            <Text style={[styles.TextkM, { color: theme.colors.strong }]}>
              {'Enjoy the head start!'}
            </Text>

            <Text style={[styles.TextMg, { color: theme.colors.medium }]}>
              {
                'Use these screens to quickly iterate on your idea. To update a component, select an element on the canvas or in the component tree on the left, and make your changes to Styles, Configs, Data, or Actions on the right. '
              }
            </Text>

            <Text style={[styles.Text_8A, { color: theme.colors.light }]}>
              {'You can safely delete this screen at any time.'}
            </Text>
            <>
              {!Constants['APP_ENV'] ? null : (
                <Text style={{ color: theme.colors.strong }}>
                  {'APP_ENV: '}
                  {Constants['APP_ENV']}
                </Text>
              )}
            </>
          </View>

          <Button
            onPress={() => {
              try {
                navigation.navigate('FeedScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Buttonb5}
            type={'solid'}
          >
            {'Check Out Your App →'}
          </Button>
        </View>
        <View pointerEvents={'auto'} />
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageVB: {
    width: 96,
    height: 96,
    alignSelf: 'center',
  },
  Viewoj: {
    paddingLeft: 18,
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 18,
    justifyContent: 'center',
    opacity: 0.75,
  },
  ViewW2: {
    flexGrow: 1,
    flexShrink: 0,
    maxHeight: '50%',
    justifyContent: 'flex-end',
    marginLeft: 12,
    marginRight: 12,
  },
  TextkM: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 30,
  },
  TextMg: {
    lineHeight: 21,
    fontSize: 15,
    fontFamily: 'System',
    fontWeight: '400',
  },
  Text_8A: {
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
  },
  ViewdB: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 18,
    maxWidth: 400,
    opacity: 1,
  },
  Buttonb5: {
    marginTop: 18,
  },
  Viewta: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 12,
    marginRight: 12,
  },
  ImageBackground_4m: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(WelcomeScreen);
