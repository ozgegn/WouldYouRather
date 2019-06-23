import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

class LoginUserSelection extends Component {
  render() {
    const { users, selectedUser, onUserSelect } = this.props;

    let items = [];
    if (users.length !== undefined) {
      items = users.map(user => {
        return (
          <Dropdown.Item key={user} onClick={() => onUserSelect(user)}>
            {user}
          </Dropdown.Item>
        );
      });
    }

    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {selectedUser === null ? "Who Are You?" : selectedUser}
          </Dropdown.Toggle>
          <Dropdown.Menu>{items}</Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
  };
}
export default connect(mapStateToProps)(LoginUserSelection);
