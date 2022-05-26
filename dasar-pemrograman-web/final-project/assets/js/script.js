const articles = [
    {
        id: 1,
        image: 'assets/img/article-2.jpg',
        title: 'Doctor Strange in the Multiverse of Madness',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores ipsum veniam impedit est perspiciatis rerum, ratione dolorum nemo numquam vel deserunt ut autem maiores eos in error ducimus accusantium.',
        genre: ['Action', 'Adventure', 'Fantasy'],
        score: '7.5',
        likes: '200',
        dislikes: '5',
        comments: '100',
    },
    {
        id: 1,
        image: 'assets/img/article-2.jpg',
        title: 'Doctor Strange in the Multiverse of Madness',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores ipsum veniam impedit est perspiciatis rerum, ratione dolorum nemo numquam vel deserunt ut autem maiores eos in error ducimus accusantium.',
        genre: ['Action', 'Adventure', 'Fantasy'],
        score: '7.5',
        likes: '200',
        dislikes: '5',
        comments: '100',
    },
    {
        id: 1,
        image: 'assets/img/article-2.jpg',
        title: 'Doctor Strange in the Multiverse of Madness',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores ipsum veniam impedit est perspiciatis rerum, ratione dolorum nemo numquam vel deserunt ut autem maiores eos in error ducimus accusantium.',
        genre: ['Action', 'Adventure', 'Fantasy'],
        score: '7.5',
        likes: '200',
        dislikes: '5',
        comments: '100',
    },
    {
        id: 1,
        image: 'assets/img/article-2.jpg',
        title: 'Doctor Strange in the Multiverse of Madness',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores ipsum veniam impedit est perspiciatis rerum, ratione dolorum nemo numquam vel deserunt ut autem maiores eos in error ducimus accusantium.',
        genre: ['Action', 'Adventure', 'Fantasy'],
        score: '7.5',
        likes: '200',
        dislikes: '5',
        comments: '100',
    },
    {
        id: 1,
        image: 'assets/img/article-2.jpg',
        title: 'Doctor Strange in the Multiverse of Madness',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores ipsum veniam impedit est perspiciatis rerum, ratione dolorum nemo numquam vel deserunt ut autem maiores eos in error ducimus accusantium.',
        genre: ['Action', 'Adventure', 'Fantasy'],
        score: '7.5',
        likes: '200',
        dislikes: '5',
        comments: '100',
    },
]

const articleContainer = document.querySelector('#article-container')

function articleItem(article) {
    return `
    <article class="card article">
        <div class="article-img">
            <img src="${article.image}" alt="Picture of Juliana Putra">
        </div>
        <div class="article-body">
            <p class="article-score">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ${article.score}/10</p>
            <h2>Doctor Strange in the Multiverse of Madness</h2>
            <p class="article-detail">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg> ${article.likes}
                <span class="separator">|</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                </svg> ${article.dislikes}
                <span class="separator">|</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 icon" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg> ${article.comments}
            </p>
            <p>${article.description}</p>
            <a class="article-button" href="#">Selengkapnya</a>
        </div>
    </article>
    `
}

articles.forEach((article) => {
    articleContainer.innerHTML += articleItem(article)
})