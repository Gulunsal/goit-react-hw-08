import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "../../../redux/contacts/operations";
import { selectFilteredContacts } from "../../../redux/contacts/selectors";
import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar,
  ListItemSecondaryAction, 
  IconButton, 
  Avatar,
  Paper,
  Container,
  Typography,
  Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { deleteContact } from "../../../redux/contacts/operations";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Kişiler ({filteredContacts?.length || 0})
        </Typography>
        <Divider />
        <List sx={{ width: '100%' }}>
          {filteredContacts?.map((contact) => (
            <React.Fragment key={contact.id}>
              <ListItem
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={contact.name}
                  secondary={contact.number}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    fontWeight: 'medium'
                  }}
                />
                <ListItemSecondaryAction>
                  <IconButton 
                    edge="end" 
                    onClick={() => handleDelete(contact.id)}
                    color="error"
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(211, 47, 47, 0.04)',
                      },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
