import axios from 'axios';

class ItemService {
	constructor() {
		this.request = axios.create({
			baseURL: 'http://localhost:5000/',
			headers: {}
		});
		this.igRequest = axios.create({
			baseURL: 'https://www.instagram.com/',
			headers: {}
		});
	}

	testFunc() {
		// return this.request({method: 'GET', url: '/api/items'})
  //   		.then((response) => console.log(response.data));
		return console.log('working');
	}

	async igTestFunc(url) {
		const res = [];
		var responseData;
	    try {
	        const userInfoSource = await axios.get(url);
	        // const userInfoSource = await this.igRequest({method: 'GET', url: `${url}`});

	        // userInfoSource.data contains the HTML from Axios
	        var jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)
	        console.log(jsonObject);
	        // Post pasted link
	        const postInfo = JSON.parse(jsonObject);
			const urlType = postInfo.entry_data.hasOwnProperty('PostPage') ? 'post' : 'profile';
			responseData = {
	        	country_code: postInfo.country_code,
	        	language_code: postInfo.language_code,
	        	display_url: postInfo.entry_data.PostPage[0].graphql.shortcode_media.display_url,
	        	number_of_comments: postInfo.entry_data.PostPage[0].graphql.shortcode_media.edge_media_to_comment.count,
	        	number_of_likes: postInfo.entry_data.PostPage[0].graphql.shortcode_media.edge_media_preview_like.count
	        	// ,sponsors: postInfo.entry_data.PostPage[0].graphql.shortcode_media.edge_media_to_sponsor_user

	        }
	        console.log(responseData);

	        // Screenshot of post
	        // var postData = userInfoSource.data.match(/<article>(.*?)<\/article>/g);
	        // console.log('postData', postData);

	        // User pasted link
	        // const userInfo = JSON.parse(jsonObject)
	        // // Retrieve only the first 10 results
	        // const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 10)
	        // for (let media of mediaArray) {
	        //     const node = media.node
	            
	        //     // Process only if is an image
	        //     if ((node.__typename && node.__typename !== 'GraphImage')) {
	        //         continue
	        //     }

	        //     // Push the thumbnail src in the array
	        //     res.push(node.thumbnail_src)
	        // }
	    } catch (e) {
	        console.error('Unable to retrieve photos. Reason: ' + e.toString())
	    }
	    return responseData;
	}
}

export default new ItemService();