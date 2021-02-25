import React from "react";
import { makeStyles, Button, Divider } from "@material-ui/core";
import { Row, Col } from "react-grid-system";
import DaftarakButton from '../../Button'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "IRANSansDN",
    fontWeight: 500,
    fontSize: '1.1em'
  },
  content: {
    marginBottom: theme.spacing(2),
  },
  action: {
    marginTop: theme.spacing(2),
  },
}));

const InstallTemplate = ({ prompt }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        میدونستی که میتونی دفترک رو بدون نیاز به دانلود روی گوشیت نصب کنی و هر
        موقع که خواستی مستقیم وارد اپ بشی؟
      </div>
      <div className={classes.action}>
        <Row>
          <Col xs={6}>
            <DaftarakButton onClick={() => prompt.hide()} buttonStyle="blue">
              بیخیال
            </DaftarakButton>
          </Col>
          <Col xs={6}>
            <DaftarakButton onClick={() => prompt.hide()} color="primary" variant="contained" fullWidth>
              نصب
            </DaftarakButton>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InstallTemplate;
