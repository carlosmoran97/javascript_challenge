import {fetchUsers} from "./fetcher.mjs";

var innerHTML = "";

fetchUsers(function(user){
    var contentDiv = document.querySelector("div.content");
    innerHTML += `
        <div class="user">
            <img class="user--img" src="${user.photoUrl}"/>
            <div class="user--name--container"><h3 class="user--name">${user.name}</h3></div>
            <div class="user--posts">`;
        for(var i = 0; i < user.posts.length; i++){
            var post = user.posts[i];
            innerHTML += `<div class="post--title" style="${i%2!=0?"color: red;":""}">${post.title}</div>`
        }
        innerHTML +=`</div>
        </div>
    `;
    contentDiv.innerHTML = innerHTML;
});