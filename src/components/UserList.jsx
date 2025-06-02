import { List, ListItem, ListItemText, Divider, Typography, Box } from "@mui/material";

export default function UserList({ users }) {
  if (users.length === 0) {
    return (
      <Typography sx={{ textAlign: "center", color: "#aaa", mt: 4 }}>
        Nenhum usuário cadastrado ainda.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      <List sx={{ width: '100%' }}>
        {users.map((user, idx) => (
          <Box key={idx}>
            <ListItem
              sx={{
                background: "rgba(4, 81, 234, 0.03)",
                mb: 2,
                borderRadius: 2,
                boxShadow: "0 2px 8px 0 rgba(4, 81, 234, 0.03)",
                px: 2,
              }}
            >
              <ListItemText
                primary={
                  <span style={{ fontWeight: 600, color: "#246bfd" }}>
                    {user.name}
                  </span>
                }
                secondary={
                  <span style={{ color: "#586069" }}>{user.email}</span>
                }
              />
            </ListItem>
            {idx < users.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Box>
  );
}
