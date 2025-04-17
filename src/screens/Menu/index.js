import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';

export default () => {
    const navigation = useNavigation();
    	
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await database().ref('/menu').once('value');
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const list = Object.keys(data).map(key => ({
                        id: key,
                        ...data[key],
                    }));
                    setTodos(list);
                }
            } catch (error) {
                console.error("Firebase Database Error:", error);
            }
        };
    
        fetchData();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Menu</Text>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                        <Text style={styles.availability}>{item.availability ? 'Available' : 'Unavailable'}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    name: {
        fontSize: 18,
    },
    price: {
        color: 'green',
    },
    availability: {
        color: 'gray',
    },
});