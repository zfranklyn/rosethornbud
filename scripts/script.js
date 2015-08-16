(function(window, document, undefined) {

	var postDeck = document.getElementById("content");
	var postTemplate = document.getElementById("post-template")

    var templates = {
        renderPosts: Handlebars.compile(postTemplate.innerHTML)
    };






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

    function postGenerator(){
    	// postDeck.innerHTML = templates.renderPosts({})
    }























})(this, this.document);