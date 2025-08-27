# KAZUMI - Fashion E-Commerce SPA

This project is a Single-Page Application (SPA) for a men's fashion e-commerce store named KAZUMI. It has been refactored from a collection of static HTML files into a dynamic, database-driven application.

The frontend is a single `index.html` file that uses vanilla JavaScript to handle all routing, UI rendering, and user interactions. The backend is powered by PHP and a MySQL database, providing a simple RESTful API for all data operations.

## Architecture

*   **Frontend**: Vanilla JavaScript Single-Page Application (`index.html`)
*   **Backend**: PHP API (`api/` directory)
*   **Database**: MySQL / MariaDB
*   **Server Environment**: Designed for a local server stack like XAMPP or WAMP.

## Features

*   Dynamic product catalog browsable by category.
*   Product detail pages.
*   Client-side shopping cart functionality.
*   Comprehensive Admin Dashboard to manage:
    *   Homepage content (Hero, Promo, Special Collections).
    *   Full CRUD (Create, Read, Update, Delete) for products.
    *   Category-wide percentage discounts.
    *   Drag-and-drop navigation menu ordering.
    *   Viewing submitted custom and bulk orders.
*   Multi-step forms for custom and bulk order submissions.
*   Size calculator to recommend apparel sizes.

## Prerequisites

You will need a local web server environment that supports PHP and MySQL. The easiest way to get this is by installing **XAMPP**.

*   [Download XAMPP](https://www.apachefriends.org/index.html)

## Setup and Installation

Follow these steps to get the application running on your local machine.

### 1. Place Project Files

Place the entire project folder (e.g., `kazumi-project/`) inside your XAMPP installation's `htdocs` directory.

*   On Windows, this is typically `C:\xampp\htdocs\`
*   On macOS, this is typically `/Applications/XAMPP/htdocs/`

### 2. Start XAMPP

Open the XAMPP Control Panel and start the **Apache** and **MySQL** services.

### 3. Create the Database

- Open your web browser and navigate to `http://localhost/phpmyadmin/`.
- Click on the **"New"** button in the left sidebar.
- For the database name, enter `kazumi_db`.
- Set the collation to `utf8mb4_general_ci`.
- Click **"Create"**. You do not need to create any tables manually.

### 4. Run the Installation Script

Now that the empty database is created, we need to create the tables and populate them with default data.

- In your browser, navigate to the `install.php` script within your project folder. For example:
  `http://localhost/kazumi-project/install.php`

- You should see a success message indicating that the database, tables, and default data have been set up correctly.

- **Important**: For security, you should delete the `install.php` file from your project folder after you have run it successfully.

## How to Use

Once the installation is complete, you can access the main application by navigating to the `index.html` file in your project folder.

- **Example URL**: `http://localhost/kazumi-project/index.html`

The application should now be fully functional, running on your local server and connected to your local database.
