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
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: 16,
        padding: 16,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 12px 0 rgba(31,38,135,0.08)"
      }}
    >
      <Stack spacing={2}>
        <TextField
          label="Nome"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          sx={{ borderRadius: 2, background: "#fff" }}
        />
        <TextField
          label="E-mail"
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          required
          sx={{ borderRadius: 2, background: "#fff" }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            background: 'linear-gradient(90deg, #246bfd 60%, #21c6fb 100%)',
            fontWeight: 'bold',
            borderRadius: 2,
            boxShadow: '0 2px 8px 0 rgba(36, 107, 253, 0.09)'
          }}
        >
          Cadastrar
        </Button>
        {success && <Alert severity="success">Usuário cadastrado com sucesso!</Alert>}
      </Stack>
    </form>
  );
}