 import { createStackNavigator } from 'react-navigation'

import Main from './pages/main'

export default createStackNavigator({
  Main
}, {
   navigationOptions: { // Add cor ao Menu Superior
      headerStyle: {
         backgroundColor: "#0000FF"
      },
      headerTintColor: "#FFF"
   }
}
);