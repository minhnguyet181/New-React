// src/services/userService.js
class UserService {
    constructor() {
      this.apiUrl = 'http://localhost:1081/users'; // Replace with your backend URL and port
    }
  
    // Get all users
    async getUsers() {
      try {
        const response = await fetch(this.apiUrl);
        return await response.json();
      } catch (error) {
        console.error('Error fetching users:', error);
        return [];
      }
    }
  
    // Get a single user by ID
    async getUser(id) {
      try {
        const response = await fetch(`${this.apiUrl}/${id}`);
        return await response.json();
      } catch (error) {
        console.error('Error fetching user:', error);
        return null;
      }
    }
  
    // Add a new user
    async addUser(user) {
      try {
        const response = await fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        return await response.json();
      } catch (error) {
        console.error('Error adding user:', error);
        return null;
      }
    }
  
    // Update a user
    async updateUser(id, user) {
      try {
        const response = await fetch(`${this.apiUrl}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        return await response.json();
      } catch (error) {
        console.error('Error updating user:', error);
        return null;
      }
    }
  
    // Delete a user by ID
    async deleteUser(id) {
      try {
        await fetch(`${this.apiUrl}/${id}`, {
          method: 'DELETE',
        });
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  }
  
  // Create an instance of UserService
  const userService = new UserService();
  export default userService;
  