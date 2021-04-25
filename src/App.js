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

        firstNameResults.sort(function (a, b) {
          if (a.name.first > b.name.first) {
            return 1
          }
          if (a.name.first < b.name.first) {
            return -1
          }
          return 0
        });

        this.setState({
          data: firstNameResults,
          search: ""
        });
      })
      .catch(err => console.error(err))
  };

  handleLastName = event => {
    event.preventDefault();
    API.searchTerms()
      .then((res) => {
        const lastNameResults = res.data.results.map((employee, i) => (employee));

        lastNameResults.sort(function (a, b) {
          if (a.name.last > b.name.last) {
            return 1
          }
          if (a.name.last < b.name.last) {
            return -1
          }
          return 0
        });

        this.setState({
          data: lastNameResults,
          search: ""
        });
      })
      .catch(err => console.error(err))
  };

  handleEmail = event => {
    event.preventDefault();
    API.searchTerms()
      .then((res) => {
        const emailResults = res.data.results.map((employee, i) => (employee));

        emailResults.sort(function (a, b) {
          if (a.email > b.email) {
            return 1
          }
          if (a.email < b.email) {
            return -1
          }
          return 0
        });

        this.setState({
          data: emailResults,
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
