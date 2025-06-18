import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

const data = [
  { id: 1, name: 'James Davis' },
  { id: 2, name: 'Sarah Smith' },
  { id: 3, name: 'Xavier King' },
  { id: 4, name: 'Amanda Clark' },
];

const UseMemoExample = () => {
  const [searchInput, setSearchInput] = useState('');
  
   const filteredData = useMemo(() => {
    const lower = searchInput.toLowerCase();
    return data.filter(item => item.name.toLowerCase().includes(lower));
  }, [searchInput]);

  return (
     <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Search name..."
        value={searchInput}
        onChangeText={setSearchInput}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text style={{ fontSize: 16 }}>{item.name}</Text>}
      />
    </View>
  );
};

export default UseMemoExample;
