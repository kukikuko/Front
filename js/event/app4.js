const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
const lis = document.querySelectorAll('li');

tweetForm.addEventListener('submit', (e)=>{

    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';

})

const addTweet = (username, tweet) => {
    
    const newTweet = document.createElement('li');
    newTweet.append(`${username} - ${tweet}`);
    tweetsContainer.append(newTweet);
    
}

tweetsContainer.addEventListener('click', (e)=>{
    e.target.remove();
})