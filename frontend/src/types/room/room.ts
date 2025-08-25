export interface Room {
  id: string;
  property_id: string;
  name: string;
  description: string;
  base_price: string;
  capacity: number;
  image: string;
  total_rooms: number;
}

export interface ApiProperty {
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  province: string;
  zip_code: string;
  latitude: string;
  longitude: string;
  main_image: string;
  property_category: string;
  rooms: Room[];
}
