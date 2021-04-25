import React from 'react';
import API from '../utils/API'

class EmployeeTable extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        API.searchTerms()
            .then((res) => {
                let results = res.data.results;
                this.setState({
                    data: results
                })
            })
            .catch(err => console.error(err));
    };
    
    render() {
        return (
            <>
                {this.state.data.map((employee, index) => (
                    <tr key={index}>
                        <td><img src={employee.picture.thumbnail} alt={employee.name.first + employee.name.last} /></td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </>
        )
    }
};

export default EmployeeTable;