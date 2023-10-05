# users-books-movies-API

## API Description

This API provides access to lists of users, books, and movies. It is built using Express.js and offers endpoints to retrieve collections of 20 users, books, and movies, as well as details of individual items within each category.

## Endpoints

- `/users`
  - **Method**: GET
  - **Description**: Retrieves a list of 20 users.

- `/users/user/:id`
  - **Method**: GET
  - **Description**: Retrieves details of a single user by their ID.

- `/books`
  - **Method**: GET
  - **Description**: Retrieves a list of 20 books.

- `/books/book/:id`
  - **Method**: GET
  - **Description**: Retrieves details of a single book by its ID.

- `/movies`
  - **Method**: GET
  - **Description**: Retrieves a list of 20 movies.

- `/movies/movie/:id`
  - **Method**: GET
  - **Description**: Retrieves details of a single movie by its ID.

## Technology Stack

- Framework: Express.js

## Usage

You can make HTTP GET requests to the specified endpoints to access the desired lists of users, books, and movies, as well as retrieve detailed information about individual items. The API is designed to provide easy access to this data for various applications and use cases.


[API Documentation](https://documenter.getpostman.com/view/24695467/2s9YJeygrs)
