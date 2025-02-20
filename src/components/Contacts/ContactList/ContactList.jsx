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
      <Paper elevation={3} sx={{ p: 2 }}>
        <List sx={{ 
          width: '100%',
          maxWidth: '100%',
          bgcolor: 'background.paper',
          '& .MuiListItem-root': {
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            py: isMobile ? 2 : 1
          }
        }}>
          {contacts.map((contact) => (
            <ListItem 
              key={contact.id}
              sx={{
                borderBottom: 1,
                borderColor: 'divider'
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                width: '100%',
                gap: 1
              }}>
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
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
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