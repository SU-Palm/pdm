import React, { Component } from "react";

export default class CreateStore extends Component {
    // This is the constructor that stores the data.
    constructor(props) {
      super(props);

      this.onChangeStoreName = this.onChangeStoreName.bind(this);
      this.onChangeStoreOwner = this.onChangeStoreOwner.bind(this);
      this.onChangeStoreLocation = this.onChangeStoreLocation.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        store_name: "",
        store_owner: "",
        store_published: "",
        store_location: "",
        store_book_count: 0
      };
    }

    onChangeStoreName(e) {
      this.setState({
        store_name: e.target.value,
      });
    }

    onChangeStoreOwner(e) {
      this.setState({
        store_owner: e.target.value,
      });
    }

    onChangeStoreLocation(e) {
      this.setState({
        store_location: e.target.value,
      });
    }
   
  // This function will handle the submission.
    async onSubmit(e) {
      e.preventDefault();
   
      // When post request is sent to the create url, axios will add a new record(newperson) to the database.
      const newStore = {
        name: this.state.store_name,
        owner: this.state.store_owner,
        location: this.state.store_location,
        book_count: this.state.store_book_count,
      };

      await fetch('/api/store/create' , {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStore)
      });
   
      // We will empty the state after posting the data to the database
      this.setState({
        store_name: "",
        store_owner: "",
        store_location: "",
        store_book_count: 0,
      });
    }

    // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div class="w-500 flex flex-col justify-center items-center">
        <div className="bg-white mr-100 flex-wrap border-4 border-dashed border-gray-200">
        <h1 className="ml-40 mr-40 text-3xl font-bold text-gray-900">Create New Store</h1>
        <form onSubmit={this.onSubmit} class="justify-center items-center">
          <div className="form-group mt-4">
          <div className="ml-40 mr-40 text-gray-900 font-bold text-lg">Name </div>
          <input class="ml-40 mr-40 mt-3 shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type="text"
              value={this.state.store_name}
              onChange={this.onChangeStoreName}
            />
          </div>
          <div className="form-group mt-4">
          <div className="ml-40 mr-40 text-gray-900 font-bold text-lg">Owner </div>
          <input class="ml-40 mr-40 mt-3 shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type="text"
              value={this.state.store_owner}
              onChange={this.onChangeStoreOwner}
            />
          </div>
          <div className="form-group mt-4">
          <div className="ml-40 mr-40 text-gray-900 font-bold text-lg">Location </div>
          <input class="ml-40 mr-40 mt-3 shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={this.state.store_location}
              onChange={this.onChangeStoreLocation}
            />
          </div>
          <div className="form-group mt-4">
          <button class="ml-40 mr-40 mb-5 ml-30 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <input
                type="submit"
                value="Create Store"
                className="btn btn-primary"
            />
              </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}