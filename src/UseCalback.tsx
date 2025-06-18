import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

const data = [
  { id: 1, name: 'James Davis' },
  { id: 2, name: 'Sarah Smith' },
  { id: 3, name: 'Xavier King' },
  { id: 4, name: 'Amanda Clark' },
];

export default function UseCallbackExample() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = useCallback((text:string)=>{
    setSearchInput(text)
  },[])

  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Search..."
        value={searchInput}
        onChangeText={handleSearchChange}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
      />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
