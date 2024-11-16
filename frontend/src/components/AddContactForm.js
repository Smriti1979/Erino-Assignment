import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { addContact } from '../services/api';

const AddContactForm = ({ onContactAdded }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        company: '',
        job_title: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addContact(formData);
            onContactAdded(); // Notify parent component to refresh the list
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                company: '',
                job_title: '',
            });
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            {['first_name', 'last_name', 'email', 'phone_number', 'company', 'job_title'].map((field) => (
                <Grid item xs={12} sm={6} key={field}>
                    <TextField
                        fullWidth
                        label={field.replace('_', ' ').toUpperCase()}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                    />
                </Grid>
            ))}
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" type="submit"  style={{ width: '300px' , height: "50px"}}>
                    Add Contact
                </Button>
            </Grid>
        </Grid>
    </form>
    
    );
};

export default AddContactForm;
