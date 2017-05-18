export class Customer {
  id: number;
  name: string = '';
  first_name: string = '';
  last_name: string = '';
  cp: string = '';
  phone: string = '';
  email: string;
  user_id: number;
  longitude: string;
  latitude: string;

  constructor( values: Object = {} ) {
    Object.assign( this, values );
  }
}
