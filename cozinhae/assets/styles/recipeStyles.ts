import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffefc',
    padding: 16,
  },
  carregando: {
    flex: 1,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#666',
  },
  imagem: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
    color: '#ff8c42',
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    textAlign: 'justify',
  },
});

export default styles;
