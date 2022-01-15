import React, { Component } from "react";

const Book = (props) => (
    <tr key={props.book.name}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={props.book.imageURL} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-base font-medium text-gray-900">{props.book.name}</div>
            <div className="text-base text-gray-500">{props.book.author}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-base text-gray-900">{props.book.publisher}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          ${props.book.value}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a className="text-indigo-600 hover:text-indigo-900" href=""
        onClick={() => {
            props.deleteBook(props.book.id);
          }}>
          Delete
        </a>
      </td>
    </tr>
);

export default class ViewStore extends Component {
  constructor(props) {
    super(props);

    this.onSearchTerm = this.onSearchTerm.bind(this);
    this.onSubmitAnything = this.onSubmitAnything.bind(this);
    this.deleteBook = this.deleteBook.bind(this);

    this.state = {
      store: [],
      books: [],
      send1: ""
    };
  }

  onSearchTerm(e) {
    this.setState({
      send1: e.target.value,
    });
  }

  async onSubmitAnything(e) {
    e.preventDefault();
    console.log("Here")
    const response = await fetch('/api/books/search/' + this.state.send1 + '/' + this.props.match.params.id);
    const body2 = await response.json();
    this.setState({books: body2});
    console.log(this.state.books);
  }

  async componentDidMount() {
    this.state.send2 = this.props.match.params.id
    const response = await fetch('/api/store/' + this.props.match.params.id);
    const body = await response.json();
    this.setState({store: body});
    console.log(this.state.store);

    const response1 = await fetch('/api/store/books/' + this.props.match.params.id);
    const body1 = await response1.json();
    this.setState({books: body1});
    console.log(this.state.books);
  }

  async deleteBook(id) {
    console.log(id);
    await fetch('/api/books/delete/' + id);
  }

  bookList() {
    return this.state.books.map((currentbook) => {
      return (
        <Book
          book={currentbook}
          deleteBook={this.deleteBook}
          key={currentbook._id}
        />
      );
    });
  }

  render() {
    return (
      <div class="items-center">
        <h3 class="text-4xl font-medium text-gray-600">{this.state.store.name}</h3>
        <h3 class="mb-5 text-2xl font-medium text-gray-600">Owner: {this.state.store.owner}</h3>
        <h3 class="text-md font-medium text-gray-600"> Located at {this.state.store.location}</h3>
        <h3 class="text-md font-medium text-gray-600"> Total Book Count {this.state.store.book_count}</h3>
        <div class="flex flex-col justify-center items-center">
        <div className="mt-10 bg-white mr-100 border-4 border-solid border-gray-200">
        <div class="mb-5 border-4 border-solid border-gray-100 bg-gray-100 text-xl font-medium text-cyan-600">Book List</div>
        <table class="table-fixed">
            <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Publisher
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Value
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {this.bookList()}
            </tbody>
        </table>
      </div>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href={"/book/create/" + this.props.match.params.id} className="text-indigo-600 hover:text-indigo-900">
          Add Book
        </a>
      </td>
      <div class="flex items-center justify-center ">
        <div class="flex border-2 border-gray-200 rounded">
        <input type="text" class="px-4 py-2 w-80" placeholder="Search..." value={this.state.send1} onChange={this.onSearchTerm}/>
        <button class="px-4 text-white bg-gray-600 border-l " onClick={this.onSubmitAnything.bind(this)}>
            Search
        </button>
    </div>
    </div>
    </div>
      </div>
    );
  }
}