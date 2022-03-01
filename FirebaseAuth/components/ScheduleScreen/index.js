import React from "react";
import {Pressable, View, Text, Button} from "react-native";
import {Agenda} from 'react-native-calendars';
import styles from "../ScheduleScreen/styles";
import {auth, db} from "../../db/firestore";
import getIsAdmin from "../Admin/getIsAdmin";
import firebase from "firebase/app";

let isAdmin;
let userID, userName, userRole;
let locationsCollection = {};
let scheduleCollection = {};
let markedItems = {};

const ScheduleScreen = () => {
    const [items, setItems] = React.useState({});
    const [selectedButton, setSelectedButton] = React.useState('All schedule');

    let today = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

    async function getData() {
        isAdmin = await getIsAdmin();
        await getUserData();
        await getlocations();
        await getschedule();
    }

    async function getUserData() {
        userID = auth.currentUser.uid;
        const userData = await db.collection('users').doc(userID).get();
        userName = userData.data().name;
        userRole = userData.data().role;
    }

    // get location collections information
    async function getlocations() {
        locationsCollection = {};
        await db.collection('locations').get().then((snapshot) => {
            snapshot.docs.map(doc => {
                if (doc !== undefined) {
                    locationsCollection[doc.id] = doc.data();
                }
            })
        })
    }

    async function getschedule() {
        scheduleCollection = {};
        await db.collection('schedule').get().then((snapshot) => {
            snapshot.docs.map(doc => {
                if (doc !== undefined) {
                    scheduleCollection[doc.id] = doc.data();
                }
            })
        })
      
        generateItems(selectedButton);
    }

    function generateItems(shiftButton) {
        // key = shiftID, value = shift
        let shiftItem = {};
        for (const [key, value] of Object.entries(scheduleCollection)) {
            let addItem = false;
            if (shiftButton === 'My schedule') {
                if (userID === value.driverID || userID === value.friendlyVisitorID) {
                    addItem = true;
                }
            } else if (shiftButton === 'All schedule') {
                addItem = true;
            } else if (shiftButton === 'Open schedule') {
                if (((value.position === 'Driver' || value.position === 'Both') && (userRole === 'Driver' || userRole === 'Both')) ||
                    ((value.position === 'Friendly Visitor' || value.position === 'Both') && (userRole === 'Friendly Visitor' || userRole === 'Both'))) {
                    if (userID !== value.driverID && userID !== value.friendlyVisitorID) {
                        addItem = true;
                    }
                }
            }
            if (addItem) {
                if (shiftItem[value['date']] === undefined)
                    shiftItem[value['date']] = [];
                let shiftObject = Object.assign(scheduleCollection[key], {marked: true, id: key});
                shiftItem[value['date']].push(shiftObject);
            }
        }

        markedItems = {};
        for (const key of Object.keys(shiftItem)) {
            markedItems[key] = shiftItem[key][0];
        }

        setItems(shiftItem);
    }

    function acceptShift(shift, assignedRole) {
        db.collection('schedule').doc(shift.id).update({[assignedRole]: userName});
        db.collection('schedule').doc(shift.id).update({[assignedRole + 'ID']: userID});
        getData();
    }

    async function dropShift(shift, assignedRole) {
        await db.collection('schedule').doc(shift.id).update({[assignedRole]: firebase.firestore.FieldValue.delete()});
        await db.collection('schedule').doc(shift.id).update({[assignedRole + 'ID']: firebase.firestore.FieldValue.delete()});
        getData();
    }

    async function deleteShift(shift) {
        await db.collection('schedule').doc(shift.id).delete();
        getData();
    }

    function renderItem(shift) {
        if (Object.keys(locationsCollection).length === 0)
            return;

        let futureDate = true;
        if (new Date(shift.time).getTime() < new Date(today).getTime()) {
            futureDate = false;
        }

        let acceptView = false;
        let potentialRole;
        if (shift.position === 'Driver' || shift.position === 'Both') {
            if (userRole === 'Driver' || userRole === 'Both') {
                if (shift.driver === undefined) {
                    acceptView = true;
                    potentialRole = 'driver';
                }
            }
        }

        if (shift.position === 'Friendly Visitor' || shift.position === 'Both') {
            if (userRole === 'Friendly Visitor' || userRole === 'Both') {
                if (shift.friendlyVisitor === undefined) {
                    if (potentialRole === undefined) {
                        acceptView = true;
                        potentialRole = 'friendlyVisitor';
                    }
                }
            }
        }

        let assignedRole;
        let dropView = false;
        if (userID === shift.driverID) {
            assignedRole = 'driver';
            acceptView = false;
            dropView = true;
        } else if (userID === shift.friendlyVisitorID) {
            assignedRole = 'friendlyVisitor';
            acceptView = false;
            dropView = true;
        }

        let routeInfo = locationsCollection[shift.route];

            return (
            <View style={{
                marginRight: '5%',
                marginVertical: '2.5%',
                backgroundColor: 'white',
                flex: 1,
                borderRadius: 5,
                borderColor: '#302f90',
                padding: '5%'
            }}>
                <View style={styles.postTextView}>
                    <Text style={styles.firstLine}>Route {shift.route}</Text>
                    <Text style={styles.firstLine}>{routeInfo.time}</Text>
                </View>
                <View style={styles.postTextView}>
                    <Text style={styles.secondLine}>Info: {routeInfo.desc}</Text>
                    <Text style={styles.secondLine}>Stops: {routeInfo.approxStops}</Text>
                </View>
                <View style={styles.postTextView}>
                    <Text style={styles.thirdLine}>Positions: {shift.position === 'Both' ? 'Driver & Friendly Visitor' : shift.position}</Text>
                </View>
                <View style={styles.postTextView}>
                    {(shift.position === 'Driver' || shift.position === 'Both') && <Text style={styles.secondLine}>Driver: {shift.driver}</Text>}
                    {(shift.position === 'Friendly Visitor' || shift.position === 'Both') && <Text style={styles.secondLine}>Friendly Visitor: {shift.friendlyVisitor}</Text>}
                </View>
                {futureDate && <View style={styles.buttonView}>
                    {acceptView && <Button title={'Accept'} color={'#018704'} onPress={function () {
                        acceptShift(shift, potentialRole);
                    }}/>}
                    {dropView && <Button title={'Drop'} color={'#a22629'} onPress={function () {
                        dropShift(shift, assignedRole);
                    }}/>}
                    <Button title={'More Info'} color={'#302f90'}/>
                    {isAdmin && <Button title={'Delete'} color={'#a22629'} onPress={function () {
                        deleteShift(shift);
                    }}/>}
                </View>}
            </View>
        );
    }

    if (isAdmin === undefined)
        getData();

    return (
        <View style={{flex: 1}}>
            <View style={styles.shiftButtonView}>
                <Pressable style={(selectedButton === 'My schedule' ? styles.selectedShiftButton : styles.shiftButton)} onPress={function() {
                    setSelectedButton('My schedule');
                    generateItems('My schedule');
                }}>
                    <Text style={(selectedButton === 'My schedule' ? styles.selectedText : styles.text)}>Mine</Text>
                </Pressable>
                <Pressable style={(selectedButton === 'All schedule' ? styles.selectedShiftButton : styles.shiftButton)} onPress={function() {
                    setSelectedButton('All schedule');
                    generateItems('All schedule');
                }}>
                    <Text style={(selectedButton === 'All schedule' ? styles.selectedText : styles.text)}>All</Text>
                </Pressable>
                <Pressable style={(selectedButton === 'Open schedule' ? styles.selectedShiftButton : styles.shiftButton)} onPress={function() {
                    setSelectedButton('Open schedule');
                    generateItems('Open schedule');
                }}>
                    <Text style={(selectedButton === 'Open schedule' ? styles.selectedText : styles.text)}>Open</Text>
                </Pressable>
            </View>
            <Agenda
                items={items}
                renderItem={renderItem}
                selected={today}
                showClosingKnob={true}
                markedDates={markedItems}
                onRefresh={getData}
                onCalendarToggled={getschedule}
                style={styles}
                theme={{
                    agendaKnobColor: '#302f90',
                    agendaTodayColor: '#302f90',
                    dotColor: '#302f90',
                    selectedDayBackgroundColor: '#E1EDFE',
                    selectedDayTextColor: '#302f90',
                    selectedDotColor: '#302f90',
                    todayTextColor: '#A22629',
                }}
            />
        </View>
    );
};

export default ScheduleScreen;
