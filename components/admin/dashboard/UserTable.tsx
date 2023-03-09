const users = [
    {
        id: 1,
        fullName: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 123-456-7890",
        address: "123 Main St",
        pinCode: "12345",
        city: "New York",
        userType: "admin",
    },
    {
        id: 2,
        fullName: "Jane Doe",
        email: "jane.doe@example.com",
        phone: "+1 987-654-3210",
        address: "456 Oak St",
        pinCode: "67890",
        city: "Los Angeles",
        userType: "editor",
    },
    {
        id: 3,
        fullName: "Bob Smith",
        email: "bob.smith@example.com",
        phone: "+1 555-555-5555",
        address: "789 Maple St",
        pinCode: "54321",
        city: "Chicago",
        userType: "user",
    },
    {
        id: 4,
        fullName: "Bob Smith",
        email: "bob.smith@example.com",
        phone: "+1 555-555-5555",
        address: "789 Maple St",
        pinCode: "54321",
        city: "Chicago",
        userType: "user",
    },
    {
        id: 5,
        fullName: "Bob Smith",
        email: "bob.smith@example.com",
        phone: "+1 555-555-5555",
        address: "789 Maple St",
        pinCode: "54321",
        city: "Chicago",
        userType: "user",
    },
    {
        id: 6,
        fullName: "Bob Smith",
        email: "bob.smith@example.com",
        phone: "+1 555-555-5555",
        address: "789 Maple St",
        pinCode: "54321",
        city: "Chicago",
        userType: "user",
    },
];

const UserTable = () => {
    return (
        <div className="flex px-20 w-full max-h-[500px]  overflow-x-auto flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Full Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Phone
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Address
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Pin Code
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    City
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    User Type
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.fullName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.address}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.pinCode}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.city}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.userType}</td>
                                </tr>
                            ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserTable