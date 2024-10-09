import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

export default function ViewDetailsScreen() { 

    /** ---------------------- Declaring consts -----------------------------
   * useRoute() hook allows us to access the route information for the 
   *  ViewDetails screen.
   */
    const route = useRoute();
    
    /** Destructuring the params property of route object to access
   *  the name & surname parameters.
   */
    const { Name, Surname } = route.params as {
        Name: string;
        Surname: string;
    }

    /** Storing the state of the selected value. 
     *  selectedValue will be used to store the number of which radio button
     *  has been selected.
    */
    const [selectedValue, setSelectedValue] = useState('0');

    const [ImageBlock, setImage] = useState<any>(null);

    const [blockArray] = useState(["", "", "","" ]);
    blockArray[0]=(''); 
    blockArray[1]=require('../img/react.png'); 
    blockArray[2]=require('../img/kotlin.png'); 
    blockArray[3]=require('../img/html.png');

    const [iSelected, setIntValue] = useState(0);
    /** ----------------------------------------------------------------- */
    
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
    
        <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}> 
            <Text style={{fontWeight: "bold", fontSize:20}}>Welcome {Name} {Surname}</Text> 
            <Text> Please select what is your favourite Programing language: </Text> 
        </View> 

        <View style={styles.RadioContainer}> 
            <View style={styles.radioGroup}> 
                <View style={styles.radioButton}> 
                    
                    {/* This radio button component renders a radio button that will appear checked 
                    if the selectedValue is 1, and unchecked otherwise. When the button is pressed, 
                    it updates the selectedValue to 1 */}
                    <RadioButton.Android value="1" 
                                        status={selectedValue == '1' ? 'checked' : 'unchecked'} 
                                        onPress={() => setSelectedValue('1')} color="#007BFF" /> 
                    <Text style={styles.radioLabel}> React Native </Text> 
                </View> 

                <View style={styles.radioButton}> 
                    <RadioButton.Android value="2" 
                                        status={selectedValue == '2' ? 'checked' : 'unchecked'} 
                                        onPress={() => setSelectedValue('2')} color="#007BFF" /> 
                    <Text style={styles.radioLabel}> Kotlin </Text> 
                </View> 

                <View style={styles.radioButton}> 
                    <RadioButton.Android value="3" 
                                        status={selectedValue == '3' ? 'checked' : 'unchecked'} 
                                        onPress={() => setSelectedValue('3')} 
                                        color="#007BFF"/> 
                    <Text style={styles.radioLabel}> HTML and CSS </Text> 
                </View> 
            </View> 
        </View> 
        <View style = { {flex: 1}}> 
            <Text style = { {fontWeight: "bold",flex: 0,paddingTop: 40 ,
                            justifyContent: 'center',textAlign :'center',
                            alignItems: 'center'}}> View what your favourite programing language says about you:</Text>
            
            <Button title = "Process" 
                    onPress={() => { 
                        const selected = Number(selectedValue);
                        // setIntValue(Number(selectedValue));
                        setImage(blockArray[selected]);
                        // let image = null;

                        // switch (selectedValue) { 
                        //     case "1": 
                        //         image = (require('../img/react.png')); 
                        //     break; 
                            
                        //     case "2": 
                        //         image = (require('../img/kotlin.png')); 
                        //     break; 
                            
                        //     case "3": 
                        //         image = (require('../img/html.png')); 
                        //     break; 
                        //     default: null; 
                        // } 
                        
                        // setImage(image); // Updates ImageBlock
                    }}/>

            <View style = {styles.container}> 
                {/** Conditionally rendering the Image component. 
                 * If ImageBlock is truthy (i.e., not null, undefined, false, 0, or an empty string), 
                 * the expression inside the parentheses (...) will be executed, rendering the Image component.
                 * If ImageBlock is falsly, nothing will be rendered. */}
                {ImageBlock && (<Image source={ImageBlock} style={styles.ViewImage}/>)}
            </View> 
        </View>
    </View>
    ); 
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    RadioContainer: { 
        flex: 0, 
        backgroundColor: '#F5F5F5', 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    radioGroup: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        marginTop: 20, 
        borderRadius: 8, 
        backgroundColor: 'white', 
        padding: 16, 
        elevation: 4, 
        shadowColor: '#000', 
        shadowOffset: { 
            width: 0, 
            height: 2, 
        }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
    }, 
    radioButton: { 
        flexDirection: 'row', 
        alignItems: 'center', 
    }, 
    radioLabel: { 
        marginLeft: 8, 
        fontSize: 16, 
        color: '#333', 
    },
    ViewImage: { 
        width: 350, 
        height: 350, 
        alignContent: 'center' 
    }
});