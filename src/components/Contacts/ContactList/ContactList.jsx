import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/operations';
import { selectVisibleContacts } from '../../../redux/contacts/selectors';
import { 
  List, 
  ListItem, 
  ListItemText, 
  IconButton, 
  Paper,
  Typography,
  Box,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  if (!contacts || contacts.length === 0) {
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
      <Paper elevation={3} sx={{ p: 2 }}>
        <List>
          {contacts.map((contact) => (
            <ListItem 
              key={contact.id}
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                py: isMobile ? 2 : 1
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                width: '100%',
                mb: isMobile ? 1 : 0
              }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                  {contact?.name ? contact.name[0].toUpperCase() : '?'}
                </Avatar>
                <ListItemText 
                  primary={contact?.name || 'İsimsiz'}
                  secondary={contact?.number || ''}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    fontWeight: 500
                  }}
                />
                <IconButton 
                  edge="end" 
                  aria-label="delete"
                  onClick={() => handleDeleteClick(contact)}
                  sx={{ ml: 'auto' }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
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
          <Button onClick={() => setDeleteDialogOpen(false)}>İptal</Button>
          <Button onClick={handleConfirmDelete} color="error">
            Sil
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
} 