/////Required
function typeMessage ( message, velocity ) {
	var container = document.getElementById ( "demo" ) ?
	document.getElementById ( "demo" ) :
	document.body.appendChild (
		document.createElement ( "h3" )
		)
	container.style = `color: magenta;`
	
	message.split("").forEach (
		( symbol, index ) =>  setTimeout (
			() => container.textContent += symbol,
			1000 * velocity * index
			)
		)
}
typeMessage ( `Welcome to the hell`, 1 )

////Additional №1

var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                users.filter ( user => user.name === userName )[0].present = true
            },
            showPresent () {
                users.filter ( user => user.present )
                    .forEach ( user => console.log ( user ) )
            },
            showAbsent () {
                users.filter ( user => !user.present )
                    .forEach ( user => console.log ( user ) )
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()
