import { FlatList, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles';
import { useEffect, useState } from 'react';
import Todo from '../components/Todo';

const HomeScreen = ({ navigation, todos }) => {

    const [dos, setDos] = useState([]);
    const [dones, setDones] = useState([]);

    useEffect(() => {

        let newDos = [];
        let newDones = [];

        todos.forEach(todo => {

            if (todo.isDone) {

                newDones.push(todo);

            } else {

                newDos.push(todo);

            }

        });

        setDos(newDos);
        setDones(newDones);


    }, [todos])


    return (
        <View style={styles.container}>

            <View style={styles.innerContainer}>
                <Text style={styles.heading}>Dos</Text>
                <FlatList
                    data={dos}
                    renderItem={({ item }) => (
                        <Todo title={item.title} id={item.id} isDone={item.isDone} navigation={navigation} />
                    )}
                    keyExtractor={item => `todo#${item.id}`}
                />
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>Dones</Text>
                <FlatList
                    data={dones}
                    renderItem={({ item }) => (
                        <Todo title={item.title} id={item.id} isDone={item.isDone} navigation={navigation} />
                    )}
                    keyExtractor={item => `todo#${item.id}`}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default HomeScreen;