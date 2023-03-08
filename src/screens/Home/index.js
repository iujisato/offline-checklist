import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getCheckLists } from '../../services/checkListApi';

const Home = () => {
  const [lists, setLists] = useState([]);

  const getData = async () => {
    const data = await getCheckLists();

    console.log({ data });

    setLists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
