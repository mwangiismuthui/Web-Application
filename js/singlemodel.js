
getSinglePost();
async function getSinglePost() {
	console.log("Hello");

	const response = await fetch("http://localhost:1337/posts/" + localStorage.getItem("postId"));
	// Storing data in form of JSON
	var data = await response.json();
	if (response) {
		console.log(data);

		console.log(data.id);
		var imageUrl = "http://localhost:1337" + data.image.url;
		var likes = data.likes;
		var caption = data.title;
		var content = data.content;
		var published_at = data.published_at;
		var user = data.user.username;
		var id = data.id;


		$("#single-post").append('<a href="" onclick="singlePage(' + data.id + ');">' + '<div class="container card white round margin">' + '<br>' + '<img src=' + imageUrl + ' alt="Avatar" class="left circle margin-right" style="width:60px">' + '<span class="right opacity">' + published_at + '</span>' + '<h4>' + user + '</h4><br>' + '<hr class="clear"><div class="row-padding" style="margin:0 -16px">' + '<div class="half">' + '<img src=' + imageUrl + ' style="width:100%" alt="Northern Lights" class="margin-bottom">' + '</div>' + '<div class="half">' + '<p>' + caption + '</p>' + '</div>' + '</div>' + '<button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-thumbs-up"></i>  Like ' + likes + '</button> ' + '<button type="button" class="button theme-d2 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> ' + '</div>' + '</a>');





	  

	}

  }




