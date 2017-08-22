let getData = ( msg, shouldIErrorOut, callback ) => {
  setTimeout( () => {
    if ( shouldIErrorOut ) {
      return callback( 'fake error from db' )
    }

    return callback( null, msg || 'some success value' );
  }, 1500 );
};

let getMoreData = getData;
let getEvenMoreData = getData;

let getDataWithTwoCallbacks = ( msg, shouldIErrorOut, success, error ) => {
  getData( msg, shouldIErrorOut, ( err, msg ) => err ? error( err ) : success( msg ) );
};

let getDataP = ( msg, shouldIErrorOut ) => new Promise( ( resolve, reject ) => {
  getData( msg, shouldIErrorOut, ( err, msg ) => {
    if ( err ) {
      return reject( err );
    }

    return resolve( msg );
  });
});

const doubleAsync = n => new Promise( res => setTimeout( () => res( n*2 ), 1500 ) )
let getDataO = ( msg, shouldIErrorOut ) => Rx.Observable.fromPromise( getDataP( msg, shouldIErrorOut ) );
let getNums = () => Rx.Observable.range(1,5);

const printMsg = msg => console.log( `SUCCESS: ${msg}` );
const printErr = msg => console.error( `ERROR: ${msg}` );

Rx.Observable.fromEvent( document.getElementById( 'pingBtn' ), 'click' )
.debounce( () => Rx.Observable.interval( 1000 ) )
.subscribe( () => printMsg( 'clicked!' ) );
