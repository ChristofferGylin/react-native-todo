import * as React from 'react';

import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { useState } from 'react';
import NewScreen from './screens/NewScreen';
import uuid from 'react-native-uuid';

const Stack = createNativeStackNavigator();

export default function App() {

  const [todos, setTodos] = useState([
    { title: 'Ta sommarlov', description: 'Gå ut i solen', isDone: false },
    { title: 'Gör klart app', description: 'Skriv kod', isDone: false },
    { title: 'Börja med app', description: 'Starta expo projekt', isDone: true },
  ])

  React.useEffect(() => {

    setTodos((oldTodos) => {

      const newTodos = [...oldTodos];

      newTodos.forEach(todo => {
        todo.id = uuid.v4();
        todo.time = new Date(Date.now());
      });

      return newTodos;

    })

  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Group>
          <Stack.Screen
            name='Todos'
            options={({ navigation, route }) => ({
              title: 'Dos & Dones',
              headerRight: () => (
                <Button
                  title='New'
                  onPress={() => navigation.navigate('New')}
                />
              )
            })}
          >
            {(props) => <HomeScreen {...props} todos={todos} />}
          </Stack.Screen>
          <Stack.Screen
            name='Details'
            options={({ navigation, route }) => ({
              title: route.params.title,
              headerLeft: () => {
                <Button
                  title='Back'
                  onPress={() => { navigation.goBack() }}
                />
              },

            })}>
            {(props) => <DetailsScreen {...props} todos={todos} setTodos={setTodos} />}
          </Stack.Screen>
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name='New'
            options={({ navigation, route }) => ({
              headerRight: () => (
                <Button
                  title='Done' />
              ),
              headerLeft: () => (
                <Button
                  title='Cancel'
                  onPress={() => navigation.navigate('Todos')} />
              ),
            })}
          >
            {(props) => <NewScreen {...props} todos={todos} setTodos={setTodos} />}
          </Stack.Screen>
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  );
}



