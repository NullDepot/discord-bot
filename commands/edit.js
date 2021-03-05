/*
This file is a placeholder for when users can edit each option after inputting it to +character
*/

module.exports = {
	name: 'edit',
	description: 'Edit the input of different variables from +character',
	execute(message, args, keyv) {

		var name, age, country, picture;

		(async () => {

			name = await keyv.get( 'name' );
			console.log ( 'Name : ' + await keyv.get('name') );

			age = await keyv.get( 'age' );
			console.log ( 'Age : ' + await keyv.get('age') );

			country = await keyv.get( 'country' );
			console.log ( 'Country : ' + await keyv.get('country') );

			picture = await keyv.get( 'picture' );
			console.log ( 'Picture : ' + await keyv.get('picture') );

    })

  }
}
