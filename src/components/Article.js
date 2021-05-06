import React from 'react';

//truncatetext

function truncateText(text, limit) {
	const shortened = text.indexOf(' ', limit);
	if(shortened === -1) return text;
	return text.substring(0, shortened);
}


function Article(props) {
//checking images not working to show reddit logo if no image

	let image = props.article.url

	return(

		<article>
			<h3>{props.article.title}</h3>
			<img src={image} alt=" "/>
			<p>{truncateText(props.article.selftext, 100)}</p>
			<a href={"https://reddit.com" + props.article.permalink} target='_blank' rel="noreferrer" class="btn">
				Go to Reddit link
			</a>
			<hr>
			</hr>
			<span class="author">Author: {props.article.author} &nbsp; &nbsp; Comments: {props.article.num_comments}</span>
			<span class="score">Score: {props.article.score}</span>
		

		</article>
	)
}

export default Article;