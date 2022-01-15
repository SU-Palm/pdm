import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

class Store extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeClassName = this.onChangeClassName.bind(this);
    this.onChangeClassNumber = this.onChangeClassNumber.bind(this);
    this.onChangeDate= this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      person_name: "",
      class_name: "",
      class_number: "",
      date_created: "",
      books: [],
    };
  }

  // This method will get the data from the database.
  async componentDidMount() {
    const response = await fetch('/api/store/' + this.props.match.params.id);
    const body = await response.json();
    this.setState({books: body});
  }

  // These methods will update the state properties.
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }
 
  onChangeClassName(e) {
    this.setState({
      class_name: e.target.value,
    });
  }
 
  onChangeClassNumber(e) {
    this.setState({
      class_number: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date_created: e.target.value,
    });
  }
 
  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedperson = {
      person_name: this.state.person_name,
      class_name: this.state.class_name,
      class_number: this.state.class_number,
      date_created: this.state.date_created,
    };
    console.log(newEditedperson);
 
    // This will send a post request to update the data in the database.
    axios
      .post(
        "/update/" + this.props.match.params.id,
        newEditedperson
      )
      .then((res) => console.log(res.data));
 
    this.props.history.push("/dashboard");
  }
 
  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div>
        <h3 align="center">Update Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Person's Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Class Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.class_name}
              onChange={this.onChangeClassName}
            />
          </div>

          <div className="form-group">
            <label>Class Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.class_number}
              onChange={this.onChangeClassNumber}
            />
          </div>

          <div className="form-group">
            <label>Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.class_date}
              onChange={this.onChangeDate}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

 
export default Store;