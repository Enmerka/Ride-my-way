import express from 'express';
import { json, urlencoded } from 'body-parser';
import RideOfferController from '../../controllers/RideOfferController';
import { ensureAutheticated } from '../../middleware/auth/authMiddleware';

const rideoffersRoute = express();

// for parsing application/json
rideoffersRoute.use(json());

// for parsing application/x-ww-form-urlencoded
rideoffersRoute.use(urlencoded({ extended: true }));
rideoffersRoute.use(ensureAutheticated);

rideoffersRoute.route('/rides')


  /* Create ride offer */
  .post(RideOfferController.createRideOffer);


rideoffersRoute.route('/rides/:rideId/requests')


  /* Create ride offer */
  .get(RideOfferController.fetchAllRideRequest);

rideoffersRoute.route('/rides/:rideId/requests/:requestId')


  /* respond to ride request */
  .put(RideOfferController.acceptRideRequest);

export default rideoffersRoute;
