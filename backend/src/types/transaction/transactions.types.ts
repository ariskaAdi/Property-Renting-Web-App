export interface FindRooms {
  room_id: string;
  quantity: number;
  room: {
    total_rooms: number;
  };
}

export interface Overlapping {
  room_id: string;
  quantity: number;
}

export type FormattedRoom = {
    name: string;
    check_in_date: string[];
    check_out_date: string[];
    guests_count: number;
    quantity: number;
    subtotal: number,
    room_id: string;
}

export type BookingTemplateData = {
guestName: string;
  booking_id: string;
  propertyName: string;
  rooms: FormattedRoom[];
}

export interface BookingRoomCompleteType {
    booking_id: string;
    room_id: string;
    quantity: number;
    id: string;
    check_in_date: Date;
    check_out_date: Date;
    guests_count: number;
    nights: number;
    subtotal: number;
    room: {
        total_rooms: number;
        name: string;
        property: {
            name: string;
        };
    };
}