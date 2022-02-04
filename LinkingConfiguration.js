/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

const prefix = Linking.createURL('/');
const linking = {
  prefixes: [prefix],
  config: {
    screens: {},
  },
};

export default linking;
