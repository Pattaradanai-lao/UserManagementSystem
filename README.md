# User Management Web Application

An online system that enables administrators to manage users efficiently, including user registration, profile management, role assignments, providing a streamlined approach to user administration.

## 🛠️ Features
- Registration and login for users and admins
- View, edit, and delete user profiles
- Role-based access control (e.g. admin, user)

## ⚙️ Tech Stack
- Frontend: React, Tailwind CSS  
- Backend: Java, Spring Boot
- Database: MySQL

## 🧱 System Architecture Overview

The application is divided into two main parts:

### 1. Frontend (User and admin Interface)
Built with **React.js** and **Tailwind CSS**

- Allows general users to log in and view their profile
- Provides admins with the ability to manage user and admin accounts (create, view, edit, delete)
- Enables admins to register new user and admin accounts

### 2. Backend
Developed using **Java** and **Spring Boot**

Handles:
- Authentication and authorization using Spring Security
- User data management and API endpoints
- Integration with MySQL for storing user and admin profiles
