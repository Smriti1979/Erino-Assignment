import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ContactTable = ({ contacts, onEdit, onDelete }) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Job Title</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact.id}>
                            <TableCell>{contact.first_name}</TableCell>
                            <TableCell>{contact.last_name}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.phone_number}</TableCell>
                            <TableCell>{contact.company}</TableCell>
                            <TableCell>{contact.job_title}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => onEdit(contact)}>
                                    <Edit />
                                </IconButton>
                                <IconButton onClick={() => onDelete(contact.id)}>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ContactTable;
