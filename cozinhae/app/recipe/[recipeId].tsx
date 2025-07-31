// app/recipe/[recipeId].tsx

import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Receita } from '../../constants/types';
import styles from '../../assets/styles/recipeStyles';

export default function DetalhesReceita() {
  const { recipeId } = useLocalSearchParams<{ recipeId: string }>();
  const [receita, setReceita] = useState<Receita | null>(null);

  useEffect(() => {
    if (recipeId) {
      fetch(`https://api-receitas-pi.vercel.app/receitas/${recipeId}`)
        .then((res) => res.json())
        .then(setReceita)
        .catch((err) => console.error('Erro ao buscar detalhes:', err));
    }
  }, [recipeId]);

  if (!receita) return <Text style={styles.carregando}>Carregando...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: receita.link_imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{receita.receita}</Text>

      <Text style={styles.subtitulo}>Ingredientes</Text>
      <Text style={styles.texto}>{receita.ingredientes}</Text>

      <Text style={styles.subtitulo}>Modo de Preparo</Text>
      <Text style={styles.texto}>{receita.modo_preparo}</Text>
    </ScrollView>
  );
}
