'use client';
import React, { useState, useEffect } from 'react';
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/dash/pagination";
import Search from "@/app/ui/dashboard/dash/search";
import Image from "next/image";
import Link from "next/link";

const UsersPage = ({ searchParams }) => {
  const [usersData, setUsersData] = useState({ count: 0, users: [] });
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { count, users } = await fetchUsers(q, page);
        setUsersData({ count, users });
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };
    getUsers();
  }, [q, page]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString().slice(4, 16);
  };

  const handleDelete = async (id) => {
    // Add your delete logic here
    console.log(`Delete user with id: ${id}`);
  };

  return (
    <div className="h-screen flex flex-col p-4">
      <div className="flex flex-row justify-between items-center mb-4">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="text-white text-xs font-semibold bg-violet-700 p-2 rounded-lg hover:bg-slate-700">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full text-sm text-left rounded-lg">
        <thead className="text-xs uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Created At</th>
            <th scope="col" className="px-6 py-3">Role</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-6">
                <div className="flex items-center">
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="ml-2">{user.username}</span>
                </div>
              </td>
              <td className="py-2 px-6">{user.email}</td>
              <td className="py-2 px-6">{formatDate(user.createdAt)}</td>
              <td className="py-2 px-6">{user.isAdmin ? "Admin" : "Client"}</td>
              <td className="py-2 px-6">{user.isActive ? "Active" : "Passive"}</td>
              <td className="py-2 px-6">
                <div className="flex space-x-2">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="text-sm font-semibold bg-blue-500 text-white rounded-lg p-1">View</button>
                  </Link>
                  <button
                    className="text-sm font-semibold bg-red-500 text-white rounded-lg p-1"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={usersData.count} />
    </div>
  );
};

export default UsersPage;
