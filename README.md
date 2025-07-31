# 📱 App de Receitas 🍽️

Aplicativo mobile desenvolvido em **React Native com Expo** que permite aos usuários navegar por receitas organizadas por categorias e marcar suas receitas favoritas.

---

## 🚀 Funcionalidades

- 🔍 **Listagem de receitas** por categoria (doce, salgado, agridoce, favoritos)
- 📂 **Categorias dinâmicas**
- ❤️ **Favoritar receitas** com um toque no coração
- 🧠 **Estado de favoritos mantido na sessão**
- 🖼️ **Imagens** carregadas de uma **API externa**
- 📱 Interface responsiva e amigável

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://expo.github.io/router/)
- [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)

---

## 📦 Instalação e Execução

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```
2. **Instale as dependências**:

   ```bash
   npm install
   # ou
   yarn
   ```
3. **Execute o projeto com o Expo**:

   ```bash
   npx expo start
   ```

---

## 📁 Estrutura de Pastas

```
.
├── app/
│   ├── index.tsx           # Tela principal com categorias e receitas
│   └── recipe/[id].tsx     # Tela de detalhes da receita
├── assets/
│   └── styles/
│       └── homeStyles.ts   # Estilos da tela principal
├── constants/
│   └── types.ts            # Tipagem da entidade Receita
├── README.md
└── package.json
```

---

## 🌐 API Utilizada

As receitas são carregadas da seguinte API:

```
https://api-receitas-pi.vercel.app/receitas/tipo/[categoria]
```

Exemplo:

```
https://api-receitas-pi.vercel.app/receitas/tipo/doce
```

---

## 🔮 Futuras melhorias

- 💾 Salvar favoritos com `AsyncStorage`
- 🔍 Adicionar busca por nome
- 📝 Permitir cadastro de novas receitas
- 🌐 Suporte a múltiplos idiomas
