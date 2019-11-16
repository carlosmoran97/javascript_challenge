import {User, Post} from './models.mjs';

export async function fetchUsers(callback){
    // api urls
    const JSONPLACEHOLDER = "https://jsonplaceholder.typicode.com";
    const GENDERIZE = "https://api.genderize.io";
    const JOESCHMOE = "https://joeschmoe.io/api/v1";

    // fetching users
    var users = (await $.ajax({
        url: `${JSONPLACEHOLDER}/users`
    })).map(function(item){
        return new User(item.id, item.name);
    });
    // get gender and posts for every user
    for(var i = 0; i < users.length; i++){
        var user = users[i];
        const genderData = await $.ajax({
            url: `${GENDERIZE}/?name=${user.getFirstName()}`
        });
        const GENDER = genderData.gender;
        user.setGender(GENDER);
        // set photoUrl based on gender
        user.setPhotoUrl(GENDER == "female" ? `${JOESCHMOE}/josephine` : `${JOESCHMOE}/jacques`);
        const userPosts = await $.ajax({
            url: `${JSONPLACEHOLDER}/posts/?userId=${user.id}`
        });
        userPosts.forEach(function(post){
            var userPost = new Post(post.title, post.body);
            user.addPost(userPost);
        });

        // sending user data
        callback(user);
    }
    
}