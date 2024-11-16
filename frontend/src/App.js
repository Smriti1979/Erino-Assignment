import React, { useState, useEffect } from 'react';
import AddContactForm from './components/AddContactForm';
import ContactTable from './components/ContactTable';
import EditContactModal from './components/EditContactModal';
import Navbar from './components/Navbar';
import { getContacts, deleteContact } from './services/api';
import { Container} from '@mui/material';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    const fetchContacts = async () => {
        try {
            const { data } = await getContacts();
            setContacts(data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteContact(id);
            fetchContacts();
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };
  
    const handleEdit = (contact) => {
        setSelectedContact(contact);
        setEditModalOpen(true);
    };

    const handleContactUpdated = () => {
        fetchContacts();
        setEditModalOpen(false);
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <>
            <Navbar />
            <Container>
            <br></br>
            <br></br>
                <AddContactForm onContactAdded={fetchContacts} />
                <ContactTable contacts={contacts} onDelete={handleDelete} onEdit={handleEdit} />
                {selectedContact && (
                    <EditContactModal
                        open={isEditModalOpen}
                        handleClose={() => setEditModalOpen(false)}
                        contact={selectedContact}
                        onContactUpdated={handleContactUpdated}
                    />
                )}
            </Container>
        </>
    );
};

export default App;
