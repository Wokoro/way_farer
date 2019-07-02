/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */

import { Http404Error, HttpClientError } from './error.spec';

export const notFoundError = (router) => {
  router.use((req, res, next) => {
    throw new Http404Error('Not found');
  });
};

export const clientError = (router) => {
  router.use((err, req, res, next) => {
    if (err instanceof HttpClientError) {
      return res.status(err.status).send(err.message);
    }
    next(err);
  });
};

export const serverError = (router) => {
  router.use((err, req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
      return res.status(500).send('Internal server error');
    }
    res.status(500).send(err.stack);
  });
};
