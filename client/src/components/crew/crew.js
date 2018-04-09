import React, { Component } from 'react';
import './crew.css';

class Crew extends Component {
  constructor() {
      super();
      this.state = {
          crew: []
      }
  }

  componentDidMount() {
      fetch('/api/crew')
        .then(res => res.json())
        .then(crew => this.setState({crew}, () => console.log('Crew fetched...', crew)));
  }

  render() {
    return (
      <div>
        <h2>Crew</h2>
        <ul className="list-group">
            {this.state.crew.map(member =>
                <li className="list-group-item" key={member.id}>{member.firstName} {member.lastName}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default Crew;