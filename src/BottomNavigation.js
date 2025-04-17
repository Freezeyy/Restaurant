import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import HomeScreen from './screens/Menu';
import BookScreen from './screens/Booking';
import ProfileScreen from './screens/Profile';
import NotificationScreen from './screens/Notification';

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Menu', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'book', title: 'Booking', focusedIcon: 'notebook-edit', unfocusedIcon: 'notebook-edit-outline' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'face-man', unfocusedIcon: 'face-man-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    book: BookScreen,
    notifications: NotificationScreen,
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
