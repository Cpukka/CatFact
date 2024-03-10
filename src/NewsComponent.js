// Import necessary libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Create a functional component
const NewsComponent = () => {
  // State to store news data
  const [newsData, setNewsData] = useState([]);

  // useEffect to fetch news data when the component mounts
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual News API key
        const apiKey = 'c8a0aad1d0264873bcd40f902e96ac70';
        const apiUrl = 'https://newsapi.org/v2/top-headlines';

        // Example: Fetching top headlines from the US
        const response = await axios.get(`${apiUrl}?country=us&apiKey=${apiKey}`);

        // Set the fetched news data to the state
        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    // Call the fetchNews function
    fetchNews();
  }, []); // The empty dependency array ensures that useEffect runs only once when the component mounts

  // Render the news data
  return (
    <div>
      <h2>Top Headlines</h2>
      <ul>
        {newsData.map((article, index) => (
          <li key={index}>
            <strong>{article.title}</strong> - {article.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
  