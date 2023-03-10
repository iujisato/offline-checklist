import React, { useContext } from 'react';
import { Text } from 'react-native';
import { CheckListContext } from '../../contexts/checklist';
import { Container } from './index.styles';

const Home = () => {
  const { allCheckLists } = useContext(CheckListContext);

  return (
    <Container>
      {allCheckLists.map((checkList) => (
        <Text>{checkList['_id']}</Text>
      ))}
    </Container>
  );
};

export default Home;
