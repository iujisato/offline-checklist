import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './index.styles';
import { CheckListContext } from '../../../contexts/checklist';
import { displayDate } from '../../../utils/date';
import Text from '../../../components/Common/Text';
import Button from '../../../components/Common/Button';
import ActionCard from '../../../components/Common/ActionCard';

const Dashboard = () => {
  const navigation = useNavigation();
  const { allCheckLists, loading } = useContext(CheckListContext);

  const goToDetails = (item) => { navigation.navigate('Details', { id: item['_id'] }); };

  if (loading) {
    return <Text>Loading</Text>;
  }

  return (
    <Container>
      <Button title="New CheckList" onPress={() => navigation.navigate('Create')} />

      <FlatList
        data={allCheckLists}
        keyExtractor={(item) => item['_id']}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ActionCard variant="h1" onPress={() => goToDetails(item)}>
            <Text variant="h4">
              Farmer:
              {item?.from?.name}
            </Text>
            <Text variant="h4">
              Farm:
              {item?.farmer?.name}
            </Text>
            <Text variant="h4">
              City:
              {item?.farmer?.city}
            </Text>
            <Text variant="h4">
              Date:
              {displayDate(item?.created_at)}
            </Text>
          </ActionCard>
        )}
      />
    </Container>
  );
};

export default Dashboard;
