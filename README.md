# Authentication with Express and MongoDB

Welcome to the project based on **Node.js**, **Express**, and **MongoDB**! This application provides user authentication functionality with different roles: **student** and **teacher**.

## Project Description

This application organizes the project structure and includes the following features:

- **User Registration**: Users can register by providing the following fields:

  - First Name
  - Last Name
  - Username
  - Password

- **Authorization**: Users can log in using their username and password, allowing them to receive a token for access to protected routes.

- **Get User Information**: Users can request their data, including their first name, last name, and username.

- **Delete User**: A function for permanently deleting the user from the database is implemented.

## Technologies

- **Node.js**: For server-side development.
- **Express**: For creating the API.
- **MongoDB**: For storing user data.
- **Mongoose**: For working with MongoDB.
- **JWT**: For secure authentication.

## API Methods

1. **Registration** (POST)  
   `http://localhost:3000/api/auth/register`  
   Register a new user by providing first name, last name, username, and password.

2. **Login** (POST)  
   `http://localhost:3000/api/auth/login`  
   Authenticate by using your username and password.

3. **Get User Information** (GET)  
   `http://localhost:3000/api/auth/me?login=your_username`  
   Retrieve information about your account.

4. **Delete User** (DELETE)  
   `http://localhost:3000/api/auth/delete`  
   Permanently delete your account from the database.

# CHAPTER 2 - COURSES

## Course Management

This chapter extends the project by adding course management functionality. Users can create, view, update, and delete courses with various attributes.

### Course Model

Each course includes the following fields:

- **title** (required)
- **slug** (required)
- **description** (optional)
- **price** (required)
- **image** (required)
- **category** (required)
- **level** (default: beginner, required)
- **published** (default: false, indicates if the course is published)
- **author** (required)
- **createdAt** (required)

### API Methods

1. **Create a New Course** - `POST`  
   `http://localhost:3000/courses`

2. **Get All Courses** - `GET`
   `http://localhost:3000/courses`

3. **Get Course by ID** - `GET`
   `http://localhost:3000/courses/{id}`

Replace `{id}` with the actual course ID.

4. **Update Course by ID** - `PUT`  
   `http://localhost:3000/courses/{id}`

5. **Delete Course by ID** - `DELETE`  
   `http://localhost:3000/courses/{id}`

6. **Get Courses with Sorting** - `GET`  
   Sorting by creation date (ascending):  
    `http://localhost:3000/courses?sortBy=createdAt&sortOrder=asc`

Sorting by creation date (descending):  
 `http://localhost:3000/courses?sortBy=createdAt&sortOrder=desc`

The `sortOrder` parameter determines the sorting order:

- `asc` for ascending
- `desc` for descending

7. **Get Courses with Pagination** - `GET`  
   `http://localhost:3000/courses?page=1&limit=2`

8. **Get Courses by Category (Filtering)** - `GET`  
   `http://localhost:3000/courses?category=your_category`

9. **Search Courses by Title** - `GET`  
   `http://localhost:3000/courses?search=title`

### Favorite Courses

Users can add courses to their favorites. The `favorite` field is used, where `true` means the course is favorited, and `false` means it is not.

10. **Add Course to Favorites** - `POST`  
    `http://localhost:3000/courses/favorite/{id_course}`

11. **Remove Course from Favorites** - `DELETE`  
    `http://localhost:3000/courses/favorite/{id_course}`

### Course Tags System

Each course can have multiple tags (one-to-many relationship).

12. **Add a Tag** - `POST`  
    `http://localhost:3000/tags`

13. **View All Tags** - `GET`  
    `http://localhost:3000/tags`

14. **Get Tags for a Specific Course** - `GET`  
    `http://localhost:3000/courses/{id}/tags`

This request returns the course along with detailed tag information, including tag names.

To run the project, you need to install the necessary dependencies and start the project with the command `yarn run dev`.
