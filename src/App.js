import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file
import ReactDOM from 'react-dom';
import YourComponent from './YourComponent'; // Adjust the path to match your file structure
import GrammarSection from './GrammarSection'; // Import the GrammarSection component
import FamousBooksSection from './FamousBooksSection';
const articles = [
  {
    title: 'Article 1',
    link: 'https://stevepavlina.com/blog/2005/12/spirituality-vs-intelligence/',
  },
  {
    title: 'Article 2',
    link: 'https://stevepavlina.com/blog/2004/10/the-courage-to-live-consciously/',
  },
  // Add more articles as needed
];

ReactDOM.render(<YourComponent articles={articles} />, document.getElementById('root'));

const Header = () => {
  const [logoWidth, setLogoWidth] = useState(0);
  const [showPdfButton, setShowPdfButton] = useState(false);

  const [showLevelsMenu, setShowLevelsMenu] = useState(false); // Add state for levels menu
  const [showArticles, setShowArticles] = useState(false); // Add state for levels menu


  function handleArticleLinkClick(event, link) {
    event.preventDefault();
    window.location.href = link;
  }
  
  useEffect(() => {
    const handleResize = () => {
      const maxWidth = window.innerWidth * 0.9; // 90% of the window's width
      setLogoWidth(maxWidth);
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Call handleResize once when the page loads
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Inside your Header component
  const handleGrammarLinkClick = () => {
    const grammarSection = document.getElementById('grammar');
    if (grammarSection) {
      grammarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleFamousBooksLinkClick = () => {
    const booksSection = document.getElementById('books');
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
   const handleBooksLinkClick = () => {
    setShowPdfButton(true); // Show the PDF download button
  };

  // Function to toggle the display of levels menu
  const toggleLevelsMenu = (e) => {
    e.preventDefault(); // Prevent the default navigation behavior
    setShowLevelsMenu(!showLevelsMenu);
  };

  const toggleArticleMenu = (e) => {
    e.preventDefault(); // Prevent the default navigation behavior
    setShowArticles(!showArticles);
  };

  return (
    <div className="header">
      <img src="/srfghiwarbgsn.png" alt="Logo" className="logo" style={{ maxWidth: `${logoWidth}px` }} />
      <div className="menu-container">
        <nav>
          <ul className="menu">
            <li>
            
              {showLevelsMenu && (
                <ul className="sub-menu">
                  <li><a href="/level/A1-A2">A1-A2</a></li>
                  <br></br>
                  <li><a href="/level/B1-B2">B1-B2</a></li>
                  <br></br>
                  <li><a href="/level/C1-C1">C1-C2</a></li>
                </ul>
              )}
              
            </li>
            <li><a href="/courses">Courses</a></li>
            <li><a onClick={toggleArticleMenu}>Articles</a></li>
            {showArticles && (
                                <ul className="sub-menu">
                  <li><a href={articles[0].link} target='__blank'>Article 1</a></li>
                  <br></br>
                  <li><a href={articles[1].link} target='__blank'>Article 2</a></li>
                </ul>
              )}
            <li><a href="#grammar" onClick={handleGrammarLinkClick}>Grammar</a></li>
            <li><a href="/quizzes">Quizzes</a></li>
            <li><a href="/Vocabulary">Vocabulary</a></li>

            <li><a href="#books" onClick={handleFamousBooksLinkClick}>Famous Books</a></li>
            <div>



    </div>
            <li> <a href="/grammar" onClick={toggleLevelsMenu}>
                Exercises 
              </a></li>
          </ul>
        </nav>
      </div>
      <div className="image-container">
        <div className="side-image-container">
          <img src="/Design (1).png" alt="" className="side-image" />
        </div>
        <img src="/far7anaanahaha.png" alt="" className="big-image" />
      </div>
      <div className="side-image-container">
        <img src="/Design (2).png" alt="" className="side-image" />
      </div>

      {/* Include the GrammarSection component */}
      <div id="grammar" className="grammar-container">
        <GrammarSection />
      </div>
      <div id="books" className="books-container">
      <FamousBooksSection/>
      </div>
      <ul>
      <li>
        <button
  onClick={() => window.open("/kugtjyfhtg.pdf", "_blank")}
  style={{
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  }}

>
  Download PDF
  
</button>

 

      </li>
      {/* Add more book entries as needed */}
    </ul>        
      </div>
          
    
 
    );

};

export default Header;