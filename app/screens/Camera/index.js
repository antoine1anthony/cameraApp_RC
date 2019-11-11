import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExchangeTicker from '../../components/ExchangeTicker';
import CaptureButton from '../../components/CaptureButton';
import {imgRecRequest} from '../../store/actions/imgRec';
import {sp500Request} from '../../store/actions/sp500';
import constants from '../../constants'


const PendingView = () => (
    <View
      style={styles.pendingView}
    >
      <Text>Waiting</Text>
    </View>
  );

class Camera extends React.Component {
    constructor(props){
        super(props);
        this.props.sp500Request();
    }

    takePicture = async camera => {
        // Set options for RNCamera
        const options = {
            quality: 0.5,
            base64: true
        };
        // Get the base64 version of the image
        const data = await camera.takePictureAsync(options)
        // Get the identified image
        const imageData = data.base64;
        this.props.imgRecRequest(imageData)
    }

    render() {
        const {metaData, rankA, information, lastRefreshed, it} = constants;
        return (
            <RNCamera  
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
                }}
            >
               {({camera, status, recordAudioPermissionStatus}) => {
                   const {spData} = this.props;
                    if (status !== 'READY') {
                        return <PendingView />;
                    } else if (spData != undefined) {
                        console.log(spData);
                        return (
                            <View style={styles.cameraObjectContainer}>
                                <View styles={styles.exchangeContainer}>
                                    <ExchangeTicker 
                                        header={spData[metaData][information]} 
                                        subHeader={spData[metaData][lastRefreshed]}
                                        sector={it}
                                        sectorPercentage={spData[rankA][it]}
                                        refresh={this.props.sp500Request}
                                    />
                                </View>
                                <View style={styles.buttonContainer}>
                                    <CaptureButton onClick={() => this.takePicture(camera)}/>
                                </View>
                            </View>
                        );
                    }
                }}
            </RNCamera>
        );
    }
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    pendingView:{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      },
    exchangeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = (state) => {
    const {sp} = state;
    return {
        spData: sp.currentData
    }
  }

export default connect(mapStateToProps, {imgRecRequest, sp500Request})(Camera);

Camera.propTypes={
    imgRecRequest: PropTypes.func.isRequired,
    sp500Request: PropTypes.func.isRequired,
    spData: PropTypes.object
}