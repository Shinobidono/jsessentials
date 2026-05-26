const articlesDiv = document.getElementById('articles');
const fetchHealthButton = document.getElementById("fetch_h");
const fetchNewsButton = document.getElementById("fetch_n");

fetchHealthButton.addEventListener('click', function() {
    
    const xhr = new XMLHttpRequest();
    const url = './health_article.json';

    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function() {
        if (xhr.status === 200) {
            const articles = xhr.response.articles;   // Access articles here

            articles.forEach(function(article) {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');

                const title = document.createElement('h2');
                title.textContent = article.title;

                const description = document.createElement('p');
                description.textContent = article.description;

                const waysHeader = document.createElement('h3');
                waysHeader.textContent = 'Ways to Achieve:';

                const waysList = document.createElement('ul');
                article.ways_to_achieve.forEach(function(way) {
                    const li = document.createElement('li');
                    li.textContent = way;
                    waysList.appendChild(li);
                });

                const benefitsHeader = document.createElement('h3');
                benefitsHeader.textContent = 'Benefits:';

                const benefitsList = document.createElement('ul');
                article.benefits.forEach(function(benefit) {
                    const li = document.createElement('li');
                    li.textContent = benefit;
                    benefitsList.appendChild(li);
                });

                articleDiv.append(title, description, waysHeader, waysList, benefitsHeader, benefitsList);
                articlesDiv.appendChild(articleDiv);
            });
        } else {
            console.error('Failed to load data. Status:', xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error('Request failed');
    };

    xhr.send();   // Send the request when button is clicked
});
fetchNewsButton.addEventListener('click', function() {
    
    const xhr = new XMLHttpRequest();
    const url = './news_article.json';

    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function() {
        if (xhr.status === 200) {
            const articles = xhr.response.articles;   // Access articles here

            articles.forEach(function(article) {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');

                const title = document.createElement('h2');
                title.textContent = article.title;

                const description = document.createElement('p');
                description.textContent = article.description;

                const waysHeader = document.createElement('h3');
                waysHeader.textContent = 'Ways to Achieve:';

                const waysList = document.createElement('ul');
                article.ways_to_achieve.forEach(function(way) {
                    const li = document.createElement('li');
                    li.textContent = way;
                    waysList.appendChild(li);
                });

                const benefitsHeader = document.createElement('h3');
                benefitsHeader.textContent = 'Benefits:';

                const benefitsList = document.createElement('ul');
                article.benefits.forEach(function(benefit) {
                    const li = document.createElement('li');
                    li.textContent = benefit;
                    benefitsList.appendChild(li);
                });

                articleDiv.append(title, description, waysHeader, waysList, benefitsHeader, benefitsList);
                articlesDiv.appendChild(articleDiv);
            });
        } else {
            console.error('Failed to load data. Status:', xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error('Request failed');
    };

    xhr.send();   // Send the request when button is clicked
});