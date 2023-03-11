import React, { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container } from './index.styles';
import { CheckListContext } from '../../../contexts/checklist';
import Text from '../../../components/Common/Text';
import ActionCard from '../../../components/Common/ActionCard';
import Button from '../../../components/Common/Button';
import { displayDate } from '../../../utils/date';

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
      <ActionCard variant="h1" onPress={() => {}}>
        <Text variant="h4">
          ID:
          {data['_id']}
        </Text>
        <Text variant="h4">
          Farm:
          {data.farmer?.name}
        </Text>
        <Text variant="h4">
          Farmer:
          {data.from?.name}
        </Text>
        <Text variant="h4">
          City:
          {data.farmer?.city}
        </Text>
        <Text variant="h4">
          Date:
          {displayDate(data.created_at)}
        </Text>
        <Text variant="h4">
          Type:
          {data.type}
        </Text>
        <Text variant="h4">
          Milk Produced (L):
          {data.amount_of_milk_produced}
        </Text>
        <Text variant="h4">
          To:
          {data.to.name}
        </Text>
        <Text variant="h4">
          Number of Cows (Head):
          {data.number_of_cows_head}
        </Text>
        <Text variant="h4">
          Had Supervision?
          {String(data.had_supervision)}
        </Text>
        <Text variant="h4">
          Location:
          {data.location.latitude}
          ,
          {data.location.longitude}
        </Text>
        <Text variant="h4">
          Updated:
          {displayDate(data.updated_at)}
        </Text>
      </ActionCard>

      <Button title="Edit" onPress={onEditPress} />
    </Container>
  );
};

export default Details;
