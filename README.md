# 🎬 Cineverse

O **Cineverse** é um aplicativo mobile de rede social para apaixonados por cinema, desenvolvido como projeto final da disciplina **Programação Mobile (2º GQ)**.  
A proposta do app é oferecer uma experiência completa para descoberta, avaliação e interação entre usuários sobre filmes.

---

## 👥 Equipe

| Integrante | Responsabilidade |
|-----------|------------------|
| **Malu de Faria Neves Bezerra** | Integração da API (TMDB) |
| **Vinicius Anderson Cavalcanti Silva** | Banco de Dados & Backend (Supabase) |
| **Pedro Victor Gomes de Araújo** | Front-End (Navegação & Layout) |
| **Leandro Lima da Silva** | Front-End (Componentes & Interação) |

---

## 📱 Sobre o Projeto

O **Cineverse** permite que usuários:

- Descubram filmes populares  
- Atribuam notas e comentários  
- Salvem seus favoritos  
- Interajam com outros usuários  
- Personalizem seus perfis  

### 🧰 Tecnologias Utilizadas

- **React Native & Expo** – Framework principal  
- **Expo Router** – Navegação baseada em arquivos  
- **Supabase** – Autenticação, banco de dados e storage  
- **TMDB API** – Base de dados de filmes (títulos, sinopses, posters)  
- **TypeScript** – Tipagem estática e segurança  

---

## 🚀 Funcionalidades

### 🔗 Navegação
- Sistema completo com **Tabs** e **Stacks** via Expo Router.

### 🌐 Estado Global
- Gerenciamento de sessão, perfil e status de filmes via **React Context** (`MovieStatusContext`).

### 🖥 Telas Implementadas
- **Home** (busca de filmes)  
- **Salvos**  
- **Perfil**  
- **Detalhes do Filme**  
- **Usuários**  
- **Sobre**  

### ⭐ Interações do Usuário
- Curtir e salvar filmes  
- Modal de avaliação com estrelas interativas  
- Upload de foto de perfil  
- Visualização de reviews da comunidade  

### 🗄 Integração com Supabase
- **CRUD Completo**: criar, ler, atualizar e deletar reviews  
- **Relacionamentos** entre usuários, reviews e filmes  
- **Autenticação** por e-mail e senha  
- **Storage** para fotos de perfil  

### 🎨 Estilização
- Tema escuro moderno  
- Fontes personalizadas (Inter)  
- Skeleton loading para feedback visual  

