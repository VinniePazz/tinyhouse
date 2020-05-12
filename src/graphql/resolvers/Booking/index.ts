import { IResolvers } from 'apollo-server-express';
import { Database, Listing, Booking } from '../../../lib/types';

export const bookingResolvers: IResolvers = {
  Booking: {
    id: (booking: Booking): string => {
      return booking._id.toString();
    },
    listing: async (
      booking: Booking,
      _args: {},
      { db }: { db: Database }
    ): Promise<Listing | null> => {
      return await db.listings.findOne({ _id: booking.listing });
    },
  },
};
