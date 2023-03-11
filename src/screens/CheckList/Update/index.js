import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRoute, useNavigation } from '@react-navigation/native';
import { CheckListContext } from '../../../contexts/checklist';
import { integerRegex, floatRegex } from '../../../utils/validation';
import { normalizeDataToForm, normalizeDataFromForm } from '../../../utils/checklist';
import { merge } from '../../../utils/function';
import TextInput from '../../../components/Common/TextInput';
import Button from '../../../components/Common/Button';
import { Container, ScrollContainer } from './index.styles';
import { SYNC_TYPES } from '../constants';

const Update = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { getCheckList, storeValues, syncValuesToApi } = useContext(CheckListContext);

  const checkList = getCheckList(route.params.id);

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: normalizeDataToForm(checkList),
  });

  const onSubmit = async (data) => {
    const normalizedData = normalizeDataFromForm({ data, changeUpdatedAt: true });
    const mergedData = merge(checkList, normalizedData);
    const isPendingCreation = mergedData['_synced'] === SYNC_TYPES.PENDING_CREATE;

    try {
      await storeValues({
        data: mergedData,
        synced: isPendingCreation ? SYNC_TYPES.PENDING_CREATE : SYNC_TYPES.PENDING_UPDATE,
      });
      await syncValuesToApi();

      navigation.navigate('Dashboard');
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Container>
      <ScrollContainer>
        <Controller
          control={control}
          rules={{
            required: 'Field is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Farmer Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.farmerName?.message}
            />
          )}
          name="farmerName"
        />

        <Controller
          control={control}
          rules={{
            required: 'Field is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Farm Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.farmName?.message}
            />
          )}
          name="farmName"
        />

        <Controller
          control={control}
          rules={{
            required: 'Field is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Farm City"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.farmCity?.message}
            />
          )}
          name="farmCity"
        />

        <Controller
          control={control}
          rules={{
            required: 'Field is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Supervisor Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.supervisorName?.message}
            />
          )}
          name="supervisorName"
        />

        <Controller
          control={control}
          rules={{
            required: 'Field is required',
            pattern: {
              value: floatRegex,
              message: 'Only integers and decimals accepted',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Amount of Milk (L)"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.amountOfMilk?.message}
            />
          )}
          name="amountOfMilk"
        />

        <Controller
          control={control}
          rules={{
            required: 'Field is required',
            pattern: {
              value: integerRegex,
              message: 'Only integers accepted',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Amount of Cows (Head)"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.amountOfCows?.message}
            />
          )}
          name="amountOfCows"
        />
      </ScrollContainer>

      <Button disabled={!isValid} title="Update CheckList" onPress={handleSubmit(onSubmit)} />
    </Container>
  );
};

export default Update;
