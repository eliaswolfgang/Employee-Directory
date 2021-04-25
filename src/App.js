import React from 'react';
import EmployeeNavbar from './components/EmployeeNavbar';
import EmployeeTable from './components/EmployeeTable';
import API from './utils/API'
import { Table } from 'react-bootstrap';

class App extends React.Component {
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

  handleChange = event => {
    event.preventDefault();
    let value = event.target.value;

    API.searchTerms()
      .then((res) => {
        const searchResults = res.data.results.filter((employee) =>
          employee.name.first.includes(value) || employee.name.last.includes(value));
        if (searchResults === []) {
          alert(`No employee data matching ${value} found!`);
        } else {
          this.setState({
            data: searchResults,
            search: value
          });
        }
      })
      .catch(err => console.error(err))

  };

  handleHome = event => {
    event.preventDefault();

    API.searchTerms()
      .then((res) => {
        const results = res.data.results;
        this.setState({
          data: results,
          search: ""
        });
      })
      .catch(err => console.error(err))
  };

  handleFirstName = event => {
    event.preventDefault();
    API.searchTerms()
      .then((res) => {
        const firstNameResults = res.data.results.map((employee, i) => (employee));

        const firstSorted = firstNameResults.sort( function(a, b) {
          if (a.name.first > b.name.first)
        });

        this.setState({
          data: firstSorted,
          search: ""
        });
      })
      .catch(err => console.error(err))
  };


render() {
  return (
    <div className='container'>
      <EmployeeNavbar
        search={this.state.search}
        handleChange={this.handleChange}
        handleHome={this.handleHome}
        handleFirstName={this.handleFirstName}
        handleLastName={this.handleLastName}
        handleEmail={this.handleEmail}
      />
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <EmployeeTable
            employees={this.state.data}
          />
        </tbody>
      </Table>
    </div>
  );
}


}

export default App;
