import {User, Post} from './models.mjs';

export function fetchUsers(callback){
    // api urls
    const JSONPLACEHOLDER = "https://jsonplaceholder.typicode.com";
    const GENDERIZE = "https://api.genderize.io";
    const JOESCHMOE = "https://joeschmoe.io/api/v1";

    // fetching users
    $.ajax({
        url: `${JSONPLACEHOLDER}/users`,
        success: function(data){
            var users = data.map(function(item){
                return new User(item.id, item.name);
            });
            // get gender and posts for every user
            users.forEach(function(user){
                $.ajax({
                    url: `${GENDERIZE}/?name=${user.getFirstName()}`,
                    success: function(data){
                        const GENDER = data.gender;
                        user.setGender(data.gender);
                        // set photoUrl based on gender
                        user.setPhotoUrl(GENDER == "female" ? `${JOESCHMOE}/josephine` : `${JOESCHMOE}/jacques`);
                    }
                });
                $.ajax({
                    url: `${JSONPLACEHOLDER}/posts/?userId=${user.id}`,
                    success: function(data){
                        data.forEach(function(post){
                            var userPost = new Post(post.title, post.body);
                            user.addPost(userPost);
                        });
                    }
                });
            });
            callback(users);
        }
    });
}