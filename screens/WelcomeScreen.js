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
        style={styles.ImageBackgroundyw}
        source={Images.Space}
        resizeMode={'cover'}
      >
        <View style={styles.View_8j} pointerEvents={'auto'}>
          <View
            style={[styles.ViewcG, { backgroundColor: theme.colors.strong }]}
            pointerEvents={'auto'}
          >
            <Image
              style={styles.Imagecg}
              resizeMode={'cover'}
              source={Images.Logo}
            />
          </View>
        </View>

        <View style={styles.ViewVf} pointerEvents={'auto'}>
          <View
            style={[
              styles.Viewxm,
              {
                backgroundColor: theme.colors.surface,
                borderRadius: theme.roundness,
              },
            ]}
          >
            <Text style={[styles.Texti7, { color: theme.colors.strong }]}>
              {'Enjoy the head start!'}
            </Text>

            <Text style={[styles.TextOf, { color: theme.colors.medium }]}>
              {
                'Use these screens to quickly iterate on your idea. To update a component, select an element on the canvas or in the component tree on the left, and make your changes to Styles, Configs, Data, or Actions on the right. '
              }
            </Text>

            <Button
              onPress={() => {
                try {
                  navigation.navigate('FeedScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.ButtonmP}
              type={'solid'}
            >
              {'Check Out Your App →'}
            </Button>
            <>
              {!Constants['APP_ENV'] ? null : (
                <Text style={[styles.TextR8, { color: theme.colors.light }]}>
                  {'APP_ENV: '}
                  {Constants['APP_ENV']}
                </Text>
              )}
            </>
          </View>
        </View>
        <View pointerEvents={'auto'} />
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagecg: {
    width: 96,
    height: 96,
    alignSelf: 'center',
  },
  ViewcG: {
    paddingLeft: 18,
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 18,
    justifyContent: 'center',
    opacity: 0.75,
  },
  View_8j: {
    flexGrow: 1,
    flexShrink: 0,
    maxHeight: '50%',
    justifyContent: 'flex-end',
    marginLeft: 12,
    marginRight: 12,
  },
  Texti7: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 30,
  },
  TextOf: {
    lineHeight: 21,
    fontSize: 15,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ButtonmP: {
    marginTop: 18,
  },
  TextR8: {
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
  },
  Viewxm: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 18,
    maxWidth: 400,
    opacity: 1,
  },
  ViewVf: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 12,
    marginRight: 12,
  },
  ImageBackgroundyw: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(WelcomeScreen);
