import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
     super(props);

  this.state = {
    rooms: [],
    value: ''
  };
  this.roomsRef = this.props.firebase.database().ref('rooms');
  this.createRoom = this.createRoom.bind(this);
  this.handleChange = this.handleChange.bind(this);


  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })


   });
  }

  createRoom(e) {
    e.preventDefault();
    this.roomsRef.push({
    name: this.state.value });
    this.setState({ value: ''});


  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  render() {
        return (
        <section className='Chat-rooms'>
          <form onSubmit={this.createRoom}>
          <label>
            New Chat Room:
          </label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Add" />
          </form>
          <div className='Chat-room-list'>
            { this.state.rooms.map((room, index) =>
              <div key={room.key}>{room.name}</div>
            )}
          </div>
        </section>
    );
  }
}

export default RoomList;
