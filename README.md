# **Contact Management System**

A feature-rich system for managing customer or client contact information. This project allows users to perform CRUD operations (Create, Read, Update, Delete) on contact data, ensuring efficient and organized management of critical business information.

---

## **Overview**

The **Contact Management** feature simplifies managing and organizing customer/client contact details. It enables users to:
- Add, view, update, and delete contacts in one centralized location.
- Quickly search for and update contact information, ensuring data is always current.
- Maintain organized and accessible contact records to strengthen business relationships.

### **Key Features**
1. **Adding a New Contact:**
   - Capture essential details: First Name, Last Name, Email, Phone Number, Company, and Job Title.
2. **Viewing Contacts:**
   - List all contacts in a table view with sorting and pagination for large datasets.
3. **Editing Contact Information:**
   - Update existing contact details for accuracy.
4. **Deleting a Contact:**
   - Remove outdated or irrelevant contacts to keep records clean and relevant.

### **Use Cases**
- A sales representative adding a new client’s details.
- A manager updating a contact’s email after they switch companies.
- A team cleaning up duplicate or inactive contacts to streamline communication.

---

## **Specifications**

### **Frontend (React with Material UI)**
- **Form:** Create a responsive form to capture contact details using Material UI components.
- **Table View:**
  - Display all contacts with MUI’s Table component.
  - Include action buttons for **Edit** and **Delete**.
  - Implement sorting and pagination for improved usability.

### **Backend (Node.js)**
- **API Endpoints:**
  - `POST /contacts`: Add new contacts.
  - `GET /contacts`: Retrieve all contacts.
  - `PUT /contacts/:id`: Update a specific contact.
  - `DELETE /contacts/:id`: Remove a contact.
- **Validation and Error Handling:**
  - Ensure all fields are validated.
  - Handle duplicate and invalid data submissions gracefully.
  - Provide user-friendly error messages.

### **Database**
- Use a database (e.g., PostgreSQL, MySQL, or MongoDB) to handle CRUD operations.
- Choose a database that ensures data consistency and reliability for this project.

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd contact-management-system
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Set Up the Database**
- **Schema:**
```sql
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(15),
    company VARCHAR(255),
    job_title VARCHAR(255)
);
```
- Update your `.env` file with database credentials:
```plaintext
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
```

### **4. Start the Development Server**
- **Backend:**
```bash
node server.js
```
- **Frontend:**
```bash
npm start
```

---

## **Technical Decisions**

### **Frontend**
- **React and Material UI**: Chosen for building a dynamic and responsive UI with pre-built, customizable components.
- **Pagination and Sorting**: Improves usability for large datasets.

### **Backend**
- **Node.js with Express**: Lightweight, fast, and scalable backend framework.
- **REST API**: Enables clear and standardized communication between the frontend and backend.

### **Database**
- **PostgreSQL**: Relational database chosen for its ability to handle structured data, enforce constraints, and ensure data integrity.

---

## **Challenges and Solutions**

### **1. Data Validation**
- **Challenge:** Ensuring all required fields are filled and email uniqueness.
- **Solution:** Used server-side validation and database constraints to enforce rules.

### **2. Pagination and Sorting**
- **Challenge:** Efficiently displaying large datasets.
- **Solution:** Implemented server-side pagination and sorting logic, reducing load on the frontend.

### **3. Button Centering in UI**
- **Challenge:** Aligning the "Add Contact" button at the center while ensuring responsiveness.
- **Solution:** Used `flexbox` with `justifyContent: 'center'` to achieve consistent centering.

---

## **Evaluation Criteria**

1. **Functionality:** Fully implemented CRUD operations.
2. **UI Consistency:** Clean, intuitive, and responsive interface using Material UI.
3. **Code Quality:** Modular codebase adhering to best practices.
4. **Problem-Solving:** Demonstrated ability to identify and resolve challenges independently.

---

Feel free to ask for modifications or enhancements to this README!
