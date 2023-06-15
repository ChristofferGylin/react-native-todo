import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import { AntDesign } from '@expo/vector-icons';


const Todo = ({ navigation, route, title, id, isDone }) => {

    let textStyle = [styles.todoText];

    if (isDone) {

        textStyle.push(styles.todoDone);

    }

    return (

        <TouchableOpacity
            style={styles.todo}
            onPress={() => { navigation.navigate('Details', { id, title }) }}>
            <Text style={textStyle}>{title}</Text>
            <AntDesign name="right" size={24} color='rgb(71 85 105)' />
        </TouchableOpacity>

    )

}

export default Todo;