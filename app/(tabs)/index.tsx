import { Image, StyleSheet, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRef, useState } from 'react';

export default function HomeScreen() {
  const [todoInput, setTodoInput] = useState('');

  const [todoItems, setTodoItems] = useState<string[]>([]);

  const handleAddTodo = () => {
    if (todoInput.trim()) { // Prevent adding empty todos
      setTodoItems([...todoItems, todoInput.trim()]);
      setTodoInput(''); // Clear input
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <TextInput placeholder='add a todo' value={todoInput} onChangeText={setTodoInput}/>
        <Button title='Add' onPress={handleAddTodo} />
        {todoItems.map((todo, index) => (
          <ThemedText key={index}>{todo}</ThemedText>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
