/* eslint-disable indent */
import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MediaContext} from '../contexts/MediaContext';

const Geolocation = () =>  {
const [ready, setReady] = useState(false);
const {where, setWhere} = useContext(MediaContext);
const [error, setError] = useState(null);

    useEffect(() => {
        const geoOptions = {
            enableHighAccuracy: true,
            timeOut: 20000,
            maximumAge: 60 * 60 * 24,
        };
        setReady(false)
        setError(null)
        navigator.geolocation.getCurrentPosition(geoSuccess,
                                                geoFailure,
                                                geoOptions);
    }, []);

    const geoSuccess = (position) => {
        console.log(position.coords.latitude);

       setReady(true);
       setWhere({lat: position.coords.latitude, lng: position.coords.longitude});
    }
    const geoFailure = (err) => {
        setError(err.message);
}
        return (
            <View style={styles.container}>
                { !ready && (
                console.log('success')
                )}
                { error && (
                console.log('errorius')
                )}
                { ready && (

                    <Text style={styles.big}>{
                    `Latitude: ${where.lat}
                    Longitude: ${where.lng}`
                    }</Text>
                )}
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    big: {
        fontSize: 48,
    },
});
export default Geolocation;