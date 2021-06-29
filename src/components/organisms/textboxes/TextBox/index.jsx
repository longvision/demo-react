import { makeStyles, Box, Typography, Container } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  container: {
    height: '95%',
    textAlign: 'left',
    overflow: 'auto',
  },
  box: {
    backgroundColor: 'white',
    height: '100%',
    verticalAlign: 'middle',
    width: '100%',
    display: 'table-cell',
  },
}));

function TextBox({ variable, source }) {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Typography
          variant="subtitle1"
          component="subtitle1"
          align="justify"
          gutterBottom
        >
          <strong>
            Descrição da
            {variable}
          </strong>
        </Typography>
      </Box>
      <Container className={classes.container}>
        <Box className={classes.box} textOverflow="ellipsis">
          <Typography
            variant="subtitle1"
            component="p"
            align="justify"
            gutterBottom
          >
            Interactive message templates expand the content you can send
            recipients beyond the standard message template and media messages
            template types to include interactive buttons using the components
            object. There are two types of predefined buttons offered:
            Call-to-Action — Allows your customer to call a phone number and
            visit a website Quick Reply — Allows your customer to return a
            simple text message These buttons can be attached to text messages
            or media messages. Once your interactive message templates have been
            created and approved, you can use them in notification messages as
            well as customer service/care messages.
          </Typography>
          <Box />
          <Typography variant="body1" component="body1" gutterBottom>
            <strong>
              Fonte:
              {source}
            </strong>
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            align="justify"
            gutterBottom
          >
            Interactive message templates expand the content you can send
            recipients beyond the standard message template and media messages
            template types to include interactive buttons using the components
            object. There are two types of predefined buttons offered:
          </Typography>
          <Box />
          <Typography variant="body1" component="body1" gutterBottom>
            <strong>Referência:</strong>
          </Typography>
          <Typography
            variant="body2"
            component="p"
            align="justify"
            gutterBottom
          >
            Interactive message templates expand the content you can send
            recipients beyond the standard message template and media messages
            template types to include interactive buttons using the components
            object. There are two types of predefined buttons offered:
            Call-to-Action — Allows your customer to call a phone number and
            visit a website Quick Reply — Allows your customer to return a
            simple text message These buttons can be attached to text messages
            or media messages. Once your interactive message templates have been
            created and approved, you can use them in notification messages as
            well as customer service/care messages.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default TextBox;
