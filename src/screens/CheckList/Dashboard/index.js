import React, { useContext, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Container, ButtonWrapper } from './index.styles';
import { CheckListContext } from '../../../contexts/checklist';
import { displayDate } from '../../../utils/date';
import Text from '../../../components/Common/Text';
import Button from '../../../components/Common/Button';
import ActionCard from '../../../components/Common/ActionCard';
import Header from '../../../components/Common/Header';
import Loading from '../../../components/Common/Loading';
import DataRow from '../../../components/Common/DataRow';

const Dashboard = () => {
  const navigation = useNavigation();
  const { allCheckLists, loading, syncValuesFromApi, syncValuesToApi } = useContext(CheckListContext);

  const goToDetails = (item) => { navigation.navigate('Details', { id: item['_id'] }); };

  useFocusEffect(
    useCallback(() => {
      syncValuesFromApi();
    }, [])
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header title="Checklists" />
      <FlatList
        data={allCheckLists}
        keyExtractor={(item) => item['_id']}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ActionCard variant="h1" onPress={() => goToDetails(item)}>
            <DataRow label="Farmer" data={item.from?.name} />
            <DataRow label="Farm" data={item.farmer?.name} />
            <DataRow label="City" data={item.farmer?.city} />
            <DataRow label="Date" data={displayDate(item?.created_at)} />
          </ActionCard>
        )}
      />
      <ButtonWrapper>
        <Button title="New CheckList" onPress={() => navigation.navigate('Create')} />
      </ButtonWrapper>
    </Container>
  );
};

export default Dashboard;
