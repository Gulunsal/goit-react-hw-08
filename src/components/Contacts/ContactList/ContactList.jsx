import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/operations';
import { selectVisibleContacts } from '../../../redux/contacts/selectors';
import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton, 
  Paper,
  Typography,
  Tooltip,
  Box,
  Avatar,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDeleteClick = (contact) => {
    setContactToDelete(contact);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete.id));
    }
    setDeleteDialogOpen(false);
  };

  if (contacts.length === 0) {
    return (
      <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="text.secondary">
          Henüz kişi eklenmemiş
        </Typography>
      </Paper>
    );
  }

  return (
    <>
      <Paper elevation={3}>
        <List sx={{ width: '100%' }}>
          {contacts.map((contact, index) => (
            <Fade in={true} key={contact.id} timeout={300} style={{ transitionDelay: `${index * 100}ms` }}>
              <ListItem
                divider={index !== contacts.length - 1}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    {contact.name[0].toUpperCase()}
                  </Avatar>
                  <ListItemText
                    primary={contact.name}
                    secondary={contact.number}
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      fontWeight: 500
                    }}
                  />
                </Box>
                <ListItemSecondaryAction>
                  <Tooltip title="Sil" arrow>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteClick(contact)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </ListItemSecondaryAction>
              </ListItem>
            </Fade>
          ))}
        </List>
      </Paper>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Kişiyi Sil</DialogTitle>
        <DialogContent>
          <Typography>
            {contactToDelete?.name} kişisini silmek istediğinizden emin misiniz?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>
            İptal
          </Button>
          <Button 
            onClick={handleConfirmDelete} 
            color="error" 
            variant="contained"
          >
            Sil
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
} 