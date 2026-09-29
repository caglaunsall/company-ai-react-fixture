type Customer = {
    id: number;
    name: string;
    email: string;
};

const customers: Customer[] = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
    },
];

export function Customers() {
    return (
        <div>
            <h1>Customers</h1>

            {customers.map((customer) => (
                <div key={customer.id}>
                    <strong>{customer.name}</strong>
                    <div>{customer.email}</div>
                </div>
            ))}
        </div>
    );
}