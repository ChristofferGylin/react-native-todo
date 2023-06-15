import { Button, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles';
import { useEffect, useRef, useState } from 'react';
import uuid from 'react-native-uuid';


const NewScreen = ({ routes, navigation, todos, setTodos }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const titleRef = useRef(null);
    const descRef = useRef(null);

    const handleSubmit = () => {
        const id = uuid.v4();
        const time = new Date(Date.now());
        const newTodo = { title, description, isDone: false, id, time }

        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        navigation.navigate('Todos');
    }

    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <Button
                    title='Done'
                    onPress={() => handleSubmit()}
                />
            )
        })

    }, [navigation, title, description]);

    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <TextInput
                    style={styles.titleInput}
                    onChangeText={text => setTitle(text)}
                    value={title}
                    placeholder='Title'
                    ref={titleRef}
                />
                <TextInput
                    multiline
                    numberOfLines={10}
                    style={styles.descInput}
                    onChangeText={(text) => {
                        setDescription(text)
                    }}
                    value={description}
                    placeholder='Description'
                    ref={descRef}
                />



                <StatusBar style="auto" />
            </View>
        </TouchableWithoutFeedback>

    );
}

export default NewScreen;