
getAllPosts();
getRecentPosts();
getPopularPosts();
// Function to hide the loader

// Function to define innerHTML for HTML table
async function getAllPosts() {
	var username = localStorage.getItem("username");
	console.log(username);
	
	const response = await fetch("http://localhost:1337/posts?_limit=3");
	// Storing data in form of JSON
	var data = await response.json();
	if (response) {
		
		
		for (var i = 0; i < data.length; i++) {
			var post = data[i];
			var imageUrl = "http://localhost:1337" + post.image.url;
			var likes = post.likes;
			var caption = post.title;
			var content = post.content;
			var user = post.user.username;
		var id = post.id;		var published_at = post.published_at;


			$("#three-posts").append('<div class="col m4">'+'<a href="singlePost.html" onclick="singlePage('+id+');">' + '<div class="container card white round margin">' + '<br>' + '<img src=' + imageUrl + ' alt="Avatar" class="left circle margin-right" style="width:60px">' + '<span class="right opacity">' + published_at + '</span>' + '<h4>' + user + '</h4><br>' + '<hr class="clear"><div class="row-padding" style="margin:0 -16px">' + '<div class="half">' + '<img src=' + imageUrl + ' style="width:100%" alt="Northern Lights" class="margin-bottom">' + '</div>' + '<div class="half">' + '<p>' + caption + '</p>' + '</div>' + '</div>' + '<button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-thumbs-up like"></i>  Like ' + likes + '</button> ' + '<button type="button" class="button theme-d2 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> ' + '</div>' + '</a>'+'<div>');







		}

	}


}
// async function getAllPosts() {
// 	var username = localStorage.getItem("username");
// 	console.log(username);
	
// 	const response = await fetch('http://localhost:1337/posts');
// 	// const response = await fetch("http://localhost:1337/posts?_limit=3");
// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	if (response) {
		
// 		for (var i = 0; i < data.length; i++) {
// 			var post = data[i];
// 			var imageUrl = "http://localhost:1337" + post.image.url;
// 			var likes = post.likes;
// 			var caption = post.title;
// 			var content = post.content;
// 			var user = post.user.username;
// 		var id = post.id;		var published_at = post.published_at;


// 			$("#three-posts").append('<div class="col m4">'+'<a href="singlePost.html" onclick="singlePage('+id+');">' + '<div class="container card white round margin">' + '<br>' + '<img src=' + imageUrl + ' alt="Avatar" class="left circle margin-right" style="width:60px">' + '<span class="right opacity">' + published_at + '</span>' + '<h4>' + user + '</h4><br>' + '<hr class="clear"><div class="row-padding" style="margin:0 -16px">' + '<div class="half">' + '<img src=' + imageUrl + ' style="width:100%" alt="Northern Lights" class="margin-bottom">' + '</div>' + '<div class="half">' + '<p>' + caption + '</p>' + '</div>' + '</div>' + '<button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-thumbs-up like"></i>  Like ' + likes + '</button> ' + '<button type="button" class="button theme-d2 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> ' + '</div>' + '</a>'+'<div>');







// 		}

// 	}


// }
async function getRecentPosts() {
	const response = await fetch("http://localhost:1337/posts?_sort=published_at:desc");
	// Storing data in form of JSON
	var data = await response.json();
	if (response) {
		
		for (var i = 0; i < data.length; i++) {
			var post = data[i];
			var imageUrl = "http://localhost:1337" + post.image.url;
			var likes = post.likes;
			var caption = post.title;
			var content = post.content;
			var published_at = post.published_at;
			var user = post.user.username;
			var id = post.id;
			$("#recent-posts").append('<a href="singlePost.html" onclick="singlePage('+id+');">' + '<div class="container card white round margin">' + '<br>' + '<img src=' + imageUrl + ' alt="Avatar" class="left circle margin-right" style="width:60px">' + '<span class="right opacity">' + published_at + '</span>' + '<h4>' + user + '</h4><br>' + '<hr class="clear"><div class="row-padding" style="margin:0 -16px">' + '<div class="half">' + '<img src=' + imageUrl + ' style="width:100%" alt="Northern Lights" class="margin-bottom">' + '</div>' + '<div class="half">' + '<p>' + caption + '</p>' + '</div>' + '</div>' + '<button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-thumbs-up like"></i>  Like ' + likes + '</button> ' + '<button type="button" class="button theme-d2 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> ' + '</div>' + '</a>');







		}

	}

}
async function getPopularPosts() {
	const response = await fetch("http://localhost:1337/posts?_sort=likes:desc");
	// Storing data in form of JSON
	var data = await response.json();
	if (response) {
		
		for (var i = 0; i < data.length; i++) {
			var post = data[i];
			var imageUrl = "http://localhost:1337" + post.image.url;
			var id = post.id;
			var likes = post.likes;
			var caption = post.title;
			var content = post.content;
			var published_at = post.published_at;
			var user = post.user.username;
			
			
			$("#popular-posts").append('<a href="singlePost.html" onclick="singlePage('+id+');">' + '<div class="container card white round margin">' + '<br>' + '<img src=' + imageUrl + ' alt="Avatar" class="left circle margin-right" style="width:60px">' + '<span class="right opacity">' + published_at + '</span>' + '<h4>' + user + '</h4><br>' + '<hr class="clear"><div class="row-padding" style="margin:0 -16px">' + '<div class="half">' + '<img src=' + imageUrl + ' style="width:100%" alt="Northern Lights" class="margin-bottom">' + '</div>' + '<div class="half">' + '<p>' + caption + '</p>' + '</div>' + '</div>' + '<button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-thumbs-up like"></i>  Like ' + likes + '</button> ' + '<button type="button" class="button theme-d2 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> ' + '</div>' + '</a>');





		}

	}

}
function singlePage(postId) {
	window.location.href = "singlePost.html";
	localStorage.setItem("postId",postId);	
	getSinglePost();
	
}
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


		$("#single-post").append('<a href="singlePost.html" onclick="singlePage('+id+');">' + '<div class="container card white round margin">' + '<br>' + '<img src=' + imageUrl + ' alt="Avatar" class="left circle margin-right" style="width:60px">' + '<span class="right opacity">' + published_at + '</span>' + '<h4>' + user + '</h4><br>' + '<hr class="clear"><div class="row-padding" style="margin:0 -16px">' + '<div class="half">' + '<img src=' + imageUrl + ' style="width:100%" alt="Northern Lights" class="margin-bottom">' + '</div>' + '<div class="half">' + '<p>' + caption + '</p>' + '</div>' + '</div>' + '<button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-thumbs-up like"></i>  Like ' + likes + '</button> ' + '<button type="button" class="button theme-d2 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> ' + '</div>' + '</a>');





	  

	}

  }



