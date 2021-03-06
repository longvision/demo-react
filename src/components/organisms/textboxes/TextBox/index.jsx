import React, { Fragment } from 'react';

import { useSelector } from 'react-redux';
import { makeStyles, Box, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    // height: '88%',
    textAlign: 'left',
    overflow: 'auto',
    marginTop: 10,
  },
  box: {
    backgroundColor: 'white',
    height: '100%',
    verticalAlign: 'middle',
    width: '100%',
    display: 'table-cell',
  },
  body: { whiteSpace: 'pre-line' },
  title: { verticalAlign: 'middle' },
}));

function TextBox({ variable, source }) {
  const classes = useStyles();
  const description = useSelector((state) => state.info.selectedDescription);

  function getURLHost(url) {
    let hostname;
    if (url.indexOf('//') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }
    // find & remove port number
    hostname = hostname.split(':')[0];
    // find & remove "?"
    hostname = hostname.split('?')[0];
    return hostname;
  }

  return (
    <>
      <Container className={classes.container}>
        <Box>
          <Typography
            variant="subtitle1"
            component="subtitle1"
            // align="justify"
            gutterBottom
          >
            <strong>{description.header}</strong>
          </Typography>
        </Box>
      </Container>
      <Container className={classes.container}>
        <Box className={classes.box} textOverflow="ellipsis">
          {description.body.split('|n|').map((item, key) => (
            <Typography
              variant="subtitle1"
              component="p"
              // align="justify"
              gutterBottom
              key={key}
            >
              {item !== '|n|' && item}
              <br />
            </Typography>
          ))}
          <Box />
          <Typography variant="body1" component="body1" gutterBottom>
            <strong>Fonte:</strong>
          </Typography>
          <Typography variant="subtitle1" component="p" />
          <Typography gutterBottom>
            {description.source && (
              <a
                href={`${description.source.match(/href="([^"]*)/)[1]}`}
                target="_blank"
                rel="noreferrer"
              >
                {getURLHost(description.source.match(/href="([^"]*)/)[1])}
              </a>
            )}
          </Typography>
          <Box />
          <Typography variant="body1" component="body1" gutterBottom>
            <strong>Refer??ncia:</strong>
          </Typography>
          <Typography
            variant="body2"
            component="p"
            // align="justify"
            gutterBottom
          >
            {description.reference}
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default TextBox;
