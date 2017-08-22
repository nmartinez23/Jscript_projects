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
