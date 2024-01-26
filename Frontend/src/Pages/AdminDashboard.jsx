import { useState } from "react";
import UsersTable from "../Components/UsersTable";
import AddUser from "../Components/AddUser";

const AdminDashboard = () => {
  const [addUser, setAddUser] = useState(false);
  const handleClose = () => {
    setAddUser(false);
  };
  return (
    <div className="relative pt-16 bg-gray-100 min-h-screen">
      {addUser && (
        <>
          <div
            onClick={() => setAddUser(false)}
            className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          >
            <AddUser close={handleClose} />
          </div>
        </>
      )}
      <div className="container mx-auto px-4">
        <h1 className="text-center pt-5 text-5xl font-black text-blue-500">Admin DashBoard</h1>
        <UsersTable />
        <div className="mt-5 w-full flex justify-center">
          <button className="bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-700">ADD USER</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;