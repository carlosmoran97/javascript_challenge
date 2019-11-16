/*
Post model
*/
export function Post(title, body){
    this.title = title;
    this.body = body;
}

/*
User model
*/
export function User(name){
    this.name = name;
    this.posts = [];
}

User.prototype.gender = function(gender){
    this.gender = gender;
}

User.prototype.setPhotoUrl = function(photoUrl){
    this.photoUrl = photoUrl;
}

User.prototype.getFirstName = function(){
    this.name.split(" ")[0];
}

User.prototype.addPost = function(post){
    this.posts.push(post);
}