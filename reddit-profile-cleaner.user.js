// ==UserScript==
// @name         Reddit Profile Cleaner
// @version      1.1
// @description  Delete all comments and submitted posts on your Reddit profile page.
// @author       dekl0l
// @match        https://www.reddit.com/user/*
// @namespace    https://www.reddit.com/user/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function deleteComment(commentId) {
        return fetch('https://www.reddit.com/api/del', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/118.0',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Language': 'en-GB,en;q=0.5',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
            },
            referrer: window.location.href,
            body: `id=${commentId}&executed=deleted&r=u_USERNAME&uh=${encodeURIComponent(document.querySelector('input[name="uh"]').value)}&renderstyle=html`,
            mode: 'cors',
        });
    }

    function deleteAllComments() {
        const comments = document.querySelectorAll('.comment');
        comments.forEach((comment) => {
            const commentId = comment.getAttribute('data-fullname');
            deleteComment(commentId)
                .then(() => {
                    console.log(`Deleted comment: ${commentId}`);
                    comment.remove();
                })
                .catch((error) => {
                    console.error(`Failed to delete comment: ${commentId}`, error);
                });
        });
    }

    function deleteAllPosts() {
        const posts = document.querySelectorAll('.thing.link');
        posts.forEach((post) => {
            const postId = post.getAttribute('data-fullname');
            deleteComment(postId)
                .then(() => {
                    console.log(`Deleted post: ${postId}`);
                    post.remove();
                })
                .catch((error) => {
                    console.error(`Failed to delete post: ${postId}`, error);
                });
        });
    }

    const titlebox = document.querySelector('.titlebox');
    const deleteCommentsButton = document.createElement('button');
    deleteCommentsButton.textContent = 'Delete All Comments';
    deleteCommentsButton.addEventListener('click', deleteAllComments);
    titlebox.appendChild(deleteCommentsButton);

    const deletePostsButton = document.createElement('button');
    deletePostsButton.textContent = 'Delete All Posts';
    deletePostsButton.addEventListener('click', deleteAllPosts);
    titlebox.appendChild(deletePostsButton);
})();
