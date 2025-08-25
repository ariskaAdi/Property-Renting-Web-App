export enum PropertyCategory {
  apartment = "apartment",
  house = "house",
  villa = "villa",
  hotel = "hotel",
  hostel = "hostel",
  guesthouse = "guesthouse",
}

export interface Property {
  id: number;
  title: string;
  location: string;
  image: string;
  rating: number;
  beds: number;
  baths: number;
  guests: number;
  price: string;
  period: string;
  originalPrice?: string;
  badge?: string;
  badgeColor?: string;
  category?: PropertyCategory;
}
