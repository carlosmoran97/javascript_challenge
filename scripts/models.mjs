/*
Post model
*/
function Post(title, body){
    this.title = title;
    this.body = body;
}

/*
User model
*/
function User(id, name){
    this.id = id;
    this.name = name;
    this.posts = [];
}

User.prototype.setGender = function(gender){
    this.gender = gender;
}

User.prototype.setPhotoUrl = function(photoUrl){
    this.photoUrl = photoUrl;
}

User.prototype.getFirstName = function(){
    return this.name.split(" ")[0];
}

User.prototype.addPost = function(post){
    this.posts.push(post);
}

export{User, Post};