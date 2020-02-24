import React, { Component } from 'react';
import AuthorApiService from '../../services/authorapi-service';
import { withRouter } from 'react-router-dom';

class AuthorDescription extends Component {
  componentDidMount() {

    const { id } = this.props.match.params;
    this.updateAuthor(id);

  }

  apiService = new AuthorApiService();
  
  state = {
    loading: true,
    data: null,
  }
  updateAuthor(id) {
    this.apiService.getAuthor(id)
      .then((data) => {
        this.setState({
          data: data,
          loading: false
        });
      },
      (error) => {
        this.setState({
          data: [
            {id: 0, name: "Якуб Колас", yer: "1924"},
            {id: 1, name: "Янка Купала", yer: "1926"},
            {id: 2, name: "Янка Купала", yer: "1927"},
            {id: 3, name: "Янка Купала", yer: "1928"}
          ],
          loading: false
        });
      })
  }
  render() {
    console.log(this.state);
    if (!this.state.data) {
      return <div>
        <h2>Loading...</h2>
      </div>;
    }
    const { id } = this.props.match.params;
    const {name, yer} = this.state.data[id];
    return (
      <div>{`Писатель id = ${id}, Имя = ${name}, ${yer}`}</div>
      );
  }
}
// function AuthorDescription({match}) {
//   const { id } = match.params;
//   return (
//   <div>{`Писатель id = ${id}`}</div>
//   );
// }

export default withRouter(AuthorDescription);