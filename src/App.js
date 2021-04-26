import React from 'react';
import EmployeeNavbar from './components/EmployeeNavbar';
import EmployeeTable from './components/EmployeeTable';
import API from './utils/API'
import { Table } from 'react-bootstrap';

let results = [];
let nameResults = [];
let firstNameResults = [];
let lastNameResults = [];
let emailResults = [];

API.searchTerms()
  .then((res) => {
    results = res.data.results;
    nameResults = res.data.results.map((employee, i) => (employee));
    firstNameResults = nameResults.sort(compareFirst);
    lastNameResults = nameResults.sort(compareLast);
    emailResults = nameResults.sort(compareEmail);
  })
  .catch(err => console.error(err));

  function compareFirst(a, b) {
    if (a.name.first > b.name.first) {
      return 1
    }
    if (a.name.first < b.name.first) {
      return -1
    }
    return 0
  };

  function compareLast(a, b) {
    if (a.name.last > b.name.last) {
      return 1
    }
    if (a.name.last < b.name.last) {
      return -1
    }
    return 0
  };

  function compareEmail(a, b) {
    if (a.email > b.email) {
      return 1
    }
    if (a.email < b.email) {
      return -1
    }
    return 0
  };

class App extends React.Component {
  state = {
    data: [],
    search: ""
  };

  componentDidMount() {
    this.setState({
      data: [results],
      search: ""
    });
  };

  handleChange = event => {
    event.preventDefault();
    let value = event.target.value;
    this.setState({
      search: value
    });
    const searchResults = results.filter((employee) =>
      employee.name.first.includes(value) || employee.name.last.includes(value));
    this.setState({
      data: [searchResults],
      search: value
    });
  }


  handleHome = event => {
    event.preventDefault();
    this.setState({
      data: results,
      search: ""
    });
  };

  handleFirstName = event => {
    event.preventDefault();
    this.setState({
      data: [firstNameResults],
      search: ""
    });
  };

  handleLastName = event => {
    event.preventDefault();
    this.setState({
      data: [lastNameResults],
      search: ""
    });
  };

  handleEmail = event => {
    event.preventDefault();
    this.setState({
      data: [emailResults],
      search: ""
    });
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
