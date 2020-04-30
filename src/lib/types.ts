import { ObjectId, Collection } from 'mongodb';

export interface Viewer {
  _id?: string;
  token?: string;
  avatar?: string;
  walletId?: string;
  didRequest?: boolean;
}

export enum ListingType {
  Apartment = 'APARTMENT',
  House = 'HOUSE',
}

export interface BookingsIndexMonth {
  [key: string]: boolean;
}

export interface BookingsIndexYear {
  [key: string]: BookingsIndexMonth;
}

export interface BookingsIndex {
  [key: string]: BookingsIndexYear;
}

export interface User {
  _id: string; // string instead of ObjectId for third-party auth libs
  token: string;
  name: string;
  avatar: string;
  contact: string;
  walletId?: string;
  income: number;
  bookings: ObjectId[]; // one-to-many relationship
  listings: ObjectId[]; // one-to-many relationship
}

export interface Listing {
  _id: ObjectId;
  title: string;
  description: string;
  image: string;
  host: string; // one-to-one relationship (User id which is a string)
  type: ListingType;
  country: string;
  city: string;
  address: string;
  admin: string;
  bookings: ObjectId[];
  bookingsIndex: BookingsIndex;
  price: number;
  numOfGuests: number;
}

export interface Booking {
  _id: ObjectId;
  listing: ObjectId; // one-to-one
  tenant: string;
  checkIn: string;
  checkOut: string;
}

export interface Database {
  users: Collection<User>;
  listings: Collection<Listing>;
  bookings: Collection<Booking>;
}
