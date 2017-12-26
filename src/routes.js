import { StackNavigator } from 'react-navigation';

import TimelinePage from './pages/TimelinePage';

const RootNavigator = StackNavigator({
  timeline: {
    screen: TimelinePage,
    path: 'timeline'
  },
}, {
  initialRouteName: 'timeline',
});

export default RootNavigator;
