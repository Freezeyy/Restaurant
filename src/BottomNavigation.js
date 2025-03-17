import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import HomeScreen from './screens/home';
import BookScreen from './screens/books';
import ProfileScreen from './screens/profile';

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'book', title: 'Book', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'album' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    book: BookScreen,
    notifications: NotificationsRoute,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
