import React, { Component } from "react";
import { Link } from "react-router-dom";

const Store = (props) => (
  <tr key={props.store.name}>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={props.store.imageURL} alt="" />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">{props.store.name}</div>
          <div className="text-sm text-gray-500">{props.store.owner}</div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">{props.store.location}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        {props.store.book_count}
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a href="#" className="text-indigo-600 hover:text-indigo-900">
        Edit
      </a>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a href="#" className="text-indigo-600 hover:text-indigo-900">
        Delete
      </a>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-indigo-600 hover:text-indigo-900">
    <Link to={'/store/' + props.store.id}>View</Link>
    </td>
  </tr>
);

class StoreList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.state = { stores: [] };
  }

  // This method will get the data from the database.
  async componentDidMount() {
    const response = await fetch('/api/stores/');
      const body = await response.json();
      this.setState({stores: body});
  }

  // This method will delete a record based on the method
  deleteStore(id) {
    
  }

  // This method will map out the users on the table
  storeList() {
    return this.state.stores.map((currentstore) => {
      return (
        <Store
          store={currentstore}
          deleteStore={this.deleteStore}
          key={currentstore._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div class="w-500 flex flex-col justify-center items-center">
        <div className="mt-10 bg-white mr-100 border-4 border-solid border-gray-200">
        <div class="mb-5 border-4 border-solid border-gray-100 bg-gray-100 text-xl font-medium text-cyan-600">Store List</div>
        <table class="table-fixed">
            <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Store Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Book Count
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
            <tbody className="justify-center items-center bg-white divide-y divide-gray-200">
              {this.storeList()}
            </tbody>
        </table>
      </div>
    </div>
    );
  }
}

export default StoreList;