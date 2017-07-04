export class Amount {
  id: number;
  amount: number;
  customer_id: number;

  constructor( values: Object = {} ) {
    Object.assign( this, values );
  }
}
