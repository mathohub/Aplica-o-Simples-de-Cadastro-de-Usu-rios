import { useState } from "react";
import { TextField, Button, Stack, Alert } from "@mui/material";

export default function UserForm({ onAddUser }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    onAddUser(form);
    setForm({ name: "", email: "" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Nome"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="E-mail"
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          required
        />
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
        {success && <Alert severity="success">Usuário cadastrado com sucesso!</Alert>}
      </Stack>
    </form>
  );
}
