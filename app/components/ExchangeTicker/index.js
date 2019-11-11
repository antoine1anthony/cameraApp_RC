import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default ExchangeTicker = (props) => {
    const {header, subHeader, sector, sectorPercentage, refresh} = props;
    return (
        <TouchableOpacity onPress={refresh}>
            <View style={styles.tickerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.headerText}>
                        {header}
                    </Text>
                    <Text style={styles.subHeaderText}>
                        Last refreshed: 
                    </Text>
                    <Text style={styles.subHeaderText}>
                        {subHeader}
                    </Text>
                </View>
                <View style={styles.sectorContainer}>
                    <Text style={styles.sectorText}>
                        {sector}
                    </Text>
                    <Text style={styles.subSectorText}>
                        {sectorPercentage}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tickerContainer:{
        backgroundColor: 'transparent',
        borderColor: '#F41D78',
        borderRadius: 55,
        borderStyle: 'solid',
        borderWidth: 5,
        height: Dimensions.get('window').height/2,
        width: Dimensions.get('window').width/1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer:{
        height: 100,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectorContainer:{
        height: 100,
        width: 100,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#F41D78',
        fontSize: 18
    },
    subHeaderText: {
        color: '#F41D78',
        fontSize: 16,
        marginTop: 20
    },
    sectorText: {
        color: '#F41D78',
        fontSize: 16,
        marginTop: 25
    },
    subSectorText: {
        color: '#F41D78',
        fontSize: 16,
        marginTop: 20
    }
});

ExchangeTicker.propTypes={
    header: PropTypes.string.isRequired, 
    subHeader: PropTypes.string.isRequired, 
    sector: PropTypes.string.isRequired, 
    sectorPercentage: PropTypes.string.isRequired, 
    refresh: PropTypes.func.isRequired
}