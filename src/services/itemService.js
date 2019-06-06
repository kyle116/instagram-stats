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
	        const postInfoSource = await axios.get(url);
	        // const postInfoSource = await this.igRequest({method: 'GET', url: `${url}`});

	        // postInfoSource.data contains the HTML from Axios
	        var jsonObject = postInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)
	        console.log('postInfoSource', jsonObject);
	        // Post pasted link
	        const postInfo = JSON.parse(jsonObject);
			const urlType = postInfo.entry_data.hasOwnProperty('PostPage') ? 'post' : 'profile';
			// responseData = {
	  //       	country_code: postInfo.country_code,
	  //       	language_code: postInfo.language_code,
	  //       	display_url: postInfo.entry_data.PostPage[0].graphql.shortcode_media.display_url,
	  //       	number_of_comments: postInfo.entry_data.PostPage[0].graphql.shortcode_media.edge_media_to_comment.count,
	  //       	number_of_likes: postInfo.entry_data.PostPage[0].graphql.shortcode_media.edge_media_preview_like.count
	  //       	// ,sponsors: postInfo.entry_data.PostPage[0].graphql.shortcode_media.edge_media_to_sponsor_user

	  //       }

	        responseData = {
	        	country_code: postInfo.country_code,
	        	language_code: postInfo.language_code,
	        	ig_shortcode: postInfo.entry_data.PostPage[0].graphql.shortcode_media.shortcode,
	        	display_url: postInfo.entry_data.PostPage[0].graphql.shortcode_media.display_url,
	        	number_of_comments: postInfo.entry_data.PostPage[0].graphql.shortcode_media.edge_media_to_parent_comment.count,
	        	number_of_likes: postInfo.entry_data.PostPage[0].graphql.shortcode_media.edge_media_preview_like.count,
				profile_pic: postInfo.entry_data.PostPage[0].graphql.shortcode_media.owner.profile_pic_url,
				username: postInfo.entry_data.PostPage[0].graphql.shortcode_media.owner.username,
				is_verified: postInfo.entry_data.PostPage[0].graphql.shortcode_media.owner.is_verified,
				followed_by_viewer: postInfo.entry_data.PostPage[0].graphql.shortcode_media.owner.followed_by_viewer,
				comments: postInfo.entry_data.PostPage[0].graphql.shortcode_media.edge_media_to_parent_comment.edges,
				time_of_post: postInfo.entry_data.PostPage[0].graphql.shortcode_media.taken_at_timestamp
	        	// ,sponsors: postInfo.entry_data.PostPage[0].graphql.shortcode_media.edge_media_to_sponsor_user

	        }
	        const userUrl = url.replace(`p/${responseData.ig_shortcode}`, responseData.username);
	        const userInfoSource = await axios.get(userUrl);
	        var jsonObjectUser = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1);
	        const userInfo = JSON.parse(jsonObjectUser);
	        responseData['followers'] = userInfo.entry_data.ProfilePage[0].graphql.user.edge_followed_by.count;

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