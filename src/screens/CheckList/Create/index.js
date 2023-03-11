import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { CheckListContext } from '../../../contexts/checklist';
import { integerRegex, floatRegex } from '../../../utils/validation';
import { normalizeDataFromForm } from '../../../utils/checklist';
import TextInput from '../../../components/Common/TextInput';
import CheckBox from '../../../components/Common/CheckBox';
import Button from '../../../components/Common/Button';
import Picker from '../../../components/Common/Picker';
import { Container, ScrollContainer } from './index.styles';
import { SYNC_TYPES, CHECKLIST_TYPES } from '../constants';

const Create = () => {
  const navigation = useNavigation();
  const { storeValues, syncValuesToApi } = useContext(CheckListContext);
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      hadSupervision: false,
      type: { label: CHECKLIST_TYPES.BPA, key: CHECKLIST_TYPES.BPA },
    },
  });

  const onSubmit = async (data) => {
    const normalizedData = normalizeDataFromForm({ data });

    try {
      await storeValues({ data: normalizedData, synced: SYNC_TYPES.PENDING_CREATE });
      await syncValuesToApi();
      navigation.goBack();
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
          }}
          render={({
            field: {
              onChange, value, onBlur, onFocus,
            },
          }) => (
            <Picker
              label="Type"
              onChange={onChange}
              value={value}
              data={[
                { label: CHECKLIST_TYPES.BPA, key: CHECKLIST_TYPES.BPA },
                { label: CHECKLIST_TYPES.ANTIBIOTIC, key: CHECKLIST_TYPES.ANTIBIOTIC },
                { label: CHECKLIST_TYPES.BPF, key: CHECKLIST_TYPES.BPF },
              ]}
              error={errors?.type?.message}
              onBlur={onBlur}
              onFocus={onFocus}
            />
          )}
          name="type"
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

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              label="Had Supervision?"
              onValueChange={onChange}
              value={value}
            />
          )}
          name="hadSupervision"
        />
      </ScrollContainer>

      <Button disabled={!isValid} title="Create CheckList" onPress={handleSubmit(onSubmit)} />
    </Container>
  );
};

export default Create;
