import React  from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Camera from './screens/Camera';
import {Provider} from 'react-redux';
import store from './store';

export default class App extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={styles.container}>
                    <Camera />
                </SafeAreaView>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',   
    }
});