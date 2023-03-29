import React from 'react';
import { Text } from 'react-native';

import sectionTitleStyles from './sectionTitleStyles';

const sectionTitle = ({title}) => {
    
    const styles = sectionTitleStyles;

    return (
        <Text style={styles.title}>{title}</Text> 
    );
}

export default sectionTitle;