var messages = [
  {
 "user": {
 "name": "Kat",
 "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
 },
 "message": {
 "text": "I'm changing the due date on the landing page because I need more time. The designs look great!",
 "date": 1534885670000
 }
 },
 {
 "user": {
 "name": "Ron",
 "image": "https://images.pexels.com/photos/1498335/pexels-photo-1498335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
 },
 "message": {
 "text": "I'm changing the due date on the landing page because I need more time. The designs look great!",
 "date": 1534485670000
 }
},
 {
 "user": {
 "name": "Benny",
 "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
 },
 "message": {
 "text": "It is great to finally see this project complete",
 "date": 1534785670000
 }
 },
 {
	 "user": {
	 "name": "Betty",
	 "image": "https://images.pexels.com/photos/1498778/pexels-photo-1498778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
	 },
	 "message": {
	 "text": "Next time I will be able to see things better",
	 "date": 1537564070000
	 }
 }
]

			function createArticle( $message ) {
				let $article = $("<article>").addClass( "message-row");
				let $image = $("<img>").attr( "src" , $message.user.image );
				let $message_image = $("<div>").addClass( "message-image").append( $image );

				let $message_author = $("<span>").addClass( "message-author").text( $message.user.name );

				let $dateMessage = new Date( $message.message.date );
				let $dateTimeOnly = $dateMessage.toLocaleTimeString( );
				let $dateDateOnly = $dateMessage.toLocaleDateString( );

				let $timePieces = $dateTimeOnly.replace( / /gi , ":" ).split( ":"); 
				let $message_time = $("<span>").addClass( "message-time").text( $timePieces[ 0 ] + ":" + $timePieces[ 1 ] + " " +  $timePieces [ 3 ] + " " + $dateDateOnly);
				console.log( "message-2" , $message );
				let $message_text = $("<span>").addClass( "message-text").text( $message.message.text );			
				let $message_meta_text = $("<div>").addClass( "message-meta-text");
				$message_meta_text.append( $message_author );
				$message_meta_text.append( $message_time );	
				$message_meta_text.append( $message_text );

				$article.append( $message_image );
				$article.append( $message_meta_text );
				return $article;
			}


			$( document ).ready(function() {

				$("#txtmessageBox").keydown(function(event){
					if ( event.which === 13 ) {

						/* added additional if else so that when no message enter, 
						it will display message alert */
						
					    var message = $("textarea").val();
						if (message == "") {
                            alert("Please type your message");
                                 } else {

						event.preventDefault( );
					 	let message = {
						 "user": {
						 "name": "Ryan",
						 "image": "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/10400453_243251640103_5734836_n.jpg?_nc_cat=104&_nc_ht=scontent-yyz1-1.xx&oh=2bdaffeaa4ab00a77876ea2f44bd235c&oe=5C7AEF5E"
						 },
						 "message": {
						 "text": event.target.value,
						 "date": new Date()
						 }
					 };		
						let $article = createArticle( message );
	        			$("#messages-list").prepend( $article );	
	        			event.target.value = "";
						console.log( message );			

					}
				}
				 });				

        		console.log ("Data: " ,  messages );
        		messages.forEach( ( message ) => {
        			let $article = createArticle( message );
        			$("#messages-list").append( $article );

        		});
	    	});
