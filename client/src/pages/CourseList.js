// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import CourseActions from "../redux/actions/CourseActions";

// END IMPORT ACTIONS

/** APIs

* actionsCourse.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsCourse.list
*	@description CRUD ACTION list
*

**/


class CourseList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsCourse.loadCourseList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsCourse.deleteCourse(this.state.idDelete).then(data => {
      this.props.actionsCourse.loadCourseList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "description",
        type: "string",
        label: "Description"
      }, 
      {
        id: "end_date",
        type: "date",
        label: "End_date"
      }, 
      {
        id: "start_date",
        type: "date",
        label: "Start_date"
      }, 
      {
        id: "title",
        type: "string",
        label: "Title"
      },
    ];
    const link = "/courses/";

    return (
      <div>
        <h1>Course List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">End_date</TableCell>
              <TableCell align="right">Start_date</TableCell>
              <TableCell align="right">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/courses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.description }</TableCell>
                <TableCell align="right">{ row.end_date }</TableCell>
                <TableCell align="right">{ row.start_date }</TableCell>
                <TableCell align="right">{ row.title }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/courses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
CourseList.propTypes = { 
  actionsCourse: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.CourseListReducer.listCourse
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseList);
