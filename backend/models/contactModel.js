// models/contactModel.js
const pool = require('../db');

// Add a new contact
const createContact = async (firstName, lastName, email, phone, company, jobTitle) => {
    const result = await pool.query(
        'INSERT INTO contacts (first_name, last_name, email, phone, company, job_title) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [firstName, lastName, email, phone, company, jobTitle]
    );
    return result.rows[0];
};

// Get all contacts
const getAllContacts = async () => {
    const result = await pool.query('SELECT * FROM contacts');
    return result.rows;
};

// Update a contact
const updateContact = async (id, first_name, last_name, email, phone_number, company, job_title) => {
    const query = `
        UPDATE contacts
        SET first_name = $1, last_name = $2, email = $3, phone_number = $4, company = $5, job_title = $6
        WHERE id = $7
        RETURNING *;
    `;
    const values = [first_name, last_name, email, phone_number, company, job_title, id];
    const result = await pool.query(query, values);
    return result.rows[0];
};


// Delete a contact
const deleteContact = async (id) => {
    await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
};

module.exports = {
    createContact,
    getAllContacts,
    updateContact,
    deleteContact,
};
