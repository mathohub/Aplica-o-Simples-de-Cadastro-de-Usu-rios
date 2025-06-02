import { List, ListItem, ListItemText, Divider, Typography } from "@mui/material";

export default function UserList({ users }) {
  if (users.length === 0) {
    return <Typography>Nenhum usuário cadastrado ainda.</Typography>;
  }

  return (
    <List>
      {users.map((user, idx) => (
        <div key={idx}>
          <ListItem>
            <ListItemText
              primary={user.name}
              secondary={user.email}
            />
          </ListItem>
          {idx < users.length - 1 && <Divider />}
        </div>
      ))}
    </List>
  );
}
