export type RootStackParamList = {
    /** Home screen is not expecting any parameters */
    Home: undefined;

    /** Allow the ViewDetails screen to expect two parameters: Name and Surname,
     *  both of type string. This allows the ViewDetails screen to correctly expect the parameters
     */
    ViewDetails: { Name : string; Surname: string; };
};