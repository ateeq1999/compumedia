// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import RoleActions from "../redux/actions/RoleActions";

// END IMPORT ACTIONS

/** APIs

* actionsRole.create
*	@description CRUD ACTION create
*
* actionsRole.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsRole.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class RoleEdit extends Component {
  // Init role
  constructor(props) {
    super(props);
    this.state = {
      role: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsRole.loadRole(this.props.match.params.id);
    }
    
  }

  // Insert props role in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      role: props.role
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.role._id) {
      this.props.actionsRole.saveRole(this.state.role).then(data => {
        this.props.history.push("/roles/");
      });
    } else {
      this.props.actionsRole.createRole(this.state.role).then(data => {
        this.props.history.push("/roles/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Role Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.role.name || ""}
            onChange={Utils.handleChange.bind(this, "role")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.role.name && this.state.role.name === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/roles/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsRole: bindActionCreators(RoleActions, dispatch),
  };
};

// Validate types
RoleEdit.propTypes = { 
  actionsRole: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    role: state.RoleEditReducer.role
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoleEdit);
