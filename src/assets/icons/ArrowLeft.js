import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons/faArrowLeftLong';

const ArrowLeft = (props) => (
  <FontAwesomeIcon icon={faArrowLeftLong} {...props} />
);

export default ArrowLeft;
