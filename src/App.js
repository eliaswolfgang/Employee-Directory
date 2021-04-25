import React from 'react';
import EmployeeNavbar from './components/EmployeeNavbar';
import EmployeeTable from './components/EmployeeTable';
import API from './utils/API'
import { Table } from 'react-bootstrap';

class App extends React.Component {
  state = {
    search: "",
  };

  handleChange = event => {
    let value = event.target.value;
    this.setState({
      search: value
    });

      API.searchTerms()
      .then((res) => {
        const searchResults = res.data.results.filter((employee) =>
          employee.name.first.includes(this.state.search) || employee.name.last.includes(this.state.search) || employee.email.includes(this.state.search));
        console.log(searchResults);
        if (searchResults !== []) {
          this.setState({
            data: searchResults,
          });
        } else {
          alert(`No employee data matching ${value} found!`);
          window.location.reload();
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
  }


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
            <EmployeeTable />
          </tbody>
        </Table>
      </div>
    );
  }


}

export default App;
