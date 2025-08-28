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

### 3. Setup the Database (Method 1: Import .sql File - Recommended)

This is the easiest and recommended method.

1.  Navigate to `http://localhost/phpmyadmin/`.
2.  Click on the **"New"** button in the left sidebar to create a new database.
3.  Enter the database name as `kazumi_db` and click **"Create"**.
4.  Once the database is created, click on its name in the left sidebar to select it.
5.  Click on the **"Import"** tab at the top of the page.
6.  Click "Choose File" and select the `database.sql` file from this project folder.
7.  Leave all options as default and click the **"Import"** (or "Go") button at the bottom of the page.

You should see a success message indicating that the import has been successfully finished. The database is now ready.

### 4. Setup the Database (Method 2: Run PHP Script - Alternative)

Use this method if you cannot import the `.sql` file.

1.  Follow steps 1-3 from Method 1 to create the empty `kazumi_db` database.
2.  In your browser, navigate to the `install.php` script within your project folder. For example:
    `http://localhost/kazumi-project/install.php`
3.  If it runs successfully, you will see a success message.
4.  **Important**: For security, you should delete the `install.php` file from your project folder after it runs successfully.

## How to Use

Once the installation is complete, you can access the main application by navigating to the `index.html` file in your project folder.

- **Example URL**: `http://localhost/kazumi-project/index.html`

The application should now be fully functional, running on your local server and connected to your local database.
