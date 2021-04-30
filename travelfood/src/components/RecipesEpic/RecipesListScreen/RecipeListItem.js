import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const URL_IMAGE = "https://spoonacular.com/recipeImages/"

const RecipeListItem = ({item, navigation}) => { 

    console.log(" LE TEST ULTIME " + item.image)
    const img = require('../../../../assets/images/recipes/boeuf.jpg')
    return (
        <TouchableOpacity 
                onPress={() => {
                    navigation.navigate("RecipesDetails", {
                        id: item.id
                    });
                }}>
            <View style={styles.container}>
                <Image source={{uri: item.image}} style={styles.image}></Image>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderBottomWidth: 0.2,
        borderBottomColor: "grey",
        paddingTop: 10,
        paddingBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 25,
        width: 300
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 25,
        width: 300
    },
    type: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 25,
        width: 300
    },
    restaurant: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 25,
        width: 300
    } 
})

export default RecipeListItem