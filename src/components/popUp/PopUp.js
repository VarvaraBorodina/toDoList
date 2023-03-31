import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import PopUpStyles from './PopUpStyles';

const PopUp = ({isVisible, children}) => {

  styles = PopUpStyles;

  return (  
    <Modal transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.modal}>
          { children }
        </View>
      </View>
    </Modal>
  );
}

export default PopUp;