const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
/* #region  MIDDLEWARES */

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/* #endregion */

/* #region  ROUTE HANDLERS */

/* #endregion */
/* #region  ROUTES */
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getATour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);
/* #endregion */

/* #region   START SERVER*/
module.exports = app;
/* #endregion */
