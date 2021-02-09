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
import { DateTimePicker } from "material-ui-pickers";

// Custom Actions


// START IMPORT ACTIONS
import CourseActions from "../redux/actions/CourseActions";

// END IMPORT ACTIONS

/** APIs

* actionsCourse.create
*	@description CRUD ACTION create
*
* actionsCourse.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCourse.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class CourseEdit extends Component {
  // Init course
  constructor(props) {
    super(props);
    this.state = {
      course: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCourse.loadCourse(this.props.match.params.id);
    }
    
  }

  // Insert props course in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      course: props.course
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.course._id) {
      this.props.actionsCourse.saveCourse(this.state.course).then(data => {
        this.props.history.push("/courses/");
      });
    } else {
      this.props.actionsCourse.createCourse(this.state.course).then(data => {
        this.props.history.push("/courses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Course Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="description"
            label="Description"
            value={this.state.course.description || ""}
            onChange={Utils.handleChange.bind(this, "course")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.course.description && this.state.course.description === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="end_date"
            label="End_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.course.end_date
                ? new Date(this.state.course.end_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "course", "end_date")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.course.end_date && this.state.course.end_date === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="start_date"
            label="Start_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.course.start_date
                ? new Date(this.state.course.start_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "course", "start_date")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.course.start_date && this.state.course.start_date === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="title"
            label="Title"
            value={this.state.course.title || ""}
            onChange={Utils.handleChange.bind(this, "course")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.course.title && this.state.course.title === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/courses/">Back to list</Link>

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
    actionsCourse: bindActionCreators(CourseActions, dispatch),
  };
};

// Validate types
CourseEdit.propTypes = { 
  actionsCourse: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    course: state.CourseEditReducer.course
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseEdit);
