import React, { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, DetailsContainer, ButtonWrapper } from './index.styles';
import { CheckListContext } from '../../../contexts/checklist';
import Text from '../../../components/Common/Text';
import Button from '../../../components/Common/Button';
import { displayDate } from '../../../utils/date';
import Header from '../../../components/Common/Header';
import DataRow from '../../../components/Common/DataRow';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { getCheckList } = useContext(CheckListContext);

  const data = getCheckList(route.params.id);

  const onEditPress = () => { navigation.navigate('Update', { id: route.params.id }); };

  if (!data) {
    return <Text>Something Wrong</Text>;
  }

  return (
    <Container>
      <Header title="Details" showBackArrow />

      <DetailsContainer>
        <DataRow label="ID" data={data['_id']} />
        <DataRow label="Farmer" data={data.from?.name} />
        <DataRow label="Farm" data={data.farmer?.name} />
        <DataRow label="City" data={data.farmer?.city} />
        <DataRow label="Date" data={displayDate(data.created_at)} />
        <DataRow label="Type" data={data.type} />
        <DataRow label="Milk Produced (L)" data={data.amount_of_milk_produced} />
        <DataRow label="Number of Cows (Head)" data={data.number_of_cows_head} />
        <DataRow label="Supervisor" data={data.to.name} />
        <DataRow label="Had Supervision?" data={data.had_supervision ? 'Yes' : 'No'} />
        <DataRow label="Location" data={`${data.location.latitude}, ${data.location.longitude}`} />
        <DataRow label="Updated" data={displayDate(data.updated_at)} />
      </DetailsContainer>

      <ButtonWrapper>
        <Button title="Edit" onPress={onEditPress} />
      </ButtonWrapper>
    </Container>
  );
};

export default Details;
