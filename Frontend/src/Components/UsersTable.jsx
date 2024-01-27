/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { deleteUser, getUsers, editUser } from "../Slices/adminSlice";
import { useDispatch, useSelector } from "react-redux";


const UsersTable = () => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.auth);
    const users = useSelector(state => state.admin.users);
    const [editedUserId, setEditedUserId] = useState(null);
    const [editedUserData, setEditedUserData] = useState({});

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleDeleteUser = userId => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteUser(userId));
        }
    };

    const handleEditUser = async (userId, updatedUserData) => {
        console.log(userId);
        dispatch(editUser({ id: userId, data: updatedUserData })).then(
            res => {
                console.log("edit Data", res)
                setEditedUserId(null);
                setEditedUserData({});
                dispatch(getUsers());
            }
        );
    };
    const [searchQuery, setSearchQuery] = useState("");



    return (
        <>
            <div className="flex flex-col items-center justify-center mt-5">
                <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                <div className="flex justify-start w-full max-w-lg mt-5">
                    <input
                        className="w-full px-4 py-2 border rounded-md"
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
                <table className="max-w-10 ">
                    <thead className="bg-white border-b">
                        <tr>
                            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                ID
                            </th>
                            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Name
                            </th>
                            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Email
                            </th>
                            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {users
                            ?.filter(user =>
                                `${user.name} ${user.email}`
                                    .toLowerCase()
                                    .includes(searchQuery.toLowerCase())
                            )
                            .map(user => (
                                <tr key={user._id} class="bg-gray-100 border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <pre>{user._id}</pre>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {editedUserId === user._id ? (
                                            <input
                                                type="text"
                                                defaultValue={editedUserData.name || user.name}
                                                onChange={e =>
                                                    setEditedUserData({
                                                        ...editedUserData,
                                                        name: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            user.name
                                        )}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {editedUserId === user._id ? (
                                            <input
                                                type="email"
                                                defaultValue={editedUserData.email || user.email}
                                                onChange={e =>
                                                    setEditedUserData({
                                                        ...editedUserData,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            user.email
                                        )}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {editedUserId === user._id ? (
                                            <button
                                                onClick={() => handleEditUser(user._id, editedUserData)}
                                            >
                                                Save
                                            </button>
                                        ) : (
                                            <>
                                                <button
                                                    className="mr-4"
                                                    onClick={() => setEditedUserId(user._id)}
                                                    disabled={userInfo._id === user._id}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteUser(user._id)}
                                                    disabled={userInfo._id === user._id}
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UsersTable;