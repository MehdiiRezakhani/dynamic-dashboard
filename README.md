# Dynamic Dashboard Application

A responsive and interactive dashboard that displays user data fetched from an API, featuring search, pagination, and user details functionality.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Integration](#api-integration)
7. [Search Functionality](#search-functionality)
8. [Pagination](#pagination)
9. [User Details](#user-details)
10. [Responsive Design](#responsive-design)
11. [Styling](#styling)
12. [Sorting](#sorting)
13. [Loading State](#loading-state)
14. [Error Handling](#error-handling)
15. [Contributing](#contributing)

## Project Overview

This project is a dynamic dashboard application built using Next.js. It fetches user data from an API and displays it in a responsive table format. The dashboard includes features such as search functionality, pagination, and detailed user information display.

## Key Features

-   Fetches user data from `https://jsonplaceholder.typicode.com/users`
-   Displays data in a table format
-   Implements search functionality by name or email
-   Includes pagination to navigate through user data (5 users per page)
-   Displays detailed user information in a modal or separate section
-   Responsive design for desktop and mobile devices
-   Uses TailwindCSS for styling

## Technologies Used

-   Next.js
-   NextUI
-   TailwindCSS
-   Axios

## Installation

To run this project locally:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

## Usage

1. Open `http://localhost:3000` in your web browser to access the dashboard.
2. The dashboard will automatically fetch and display user data from the API.
3. Use the search bar at the top to filter users by name or email.
4. Navigate through pages using the pagination controls at the bottom.

## API Integration

The dashboard fetches user data from `https://jsonplaceholder.typicode.com/users`. This API is used for demonstration purposes only.

## Search Functionality

-   The search bar allows users to filter the table by name or email.
-   As the user types, the table updates dynamically to show matching results.

## Pagination

-   The dashboard displays 5 users per page.
-   Users can navigate through pages using the numbered pagination controls at the bottom.

## User Details

-   When a user clicks on a row in the table, detailed information about that user appears in a modal.
-   The modal includes fields such as name, email and phone number.

## Responsive Design

-   The dashboard is designed to work well on both desktop and mobile devices.
-   The layout adjusts automatically based on screen size.

## Styling

-   TailwindCSS is used for styling the dashboard components.
-   Heroicons are used for icons throughout the application.

## Sorting

-   Users can sort the table columns by clicking on the header.
-   Currently implemented sorting functionality includes:
    -   Name (ascending/descending)
    -   Email (ascending/descending)

## Loading State

-   A loading indicator appears while data is being fetched from the API.

## Error Handling

-   The dashboard handles API errors gracefully and displays appropriate error messages to the user.

## Contributing

Contributions are welcome! Please fork this repository and submit your changes.
