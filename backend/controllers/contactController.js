const contactModel = require('../models/contactModel');
const pool = require('../db'); // Ensure the database pool is imported if used directly here

const addContact = async (req, res) => {
    const { first_name, last_name, email, phone_number, company, job_title } = req.body;

    try {
        const query = `
            INSERT INTO contacts (first_name, last_name, email, phone_number, company, job_title)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `;
        const values = [first_name, last_name, email, phone_number, company, job_title];
        const result = await pool.query(query, values); // Ensure `pool` is correctly imported
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error inserting contact:", error.message);
        res.status(500).json({ error: error.message });
    }
};

const getContacts = async (req, res) => {
    try {
        const contacts = await contactModel.getAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error.message);
        res.status(500).json({ error: error.message });
    }
};

const updateContact = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, phone_number, company, job_title } = req.body;

    try {
        const updatedContact = await contactModel.updateContact(
            id,
            first_name,
            last_name,
            email,
            phone_number,
            company,
            job_title
        );
        res.status(200).json(updatedContact);
    } catch (error) {
        console.error("Error updating contact:", error.message);
        res.status(500).json({ error: error.message });
    }
};

const removeContact = async (req, res) => {
    const { id } = req.params;

    try {
        await contactModel.deleteContact(id);
        res.status(204).send(); // 204 No Content
    } catch (error) {
        console.error("Error deleting contact:", error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addContact,
    getContacts,
    updateContact,
    removeContact,
};
