import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Receita } from '../constants/types';
import styles from '../assets/styles/homeStyles';

const CATEGORIAS = ['doce', 'salgado', 'agridoce', 'favoritos'];

export default function Home() {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('doce');
  const [favoritos, setFavoritos] = useState<Receita[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (categoriaSelecionada === 'favoritos') return;

    fetch(`https://api-receitas-pi.vercel.app/receitas/tipo/${categoriaSelecionada}`)
      .then((res) => res.json())
      .then(setReceitas)
      .catch((err) => console.error('Erro ao buscar receitas:', err));
  }, [categoriaSelecionada]);

  const toggleFavorito = (receita: Receita) => {
    const isFavorita = favoritos.some((fav) => fav.id === receita.id);
    if (isFavorita) {
      setFavoritos((prev) => prev.filter((fav) => fav.id !== receita.id));
    } else {
      setFavoritos((prev) => [...prev, receita]);
    }
  };

  const isFavorita = (id: number) => favoritos.some((fav) => fav.id === id);

  const renderReceita = ({ item }: { item: Receita }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/recipe/${item.id}`)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.link_imagem }} style={styles.imagem} />
      <View style={styles.receitaHeader}>
        <Text style={styles.titulo}>{item.receita}</Text>
        <TouchableOpacity onPress={() => toggleFavorito(item)}>
          <Text style={styles.coracao}>
            {isFavorita(item.id) ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  // Fonte de dados da lista
  const listaExibida =
    categoriaSelecionada === 'favoritos' ? favoritos : receitas;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categorias</Text>
      <View style={styles.categorias}>
        {CATEGORIAS.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.botaoCategoria,
              cat === categoriaSelecionada && styles.botaoSelecionado,
            ]}
            onPress={() => setCategoriaSelecionada(cat)}
          >
            <Text
              style={[
                styles.textoBotao,
                cat === categoriaSelecionada && styles.textoSelecionado,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {listaExibida.length === 0 ? (
        <Text style={{ textAlign: 'center', color: '#999', marginTop: 20 }}>
          Nenhuma receita encontrada.
        </Text>
      ) : (
        <FlatList
          data={listaExibida}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderReceita}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}
