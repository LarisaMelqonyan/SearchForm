import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AlertDialog from "./AlertDialog";

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false
    };
  }
  showDialog = () => {
    this.setState({ openDialog: true });
  };

  closeDialog = () => {
    this.setState({ openDialog: false });
  };
  render() {
    const { openDialog } = this.state;
    const { classes } = this.props;
    return (
      <List>
        {this.props.items.map(item => (
          <ListItem
            className={classes.list}
            button
            key={item.id}
            onClick={this.showDialog}
          >
            {item.text}
          </ListItem>
        ))}
        <AlertDialog open={openDialog} onClose={this.closeDialog} />
      </List>
    );
  }
}
const styles = theme => ({
  list: {
    width: "32%"
  }
});

export default withStyles(styles)(SearchList);
