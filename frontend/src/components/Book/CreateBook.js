import React, { Component } from "react";

export default class CreateBook extends Component {
    // This is the constructor that stores the data.
    constructor(props) {
      super(props);

      this.onChangeBookName = this.onChangeBookName.bind(this);
      this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
      this.onChangeBookPublisher = this.onChangeBookPublisher.bind(this);
      this.onChangeBookValue = this.onChangeBookValue.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   
      this.state = {
        book_name: "",
        book_author: "",
        book_published: "",
        book_value: "",
        book_storeID: 0
      };
    }

    onChangeBookName(e) {
      this.setState({
        book_name: e.target.value,
      });
    }

    onChangeBookAuthor(e) {
      this.setState({
        book_author: e.target.value,
      });
    }

    onChangeBookPublisher(e) {
      this.setState({
        book_published: e.target.value,
      });
    }

    onChangeBookValue(e) {
      this.setState({
        book_value: e.target.value,
      });
    }

   
  // This function will handle the submission.
    async onSubmit(e) {
      e.preventDefault();
   
      // When post request is sent to the create url, axios will add a new record(newperson) to the database.
      const newbook = {
        name: this.state.book_name,
        author: this.state.book_author,
        publisher: this.state.book_published,
        value: this.state.book_value,
        storeID: this.props.match.params.id
      };

      await fetch('/api/book/create' , {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newbook)
      });

      // We will empty the state after posting the data to the database
      this.setState({
        book_name: "",
        book_author: "",
        book_published: "",
        book_value: "",
        book_storeID: 0
      });
    }

    // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div class="w-500 flex flex-col justify-center items-center">
        <div className="bg-white mr-100 border-4 border-dashed border-gray-200">
        <h1 className="ml-40 mr-40 text-3xl font-bold text-gray-900">Create New Book</h1>
        <form onSubmit={this.onSubmit} class="justify-center items-center">
          <div className="form-group mt-4">
          <div className="ml-40 mr-40 text-gray-900 font-bold text-lg">Name </div>
          <input class="ml-40 mr-40 mt-3 shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={this.state.book_name}
              onChange={this.onChangeBookName}
              type="text" >
            </input>
          </div>
          <div className="form-group mt-4">
            <div className="ml-40 mr-40 text-gray-900 font-bold text-lg">Author </div>
            <input class="ml-40 mr-40 mt-3 shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={this.state.book_author}
              onChange={this.onChangeBookAuthor}
              type="text" >
            </input>
          </div>
          <div className="form-group mt-4">
            <div className="ml-40 mr-40 text-gray-900 font-bold text-lg">Publisher</div>
            <input class="ml-40 mr-40 mt-3 shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={this.state.book_published}
              onChange={this.onChangeBookPublisher}
              type="text" >
            </input>
          </div>
          <div className="form-group mt-4">
            <div className="ml-40 mr-40 text-gray-900 font-bold text-lg">Price </div>
            <input class="ml-40 mr-40 mt-3 shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={this.state.book_value}
              onChange={this.onChangeBookValue}
              type="number" />
          </div>
          <div className="form-group mt-4">
              <button class="ml-40 mr-40 mb-5 ml-30 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <input
                type="submit"
                value="Create Book"
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