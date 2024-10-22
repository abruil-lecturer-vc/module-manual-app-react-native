import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

export default function ListSkills() { 
    // Initialise Skills as an array of strings
    const [Skills, setSkills] = useState<string[]>([]);
    const [txtSkill, setSkill] = useState('');

    const removeSkillHandler = (index: number) => { 
        setSkills((currentSkills) => currentSkills.filter((skill, i) => i !== index)); 
    };

    // Function to render the list of skills
    const renderSkills = () => { 
        const arrOutput = []; // Initialise an empty array to hold the skill elements
        
        //  for loop is used to iterate over the array of skills (Skills[]) 
        // and create a list of <Text> components to display each skill on the screen
        for (let i = 0; i < Skills.length; i++) { 
            // arrOutput.push(
            //     <Text key={i} style={styles.skillText}>{Skills[i]}</Text>
            // ); 

            arrOutput.push( 
                <View key={i} style={styles.inputContainer}> 
                    <Text style={styles.skillText}> {Skills[i]}</Text> 
                    <TouchableOpacity onPress={() => removeSkillHandler(i)} style={styles.deleteButton}> 
                        <Text style={styles.deleteButtonText}>Remove</Text> 
                    </TouchableOpacity> 
                </View> );
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


