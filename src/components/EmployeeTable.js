function EmployeeTable(props) {
    return (
        <>
            {props.employees.map((employee, index) => (
                <tr key={index}>
                    <td><img src={employee.picture.thumbnail} alt={employee.name.first + employee.name.last} /></td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.email}</td>
                </tr>
            ))}
        </>
    )
};

export default EmployeeTable;