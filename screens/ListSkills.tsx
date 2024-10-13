import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';

export default function ListSkills() { 
    // Initialise Skills as an array of strings
    const [Skills, setSkills] = useState<string[]>([]);
    const [txtSkill, setSkill] = useState('');

    // Function to render the list of skills
    const renderSkills = () => { 
        const arrOutput = []; // Initialise an empty array to hold the skill elements
        
        //  for loop is used to iterate over the array of skills (Skills[]) 
        // and create a list of <Text> components to display each skill on the screen
        for (let i = 0; i < Skills.length; i++) { 
            arrOutput.push(
                <Text key={i} style={styles.skillText}>{Skills[i]}</Text>
            ); 
        }
        
        return arrOutput; // Return the array of Text elements
    };

    return ( 
        <View style={styles.appContainer}> 
            <SafeAreaView> 
                <ScrollView> 
                    <View style={styles.mainPicture}> 
                        <Image style={styles.BannerImage} source={require('../img/banner.png')} resizeMode='contain'/> 
                    </View>
                    <Text style={styles.welcomeText}>List your skills!</Text> 
                    <View style={styles.inputContainer}> 
                        <TextInput 
                            style={styles.textInput} 
                            placeholder='Your skills' 
                            onChangeText={newText => setSkill(newText)} 
                            value={txtSkill} 
                        /> 
                        <Button 
                            title='Add Skill' 
                            onPress={() => {
                                if (txtSkill) {  // Ensure there's a skill to add
                                    setSkills([...Skills, txtSkill]); // Spread operator to add new skill
                                    setSkill('');  // Clear input field after adding skill
                                }
                            }} 
                        /> 
                    </View> 
                    <View style={styles.skillContainer}> 
                        {renderSkills()}
                    </View> 
                </ScrollView> 
            </SafeAreaView> 
        </View> 
    ); 
};

const styles = StyleSheet.create({ 
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
    BannerImage: { 
        height: 350, 
        alignContent: 'center', 
    }, 
    inputContainer: { 
        flexDirection:'row', 
        justifyContent: 'space-between', 
        alignItems:'center', 
        marginBottom:24, 
        borderBottomWidth:1, 
        borderBottomColor:'#cccccc' 
    }, 
    textInput: { 
        borderWidth:1, 
        borderColor:'#cccccc', 
        width:'70%', 
        margin:8, 
        padding:8, 
    }, 
    appContainer: { 
        flex:1, 
        padding:50, 
        paddingHorizontal:16, 
    }, 
    skillContainer: { 
        marginTop: 20,
    }, 
    skillText: { 
        fontSize: 15, 
        marginVertical: 5, 
        borderBottomColor: '#000000', 
        borderBottomWidth: 0.5, 
    },
});
