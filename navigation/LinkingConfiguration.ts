import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          LoginScreen: {
            screens: {
              LoginScreen: 'Fazer Login'
            }
          },
          UserScreen: {
            screens: {
              UserScreen: 'Usuário'
            }
          }
        },
      },
      NotFound: '*',
    },
  },
};
