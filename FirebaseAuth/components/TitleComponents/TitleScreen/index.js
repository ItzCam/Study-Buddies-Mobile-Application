import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const TitleItem = (props) => {
    return (
        <View style={styles.titleContainer}>


            {/*TODO: change background image*/}
            <ImageBackground
                source={require('../../../assets/images/pyramiduse.jpg')}
                style={styles.image}
            />


            {/*Title message*/}
            <View style={styles.titleView}>
                <Text style={styles.title}> Welcome to Study Buddies! </Text>
                <Text style={styles.subtitle}> Login or Sign Up </Text>
            </View>

            <View style={styles.buttonView}>
                <StyledButton style={styles.button} text={"Sign Up"}/>
                <StyledButton style={styles.button} text={"Login"}/>
            </View>


        </View>
    );
}

export default TitleItem;