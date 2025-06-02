import { useState } from "react";
import { Box, Tabs, Tab, Typography, Container, Paper } from "@mui/material";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { getUsers, saveUser } from "./utils/storage";

export default function App() {
  const [tab, setTab] = useState(0);
  const [users, setUsers] = useState(getUsers());

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleAddUser = (user) => {
    saveUser(user);
    setUsers(getUsers());
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Cadastro de Usuários
        </Typography>
        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Cadastrar Usuário" />
          <Tab label="Usuários Cadastrados" />
        </Tabs>
        <Box sx={{ mt: 3 }}>
          {tab === 0 && <UserForm onAddUser={handleAddUser} />}
          {tab === 1 && <UserList users={users} />}
        </Box>
      </Paper>
    </Container>
  );
}
