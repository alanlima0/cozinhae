import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffefc',
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  categorias: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  botaoCategoria: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  botaoSelecionado: {
    backgroundColor: '#ff8c42',
  },
  textoBotao: {
    color: '#555',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  textoSelecionado: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '600',
    flexShrink: 1,
    color: '#333',
  },
  receitaHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coracao: {
    fontSize: 22,
    marginLeft: 10,
  },
});

export default styles;
