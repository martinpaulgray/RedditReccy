
import React, {useState, useEffect} from 'react';
import Article from './components/Article.js';
import RedditLogo from './reddit-logo.png';

function App() {

  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('coding');

  useEffect(() => {
    fetch("https://www.reddit.com/r/"+ subreddit +"/.json").then (res => {
      if (res.status !== 200) {
        console.log("Sorry something went wrong!");
        return;
      }
      res.json().then(data => {
        if (data != null) {
          setArticles(data.data.children);}
      })
    })
  }, [subreddit]);

  return (
    <div className='App'>
      <header className='App-header'>
       
          <img id="logo" src={RedditLogo} alt="Reddit Logo" />
          <h1>Reddit Reccy</h1>
       
        <aside>
          Seach for Subreddit<input type='text' className="input" value={subreddit} 
          onChange={e => setSubreddit(e.target.value)} />
        </aside>
      </header>
      <main>
        <section className="postTitles">
          <ul>
            
              <button className='btn' name='Python' value='Python' onClick={e => setSubreddit(e.target.value)}> 
              Python
              </button>

              <button className='btn' name='JavaScript' value='JavaScript' onClick={e => setSubreddit(e.target.value)}> 
              Javascript
              </button>

              <button className='btn' name='Comics' value='Comics' onClick={e => setSubreddit(e.target.value)}> 
              Comics
              </button>

              <button className='btn' name='Netflix' value='Netflix' onClick={e => setSubreddit(e.target.value)}> 
              Netflix
              </button>

              <button className='btn' name='Roblox' value='Roblox' onClick={e => setSubreddit(e.target.value)}> 
              Roblox
              </button>

              <button className='btn' name='iphone' value='iphone' onClick={e => setSubreddit(e.target.value)}> 
              iphone
              </button>
  
          </ul>
        </section>

        <section>
   
          <div className="articles">
          {
            (articles != null) ? articles.map((article, index) => 
            <Article key={index} article={article.data} />) : ""
          }
     
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
