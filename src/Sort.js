import React from 'react';
import './Search.css';

class Sort extends React.Component {
    constructor(props) {
      super(props);
        
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.props.onSortChange(event.target.value);
    }
  
    render() {
      return (
        <form>
          <label>
            Catégorie 
            <select onChange={this.handleChange}>
              <option value="fantastique">Fantastique</option>
              <option value="aventure">Aventure</option>
              <option value="romantique">Romantique</option>
              <option value="action">Action</option>
            </select>
          </label>
        </form>
      );
    }
  }


  export default Sort;