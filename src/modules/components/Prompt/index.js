import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

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
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
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
        className={classes.root}
      >
        <DialogTitle id="customized-dialog-title" onClose={prompt.hide}>
          {prompt.title}
        </DialogTitle>
        <DialogContent dividers>
          <Template prompt={prompt} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Prompt;
