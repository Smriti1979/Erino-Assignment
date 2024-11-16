import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { updateContact } from '../services/api';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EditContactModal = ({ open, handleClose, contact, onContactUpdated }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        company: '',
        job_title: '',
    });

    useEffect(() => {
        if (contact) {
            setFormData(contact);
        }
    }, [contact]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateContact(contact.id, formData);
            onContactUpdated(); // Notify parent to refresh the list
            handleClose(); // Close modal
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h6" mb={2}>
                    Edit Contact
                </Typography>
                <form onSubmit={handleSubmit}>
                    {['first_name', 'last_name', 'email', 'phone_number', 'company', 'job_title'].map((field) => (
                        <TextField
                            key={field}
                            fullWidth
                            margin="normal"
                            label={field.replace('_', ' ').toUpperCase()}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            required
                        />
                    ))}
                    <Button variant="contained" type="submit" fullWidth>
                        Save Changes
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default EditContactModal;
