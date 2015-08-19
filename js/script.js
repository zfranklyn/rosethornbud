(function(window, document, undefined) {

	var postDeck = $("#content")[0];
	var postTemplate = $("#post-template")[0];
	var logo = $("#logo")[0];

    var templates = {
        renderPosts: Handlebars.compile(postTemplate.innerHTML)
    };

    var postData = {
    					posts:[
							{
								type:"post",
								name:"Anonymous",
								rose:"went to see a concert at this tavern in Annapolis today / made some quality snapchats with the sis.",
								thorn:"none.",
								bud:"Hopping on a train at 6am for Richmond to chill with bae for a few days :)",
								timestamp:""
							},

							{
								type:"post",
								name:"Dan",
								rose:"awesome day climbing in Central Park and hanging out on roofs with friends with beer and 80s slow jams!",
								thorn:"Central Park date on Tuesday with the most GORGEOUS girl I've seen on Tinder so far and she thinks my bio is amazing :)))",
								bud: "there are only seven days in the week and I want to hang out with more than seven people individually in the evenings",
								timestamp:""
							},

							{	type:"post",
								name:"Anonymous",
								rose:"kickin' it hardcore in Seoul Airport listening to Chasé belt out his solo on an incredible album. ",
								thorn:"leaving asia after two months. Missing my Singapore friends. ",
								bud:"13 hours until I see my family, 14.5 until I see my doggies ",
								timestamp:""
							},

							{
								type:"post",
								name:"Mark",
								rose:"finishing up my internship today, so glad to have met such wonderful inspiring people so passionate about their lives and the work they do... and to work in such a vibrant city with the opportunity to do so many fun things.",
								thorn:"My high school choral director resigned amidst all of the controversy with Soulfege and I'm so disappointed that my younger peers won't get the chance to work with such a great educator and guy. (I think he's taking a job at Ian's high school though!)",
								bud: "The Mets are in first place, I'm about to spend a week relaxing in Delaware and we're back at school so soon! So much to be excited for.",
								timestamp:""
							},	
							{
								type:"post",
								name:"Franklyn",
								rose:"went to see a concert at this tavern in Annapolis today / made some quality snapchats with the sis.",
								thorn:"none.",
								bud:"Hopping on a train at 6am for Richmond to chill with bae for a few days :)",
								timestamp:""
							},

							{
								type:"post",
								name:"Dan",
								rose:"awesome day climbing in Central Park and hanging out on roofs with friends with beer and 80s slow jams!",
								thorn:"Central Park date on Tuesday with the most GORGEOUS girl I've seen on Tinder so far and she thinks my bio is amazing :)))",
								bud: "there are only seven days in the week and I want to hang out with more than seven people individually in the evenings",
								timestamp:""
							},

							{	type:"post",
								name:"Anonymous",
								rose:"kickin' it hardcore in Seoul Airport listening to Chasé belt out his solo on an incredible album. ",
								thorn:"leaving asia after two months. Missing my Singapore friends. ",
								bud:"13 hours until I see my family, 14.5 until I see my doggies ",
								timestamp:""
							},

							{
								type:"post",
								name:"Mark",
								rose:"finishing up my internship today, so glad to have met such wonderful inspiring people so passionate about their lives and the work they do... and to work in such a vibrant city with the opportunity to do so many fun things.",
								thorn:"My high school choral director resigned amidst all of the controversy with Soulfege and I'm so disappointed that my younger peers won't get the chance to work with such a great educator and guy. (I think he's taking a job at Ian's high school though!)",
								bud: "The Mets are in first place, I'm about to spend a week relaxing in Delaware and we're back at school so soon! So much to be excited for.",
								timestamp:""
							},	
							{
								type:"post",
								name:"Franklyn",
								rose:"went to see a concert at this tavern in Annapolis today / made some quality snapchats with the sis.",
								thorn:"none.",
								bud:"Hopping on a train at 6am for Richmond to chill with bae for a few days :)",
								timestamp:""
							},

							{
								type:"post",
								name:"Dan",
								rose:"awesome day climbing in Central Park and hanging out on roofs with friends with beer and 80s slow jams!",
								thorn:"Central Park date on Tuesday with the most GORGEOUS girl I've seen on Tinder so far and she thinks my bio is amazing :)))",
								bud: "there are only seven days in the week and I want to hang out with more than seven people individually in the evenings",
								timestamp:""
							},

							{	type:"post",
								name:"Anonymous",
								rose:"kickin' it hardcore in Seoul Airport listening to Chasé belt out his solo on an incredible album. ",
								thorn:"leaving asia after two months. Missing my Singapore friends. ",
								bud:"13 hours until I see my family, 14.5 until I see my doggies ",
								timestamp:""
							},

							{
								type:"post",
								name:"Mark",
								rose:"finishing up my internship today, so glad to have met such wonderful inspiring people so passionate about their lives and the work they do... and to work in such a vibrant city with the opportunity to do so many fun things.",
								thorn:"My high school choral director resigned amidst all of the controversy with Soulfege and I'm so disappointed that my younger peers won't get the chance to work with such a great educator and guy. (I think he's taking a job at Ian's high school though!)",
								bud: "The Mets are in first place, I'm about to spend a week relaxing in Delaware and we're back at school so soon! So much to be excited for.",
								timestamp:""
							},	
							{
								type:"post",
								name:"Franklyn",
								rose:"went to see a concert at this tavern in Annapolis today / made some quality snapchats with the sis.",
								thorn:"none.",
								bud:"Hopping on a train at 6am for Richmond to chill with bae for a few days :)",
								timestamp:""
							},

							{
								type:"post",
								name:"Dan",
								rose:"awesome day climbing in Central Park and hanging out on roofs with friends with beer and 80s slow jams!",
								thorn:"Central Park date on Tuesday with the most GORGEOUS girl I've seen on Tinder so far and she thinks my bio is amazing :)))",
								bud: "there are only seven days in the week and I want to hang out with more than seven people individually in the evenings",
								timestamp:""
							},

							{	type:"post",
								name:"Anonymous",
								rose:"kickin' it hardcore in Seoul Airport listening to Chasé belt out his solo on an incredible album. ",
								thorn:"leaving asia after two months. Missing my Singapore friends. ",
								bud:"13 hours until I see my family, 14.5 until I see my doggies ",
								timestamp:""
							},

							{
								type:"post",
								name:"Mark",
								rose:"finishing up my internship today, so glad to have met such wonderful inspiring people so passionate about their lives and the work they do... and to work in such a vibrant city with the opportunity to do so many fun things.",
								thorn:"My high school choral director resigned amidst all of the controversy with Soulfege and I'm so disappointed that my younger peers won't get the chance to work with such a great educator and guy. (I think he's taking a job at Ian's high school though!)",
								bud: "The Mets are in first place, I'm about to spend a week relaxing in Delaware and we're back at school so soon! So much to be excited for.",
								timestamp:""
							},	
							{
								type:"post",
								name:"Franklyn",
								rose:"went to see a concert at this tavern in Annapolis today / made some quality snapchats with the sis.",
								thorn:"none.",
								bud:"Hopping on a train at 6am for Richmond to chill with bae for a few days :)",
								timestamp:""
							},

							{
								type:"post",
								name:"Dan",
								rose:"awesome day climbing in Central Park and hanging out on roofs with friends with beer and 80s slow jams!",
								thorn:"Central Park date on Tuesday with the most GORGEOUS girl I've seen on Tinder so far and she thinks my bio is amazing :)))",
								bud: "there are only seven days in the week and I want to hang out with more than seven people individually in the evenings",
								timestamp:""
							},

							{	type:"post",
								name:"Anonymous",
								rose:"kickin' it hardcore in Seoul Airport listening to Chasé belt out his solo on an incredible album. ",
								thorn:"leaving asia after two months. Missing my Singapore friends. ",
								bud:"13 hours until I see my family, 14.5 until I see my doggies ",
								timestamp:""
							},

							{
								type:"post",
								name:"Mark",
								rose:"finishing up my internship today, so glad to have met such wonderful inspiring people so passionate about their lives and the work they do... and to work in such a vibrant city with the opportunity to do so many fun things.",
								thorn:"My high school choral director resigned amidst all of the controversy with Soulfege and I'm so disappointed that my younger peers won't get the chance to work with such a great educator and guy. (I think he's taking a job at Ian's high school though!)",
								bud: "The Mets are in first place, I'm about to spend a week relaxing in Delaware and we're back at school so soon! So much to be excited for.",
								timestamp:""
							},							

						]
    				};

	storePosts(postData);
    function getStoredPosts() {
        if (!localStorage.posts) {
            // default to empty array
            localStorage.posts = JSON.stringify([]);
        }
        return JSON.parse(localStorage.posts);
    }

    function storePosts(posts) {
        localStorage.posts = JSON.stringify(posts);
    }
    // function divGenerator(id){

    // 	document.body.append
    // }


    function postGenerator(){
    	var storedPosts = getStoredPosts();
    	postDeck.innerHTML = templates.renderPosts(storedPosts)
    }

postGenerator();

// console.log({posts:getStoredPosts()})

window.addEventListener("click",function(e){
	if(e.target.id=="logo"){
		window.scrollTo(0,0);
	}
	
})




$('.modal-trigger').leanModal({
	ready: function(){$("#main_container").eq(0).addClass("noscroll").css("position","absolute")},
	complete: function(){$("#main_container").eq(0).removeClass("noscroll").css("position","")}
});







})(this, this.document);