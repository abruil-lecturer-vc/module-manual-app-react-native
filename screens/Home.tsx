import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { RootStackParamList } from './RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {

    /** ------------------------- Declaring consts ---------------------------------
     *  Declaring state variables used to store name & surname,
     *  as well as calling useState hook to retrieve the updated state
     */
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');
    const [Error, setError] = useState(false);

    /** declaring a useNavigation hook to get access to the navigation object.
     *  PlayerScreenProp specifies the type of navigation prop expected in the 
     *  PlayerScreen
     */
    const navigation = useNavigation<homeScreenProp>();
    /** ----------------------------------------------------------------- */

    console.log("App starting up");

    /** SafeAreaView: Ensures content is positioned within the visible area of the screen */
    return (
        <View>           
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.mainPicture}>
                        <Image style={styles.ImageSize} source={require('../img/welcome_to_react.png')}/>
                    </View>
                    <Text style={styles.welcomeText}>Welcome to your React App!</Text>
                    <Text style = {Error? styles.red : styles.blank}> 
                        {Error?"Please add all the fields":""} </Text>
                    <View style={styles.InputFlex}>
                        <Text style={styles.HeadingText}>Enter Name:</Text>
                        <TextInput style={styles.InputBoxes} placeholder="First Name"
                                    onChangeText={newText => setName(newText)} />
                    </View>
                    <View style={styles.line} />
                    <View style={styles.InputFlex}>
                        <Text style={styles.HeadingText}>Enter Surname:</Text>
                        <TextInput style={styles.InputBoxes} placeholder="Surname"
                                    onChangeText={newText => setSurname(newText)} />
                    </View>
                    <View style={styles.line} />
                    <Button title="Add User" onPress={() => {

                        if ((isEmpty(Name)==false) && (isEmpty(Surname)==false)) { 
                            navigation.navigate('ViewDetails', 
                                { 
                                    Name : Name, Surname : Surname
                                }); 
                                    console.log("Name: " + Name + 
                                                " Surname: " + Surname); 
                                    setError(false); 
                                } 
                                else 
                                { 
                                    setError(true); 
                                }
                    }} />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

/** 
    - (value == null):
        This checks if value is either null or undefined. 
        The == operator here is used for a loose equality check, which means 
        it returns true if value is null or undefined.

    - (value.hasOwnProperty('length') && value.length === 0):
        This checks if value has a length property 
        (which is typically present in strings, arrays, and certain other objects) 
        and if the length is 0. This condition identifies empty strings or empty arrays, for example.

    - (value.constructor === Object && Object.keys(value).length === 0):
        This checks if value is an object (using value.constructor === Object) 
        and if that object has no own enumerable properties (i.e., it has no keys). 
        This condition is used to identify empty objects, like {}. 
*/
function isEmpty (value: string) { 
    return ( 
        // null or undefined 
        (value == null) || 
        // has length and it's zero 
        (value.hasOwnProperty('length') && value.length === 0) || 
        // is an Object and has no keys 
        (value.constructor === Object && Object.keys(value).length === 0) 
    ) 
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainPicture: {
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        paddingTop: 40,
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center'
    },
    ImageSize: {
        width: 350,
        height: 350
    },
    HeadingText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 6,

    },
    InputBoxes: {
        paddingBottom: 10,
        paddingStart: 10,
        fontSize: 18,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
    },
    InputFlex: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-evenly'
    },
    red: { 
        color: 'red', 
        fontWeight: 'bold', 
        fontSize: 26, 
        textAlign: 'center' 
    },
    blank: { 
        fontSize: 0, 
    }
});
