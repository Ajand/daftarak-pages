import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import Divider from '../Divider'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
    fontFamily: 'Javan'
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography className={classes.title} variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon style={{ color: "black" }} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minWidth: 300,
  },
}))(MuiDialogContent);

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 300,
    border: "4px solid black",
    borderRadius: 20,
  },
}));

const Prompt = ({ prompt }) => {
  const classes = useStyles();

  const { Template } = prompt;
  
  return (
    <div>
      <Dialog
        onClose={prompt.hide}
        aria-labelledby="customized-dialog-title"
        open={prompt.isOpen}
        classes={{ paper: classes.root }}
      >
        <DialogTitle id="customized-dialog-title" onClose={prompt.hide}>
          {prompt.title}
        </DialogTitle>
        <Divider />
        <DialogContent >
          <Template prompt={prompt} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Prompt;
