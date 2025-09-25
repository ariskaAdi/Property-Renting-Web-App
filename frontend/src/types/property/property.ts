export enum PropertyCategory {
  apartment = "apartment",
  house = "house",
  villa = "villa",
  hotel = "hotel",
  hostel = "hostel",
  guesthouse = "guesthouse",
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface RoomData {
  id: string;
  name: string;
}

>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
export interface createProperty {
  name: string;
  description: string;
  address: string;
  city: string;
  province: string;
  zip_code: string;
  latitude: string;
  longitude: string;
  main_image: File;
  property_category: PropertyCategory;
<<<<<<< HEAD
=======
  rooms?: RoomData[];
}

export interface updateProperty {
  name?: string;
  description?: string;
  address?: string;
  city?: string;
  province?: string;
  zip_code?: string;
  latitude?: string;
  longitude?: string;
  main_image?: File | null;
  property_category: PropertyCategory;
}

export interface updateProperty {
  name?: string;
  description?: string;
  address?: string;
  city?: string;
  province?: string;
  zip_code?: string;
  latitude?: string;
  longitude?: string;
  main_image?: File | null;
  property_category: PropertyCategory;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
}

export interface RoomImage {
  id: string;
  room_id: string;
  image_url: string;
  created_at: string;
}

export interface Room {
  id: string;
  property_id: string;
  name: string;
  description: string;
<<<<<<< HEAD
  base_price: string;
=======
  base_price: number;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
  capacity: number;
  image: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  total_rooms: number;
  room_images: RoomImage[];
<<<<<<< HEAD
  room_availability: string;
=======
  room_availability?: { id: string; date: string; is_available: boolean }[];
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
}

export interface Property {
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  province: string;
  zip_code: string;
<<<<<<< HEAD
  latitude: string;
  longitude: string;
=======
  latitude: number;
  longitude: number;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
  main_image: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  property_category: string;
  rooms: Room[];
}

export interface Tenant {
  id: string;
  logo: string;
  company_name: string;
}

export interface PropertyResponse {
  success: boolean;
  message: string;
  tenant: Tenant;
  properties: Property[];
<<<<<<< HEAD
=======
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
>>>>>>> main
=======
}

export interface PropertyFilters {
  property_category?: string;
  name?: string;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
}
