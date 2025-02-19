import React from "react";
import { useState, useEffect } from "react";

function ListedUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/getUsers");
      const data = await response.json();
      setUsers(data.sort((a, b) => a.id - b.id));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Resume file fetch from server return as filepath in local system

  return (
    <div class="relative overflow-x-auto">
      <h1>Users</h1>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-3">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Firstname
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Lastname
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Email
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Contact
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Gender
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Subjects
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Resume
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              URL
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Skills
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              About
            </th>
          </tr>
        </thead>
        <tbody class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          {users.map((user) => (
            <tr class="bg-white dark:bg-gray-800">
              <td class="px-6 py-4">{user.firstName}</td>
              <td class="px-6 py-4">{user.lastName}</td>
              <td class="px-6 py-4">{user.email}</td>
              <td class="px-6 py-4">{user.contact}</td>
              <td class="px-6 py-4">{user.gender}</td>
              <td class="px-6 py-4">{user.subjects}</td>
              <td class="px-6 py-4">{user.resumePath}</td>
              <td class="px-6 py-4">{user.url}</td>
              <td class="px-6 py-4">{user.selectedOption}</td>
              <td class="px-6 py-4">{user.about}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListedUsers;
