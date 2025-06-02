import { useState } from "react";
import { Box, Tabs, Tab, Typography, Container, Paper } from "@mui/material";
// Importa componentes visuais do Material-UI

import UserForm from "./components/UserForm"; // Formulário de cadastro de usuário
import UserList from "./components/UserList"; // Lista de usuários cadastrados
import { getUsers, saveUser } from "./utils/storage"; // Funções para manipular o localStorage

export default function App() {
  // Estado que controla a aba ativa (0 = Cadastro, 1 = Lista de usuários)
  const [tab, setTab] = useState(0);

  // Estado que armazena a lista de usuários, iniciando com o que está salvo no localStorage
  const [users, setUsers] = useState(getUsers());

  // Função chamada ao trocar de aba
  const handleTabChange = (event, newValue) => {
    setTab(newValue); // Atualiza a aba ativa
  };

  // Função chamada ao cadastrar um novo usuário
  const handleAddUser = (user) => {
    saveUser(user);      // Salva o usuário novo no localStorage
    setUsers(getUsers()); // Atualiza o estado 'users' com a lista mais recente
  };

  return (
    // Container centralizado com largura máxima 'sm' e margem superior
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      {/* Card com sombra e padding */}
      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Título centralizado */}
        <Typography variant="h4" align="center" gutterBottom>
          Cadastro de Usuários
        </Typography>
        {/* Abas para navegação entre cadastro e lista */}
        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Cadastrar Usuário" />
          <Tab label="Usuários Cadastrados" />
        </Tabs>
        {/* Conteúdo que muda conforme a aba ativa */}
        <Box sx={{ mt: 3 }}>
          {/* Se aba 0, mostra o formulário de cadastro */}
          {tab === 0 && <UserForm onAddUser={handleAddUser} />}
          {/* Se aba 1, mostra a lista de usuários cadastrados */}
          {tab === 1 && <UserList users={users} />}
        </Box>
      </Paper>
    </Container>
  );
}
