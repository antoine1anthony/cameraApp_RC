import React  from 'react';
import { StyleSheet, Button, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

export default CaptureButton = props => {
        return (
            <TouchableHighlight style={styles.captureButton}>
                <Button onPress={props.onClick} title="Capture" accessibilityLabel="Learn more about this button"/>
            </TouchableHighlight>
        );
}
const styles = StyleSheet.create({
    captureButton: {
        marginBottom:30,
        width:160,
        borderRadius:10,
        backgroundColor: "white"
    }
});

CaptureButton.prototype = {
    onClick: PropTypes.func.isRequired
}
