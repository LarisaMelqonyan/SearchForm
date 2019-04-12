import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import SearchList from "./SearchList";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "key",
      anchorEl: null
    };
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.form}>
        <TextField
          label="Search"
          onChange={this.handleChange}
          value={this.state.text}
          variant="outlined"
        />
        {this.state.text.includes("key") ? (
          <List>
            <ListItemText className={classes.list}>
              <SearchList items={this.state.items} />
            </ListItemText>
          </List>
        ) : (
          "enter keyword which is 'key'"
        )}
        <form onSubmit={this.handleSubmit}>
          <Button type="submit" variant="contained" color="primary">
            Search {this.state.items.length}
          </Button>
        </form>

        <div />
      </div>
    );
  }
}

const styles = theme => ({
  form: {
    margin: "auto",
    width: "35%",
    border: "3px solid #73AD21",
    padding: "10px"
  },
  list: {
    width: "100%"
  }
});

export default withStyles(styles)(Search);
