import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import "../navbar.css";

class Nav extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  };

  render() {
    const { user } = this.props;
    return (
      <div className="nav-container">
        <div className="inner-container">
          <ul className="nav-list">
            <li className="nav-item title">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item green">
              <Link to="/add">New Question</Link>
            </li>
            <li className="nav-item split title">
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item title">{`Hello ${user.name}`}</li>
            <li className="nav-item log-out">
              <Link to="/">
                <button className="log-out-button" onClick={this.handleLogout}>
                  Log Out
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser];
  return {
    user
  };
}

export default connect(mapStateToProps)(Nav);
