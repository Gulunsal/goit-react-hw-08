import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact, deleteContact } from "../../../redux/contacts/operations";
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
import { red } from '@mui/material/colors';

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
      <Paper elevation={3} sx={{ mt: 4, p: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ p: 2, color: 'primary.main' }}>
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
                  transition: 'background-color 0.3s',
                  borderRadius: 1,
                }}
              >
                <ListItemAvatar>
                  <Avatar 
                    sx={{ 
                      bgcolor: 'primary.main',
                      width: 40,
                      height: 40
                    }}
                  >
                    {contact.name.charAt(0).toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {contact.name}
                    </Typography>
                  }
                  secondary={contact.number}
                />
                <ListItemSecondaryAction>
                  <IconButton 
                    edge="end" 
                    onClick={() => handleDelete(contact.id)}
                    sx={{
                      color: red[400],
                      '&:hover': {
                        backgroundColor: red[50],
                        color: red[700],
                      },
                      transition: 'all 0.3s'
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
