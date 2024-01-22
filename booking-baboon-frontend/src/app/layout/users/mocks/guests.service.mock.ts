import {Guest} from "../models/guest.model";

enum UserStatus{
  Inactive= "Inactive",
  Active="Active",
  Blocked="Blocked"
}

enum Role{
  UNAUTHORIZED,
  GUEST,
  HOST,
  ADMIN
}
const mockGuest1: Guest = {
  id: 1,
  email: 'guest1@example.com',
  firstName: 'John',
  lastName: 'Doe',
  address: '123 Main St',
  phoneNumber: '555-1234',
  status: UserStatus.Active,
  role: Role.GUEST,
  ignoredNotifications: [],
  favorites: [
    {
      id: 1,
      // Other properties of Accommodation
    },
    {
      id: 2,
      // Other properties of Accommodation
    },
  ],
};

const mockGuest2: Guest = {
  id: 2,
  email: 'guest2@example.com',
  firstName: 'Jane',
  lastName: 'Smith',
  address: '456 Oak St',
  phoneNumber: '555-5678',
  status: UserStatus.Active,
  role: Role.GUEST,
  ignoredNotifications: [],
  favorites: [
    {
      id: 3,
      // Other properties of Accommodation
    },
    {
      id: 4,
      // Other properties of Accommodation
    },
  ],
};

const mockGuestArray: Guest[] = [mockGuest1, mockGuest2];

export { mockGuest1, mockGuest2, mockGuestArray};

