import {Accommodation} from "../shared/models/accommodation.model";
import {AccommodationType} from "../shared/models/accommodation-type.model";

const mockAccommodation1: Accommodation = {
  id: 1,
  name: "Oceanfront Paradise",
  description: "Beautiful hotel",
  host:  {
    id: 1
  },
  location: {

  },
  amenities: [
    {
      id: 1
    }
  ],
  availablePeriods: [
    {
      id: 1
    }
  ],
  minGuests: 1,
  maxGuests: 100,
  isPricingPerPerson: false,
  type: AccommodationType.Apartment,
  isAutomaticallyAccepted: true,
  images: [
    {
      id: 1
    }
  ],
  isBeingEdited: false,
  cancellationDeadline: 3
};

const mockAccommodationArray: Accommodation[] = [mockAccommodation1];

export { mockAccommodation1, mockAccommodationArray};

