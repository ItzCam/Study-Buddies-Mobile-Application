import React, {useEffect, useContext, useState} from 'react';
import styles from "../EditProfileScreen/styles";
import {Image, View, ScrollView, Pressable, Text, Title} from "react-native";
import StyledButton from "../../TitleComponents/StyledButton";
import {auth} from "../../../db/firestore";
import {db} from '../../../db/firestore';
import ReactFileUploadMobile from 'react-file-upload-mobile';
import ReactDOM from 'react-dom'

const ProfileScreen = ({navigation}) => {
    const userID = auth.currentUser.uid;
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState(null);
    const [userRole, setUserRole] = useState(null);

    async function getUserData() {
        const docRef = db.collection('users').doc(userID)
        const userData = await docRef.get();
        let userName = userData.data().name;
        setUserName(userName);
        let userEmail = userData.data().email;
        setUserEmail(userEmail);
        let userRole = userData.data().role;
        setUserRole(userRole);
    }

    useEffect(() => {
        getUserData();
    }, []);

    function logout() {
        auth.signOut()
            .then((result) => {
                console.log(result)
                console.log('User signed out sucecssfully')
            })
            .catch((error) => {
                console.log(error)
            });

        navigation.replace('Title')
    }
    state = {
        photo: null,
      };
    
      handleChoosePhoto = () => {
        const options = {
          noData: true,
        };
        ImagePicker.launchImageLibrary(options, (response) => {
          if (response.uri) {
            this.setState({ photo: response });
          }
        });
      };
    render()
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
            <View style={styles.imageView}>
                <Image
                    source={require('../../../assets/images/profile3.png')}
                    style={styles.image}
                />
            </View>
            <View>
                <Text style={styles.title}>Name: {userName}</Text>
                <Text style={styles.title2}>Email: {userEmail}</Text>
                <Text style={styles.title3}>Preferred Role: </Text>
                <Text style={styles.title4}>Status: </Text>
            </View>
            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Edit Profile '}
                    onPress={() => navigation.navigate('Edit Profile')}
                />
                <Pressable onPress={logout}>
                    <StyledButton
                        style={styles.button}
                        text={'Log out'}
                    />
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default ProfileScreen;
