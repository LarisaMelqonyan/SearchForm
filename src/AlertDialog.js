import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

class AlertDialog extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, open, onClose } = this.props;

    return (
      <Dialog open={open}>
        <DialogTitle id="alert-dialog-title">{"Some title here"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Hello World
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AlertDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({});

export default withStyles(styles)(AlertDialog);
