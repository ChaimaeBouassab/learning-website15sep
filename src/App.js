import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file
import GrammarSection from './GrammarSection'; // Import the GrammarSection component
const Header = () => {
  const [logoWidth, setLogoWidth] = useState(0);
  const [showPdfButton, setShowPdfButton] = useState(false);

  const [showLevelsMenu, setShowLevelsMenu] = useState(false); // Add state for levels menu

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
   const handleBooksLinkClick = () => {
    setShowPdfButton(true); // Show the PDF download button
  };

  // Function to toggle the display of levels menu
  const toggleLevelsMenu = (e) => {
    e.preventDefault(); // Prevent the default navigation behavior
    setShowLevelsMenu(!showLevelsMenu);
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
                  <li><a href="/level/C1-C1">C1-C1</a></li>
                </ul>
              )}
              
            </li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/articles">Articles</a></li>
            <li><a href="#grammar" onClick={handleGrammarLinkClick}>Grammar</a></li>
            <li><a href="/quizzes">Quizzes</a></li>
            <li><a href="/Vocabulary">Vocabulary</a></li>

            <li><a href="/books">Famous Books</a></li>
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
<h1>𝗦𝘁𝗮𝗿𝘁 𝗪𝗵𝗲𝗿𝗲 𝗬𝗼𝘂 𝗔𝗿𝗲: 𝗔 𝗚𝘂𝗶𝗱𝗲 𝘁𝗼 𝗖𝗼𝗺𝗽𝗮𝘀𝘀𝗶𝗼𝗻𝗮𝘁𝗲 𝗟𝗶𝘃𝗶𝗻𝗴 (𝗦𝗵𝗮𝗺𝗯𝗵𝗮𝗹𝗮 𝗖𝗹𝗮𝘀𝘀𝗶𝗰𝘀)</h1>
        <p>𝙀𝙫𝙚𝙧𝙮𝙗𝙤𝙙𝙮 𝙠𝙣𝙤𝙬𝙨 𝙩𝙝𝙖𝙩 𝙝𝙖𝙧𝙙 𝙬𝙤𝙧𝙠, 𝙡𝙪𝙘𝙠 𝙖𝙣𝙙 𝙩𝙖𝙡𝙚𝙣𝙩 𝙚𝙖𝙘𝙝 𝙥𝙡𝙖𝙮𝙨 𝙖 𝙧𝙤𝙡𝙚 𝙞𝙣 𝙤𝙪𝙧 𝙬𝙤𝙧𝙠𝙞𝙣𝙜 𝙡𝙞𝙫𝙚𝙨. 𝙄𝙣 𝙝𝙞𝙨 𝙡𝙖𝙣𝙙𝙢𝙖𝙧𝙠 𝙗𝙤𝙤𝙠, 𝘼𝙙𝙖𝙢 𝙂𝙧𝙖𝙣𝙩 𝙞𝙡𝙡𝙪𝙢𝙞𝙣𝙖𝙩𝙚𝙨 𝙩𝙝𝙚 𝙞𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙘𝙚 𝙤𝙛 𝙖 𝙛𝙤𝙪𝙧𝙩𝙝, 𝙞𝙣𝙘𝙧𝙚𝙖𝙨𝙞𝙣𝙜𝙡𝙮 𝙘𝙧𝙞𝙩𝙞𝙘𝙖𝙡 𝙛𝙖𝙘𝙩𝙤𝙧 - 𝙩𝙝𝙖𝙩 𝙩𝙝𝙚 𝙗𝙚𝙨𝙩 𝙬𝙖𝙮 𝙩𝙤 𝙜𝙚𝙩 𝙩𝙤 𝙩𝙝𝙚 𝙩𝙤𝙥 𝙞𝙨 𝙩𝙤 𝙛𝙤𝙘𝙪𝙨 𝙤𝙣 𝙗𝙧𝙞𝙣𝙜𝙞𝙣𝙜 𝙤𝙩𝙝𝙚𝙧𝙨 𝙬𝙞𝙩𝙝 𝙮𝙤𝙪.

𝙂𝙞𝙫𝙚 𝙖𝙣𝙙 𝙏𝙖𝙠𝙚 𝙘𝙝𝙖𝙣𝙜𝙚𝙨 𝙤𝙪𝙧 𝙛𝙪𝙣𝙙𝙖𝙢𝙚𝙣𝙩𝙖𝙡 𝙪𝙣𝙙𝙚𝙧𝙨𝙩𝙖𝙣𝙙𝙞𝙣𝙜 𝙤𝙛 𝙬𝙝𝙮 𝙬𝙚 𝙨𝙪𝙘𝙘𝙚𝙚𝙙, 𝙤𝙛𝙛𝙚𝙧𝙞𝙣𝙜 𝙖 𝙣𝙚𝙬 𝙢𝙤𝙙𝙚𝙡 𝙛𝙤𝙧 𝙤𝙪𝙧 𝙧𝙚𝙡𝙖𝙩𝙞𝙤𝙣𝙨𝙝𝙞𝙥𝙨 𝙬𝙞𝙩𝙝 𝙘𝙤𝙡𝙡𝙚𝙖𝙜𝙪𝙚𝙨, 𝙘𝙡𝙞𝙚𝙣𝙩𝙨 𝙖𝙣𝙙 𝙘𝙤𝙢𝙥𝙚𝙩𝙞𝙩𝙤𝙧𝙨. 𝙐𝙨𝙞𝙣𝙜 𝙝𝙞𝙨 𝙤𝙬𝙣 𝙘𝙪𝙩𝙩𝙞𝙣𝙜-𝙚𝙙𝙜𝙚 𝙧𝙚𝙨𝙚𝙖𝙧𝙘𝙝 𝙖𝙨 𝙖 𝙥𝙧𝙤𝙛𝙚𝙨𝙨𝙤𝙧 𝙖𝙩 𝙒𝙝𝙖𝙧𝙩𝙤𝙣 𝘽𝙪𝙨𝙞𝙣𝙚𝙨𝙨 𝙎𝙘𝙝𝙤𝙤𝙡, 𝙖𝙨 𝙬𝙚𝙡𝙡 𝙖𝙨 𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙨𝙩𝙤𝙧𝙞𝙚𝙨 𝙛𝙧𝙤𝙢 𝙃𝙤𝙡𝙡𝙮𝙬𝙤𝙤𝙙 𝙩𝙤 𝙝𝙞𝙨𝙩𝙤𝙧𝙮, 𝙂𝙧𝙖𝙣𝙩 𝙨𝙝𝙤𝙬𝙨 𝙩𝙝𝙖𝙩 𝙣𝙞𝙘𝙚 𝙜𝙪𝙮𝙨 𝙣𝙚𝙚𝙙 𝙣𝙤𝙩 𝙛𝙞𝙣𝙞𝙨𝙝 𝙡𝙖𝙨𝙩. 𝙃𝙚 𝙙𝙚𝙢𝙤𝙣𝙨𝙩𝙧𝙖𝙩𝙚𝙨 𝙝𝙤𝙬 𝙨𝙢𝙖𝙧𝙩 𝙜𝙞𝙫𝙚𝙧𝙨 𝙖𝙫𝙤𝙞𝙙 𝙗𝙚𝙘𝙤𝙢𝙞𝙣𝙜 𝙙𝙤𝙤𝙧𝙢𝙖𝙩𝙨, 𝙖𝙣𝙙 𝙬𝙝𝙮 𝙩𝙝𝙞𝙨 𝙠𝙞𝙣𝙙 𝙤𝙛 𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙝𝙖𝙨 𝙩𝙝𝙚 𝙥𝙤𝙬𝙚𝙧 𝙩𝙤 𝙩𝙧𝙖𝙣𝙨𝙛𝙤𝙧𝙢 𝙣𝙤𝙩 𝙟𝙪𝙨𝙩 𝙞𝙣𝙙𝙞𝙫𝙞𝙙𝙪𝙖𝙡𝙨 𝙖𝙣𝙙 𝙜𝙧𝙤𝙪𝙥𝙨, 𝙗𝙪𝙩 𝙚𝙣𝙩𝙞𝙧𝙚 𝙤𝙧𝙜𝙖𝙣𝙞𝙨𝙖𝙩𝙞𝙤𝙣𝙨 𝙖𝙣𝙙 𝙘𝙤𝙢𝙢𝙪𝙣𝙞𝙩𝙞𝙚𝙨.</p> </li>
      <li>
      <button
  onClick={() => window.open("/kujhg.pdf", "_blank")}
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
<h1>𝗚𝗶𝘃𝗲 𝗮𝗻𝗱 𝗧𝗮𝗸𝗲: 𝗪𝗵𝘆 𝗛𝗲𝗹𝗽𝗶𝗻𝗴 𝗢𝘁𝗵𝗲𝗿𝘀 𝗗𝗿𝗶𝘃𝗲𝘀 𝗢𝘂𝗿 𝗦𝘂𝗰𝗰𝗲𝘀𝘀</h1>
     <p>𝙎𝙩𝙖𝙧𝙩 𝙒𝙝𝙚𝙧𝙚 𝙔𝙤𝙪 𝘼𝙧𝙚 𝙞𝙨 𝙖𝙣 𝙞𝙣𝙙𝙞𝙨𝙥𝙚𝙣𝙨𝙖𝙗𝙡𝙚 𝙝𝙖𝙣𝙙𝙗𝙤𝙤𝙠 𝙛𝙤𝙧 𝙘𝙪𝙡𝙩𝙞𝙫𝙖𝙩𝙞𝙣𝙜 𝙛𝙚𝙖𝙧𝙡𝙚𝙨𝙨𝙣𝙚𝙨𝙨 𝙖𝙣𝙙 𝙖𝙬𝙖𝙠𝙚𝙣𝙞𝙣𝙜 𝙖 𝙘𝙤𝙢𝙥𝙖𝙨𝙨𝙞𝙤𝙣𝙖𝙩𝙚 𝙝𝙚𝙖𝙧𝙩. 𝙒𝙞𝙩𝙝 𝙞𝙣𝙨𝙞𝙜𝙝𝙩 𝙖𝙣𝙙 𝙝𝙪𝙢𝙤𝙧, 𝙋𝙚𝙢𝙖 𝘾𝙝𝙤̈𝙙𝙧𝙤̈𝙣 𝙥𝙧𝙚𝙨𝙚𝙣𝙩𝙨 𝙙𝙤𝙬𝙣-𝙩𝙤-𝙚𝙖𝙧𝙩𝙝 𝙜𝙪𝙞𝙙𝙖𝙣𝙘𝙚 𝙤𝙣 𝙝𝙤𝙬 𝙬𝙚 𝙘𝙖𝙣 "𝙨𝙩𝙖𝙧𝙩 𝙬𝙝𝙚𝙧𝙚 𝙬𝙚 𝙖𝙧𝙚"—𝙚𝙢𝙗𝙧𝙖𝙘𝙞𝙣𝙜 𝙧𝙖𝙩𝙝𝙚𝙧 𝙩𝙝𝙖𝙣 𝙙𝙚𝙣𝙮𝙞𝙣𝙜 𝙩𝙝𝙚 𝙥𝙖𝙞𝙣𝙛𝙪𝙡 𝙖𝙨𝙥𝙚𝙘𝙩𝙨 𝙤𝙛 𝙤𝙪𝙧 𝙡𝙞𝙫𝙚𝙨. 𝙋𝙚𝙢𝙖 𝘾𝙝𝙤̈𝙙𝙧𝙤̈𝙣 𝙛𝙧𝙖𝙢𝙚𝙨 𝙝𝙚𝙧 𝙩𝙚𝙖𝙘𝙝𝙞𝙣𝙜𝙨 𝙤𝙣 𝙘𝙤𝙢𝙥𝙖𝙨𝙨𝙞𝙤𝙣 𝙖𝙧𝙤𝙪𝙣𝙙 𝙛𝙞𝙛𝙩𝙮-𝙣𝙞𝙣𝙚 𝙩𝙧𝙖𝙙𝙞𝙩𝙞𝙤𝙣𝙖𝙡 𝙏𝙞𝙗𝙚𝙩𝙖𝙣 𝘽𝙪𝙙𝙙𝙝𝙞𝙨𝙩 𝙢𝙖𝙭𝙞𝙢𝙨, 𝙤𝙧 𝙨𝙡𝙤𝙜𝙖𝙣𝙨, 𝙨𝙪𝙘𝙝 𝙖𝙨: "𝘼𝙡𝙬𝙖𝙮𝙨 𝙖𝙥𝙥𝙡𝙮 𝙤𝙣𝙡𝙮 𝙖 𝙟𝙤𝙮𝙛𝙪𝙡 𝙨𝙩𝙖𝙩𝙚 𝙤𝙛 𝙢𝙞𝙣𝙙," "𝘿𝙤𝙣'𝙩 𝙨𝙚𝙚𝙠 𝙤𝙩𝙝𝙚𝙧𝙨' 𝙥𝙖𝙞𝙣 𝙖𝙨 𝙩𝙝𝙚 𝙡𝙞𝙢𝙗𝙨 𝙤𝙛 𝙮𝙤𝙪𝙧 𝙤𝙬𝙣 𝙝𝙖𝙥𝙥𝙞𝙣𝙚𝙨𝙨," 𝙖𝙣𝙙 "𝘼𝙡𝙬𝙖𝙮𝙨 𝙢𝙚𝙙𝙞𝙩𝙖𝙩𝙚 𝙤𝙣 𝙬𝙝𝙖𝙩𝙚𝙫𝙚𝙧 𝙥𝙧𝙤𝙫𝙤𝙠𝙚𝙨 𝙧𝙚𝙨𝙚𝙣𝙩𝙢𝙚𝙣𝙩."

𝙒𝙤𝙧𝙠𝙞𝙣𝙜 𝙬𝙞𝙩𝙝 𝙩𝙝𝙚𝙨𝙚 𝙨𝙡𝙤𝙜𝙖𝙣𝙨 𝙖𝙣𝙙 𝙩𝙝𝙧𝙤𝙪𝙜𝙝 𝙩𝙝𝙚 𝙥𝙧𝙖𝙘𝙩𝙞𝙘𝙚 𝙤𝙛 𝙢𝙚𝙙𝙞𝙩𝙖𝙩𝙞𝙤𝙣, 𝙎𝙩𝙖𝙧𝙩 𝙒𝙝𝙚𝙧𝙚 𝙔𝙤𝙪 𝘼𝙧𝙚 𝙨𝙝𝙤𝙬𝙨 𝙝𝙤𝙬 𝙬𝙚 𝙘𝙖𝙣 𝙖𝙡𝙡 𝙙𝙚𝙫𝙚𝙡𝙤𝙥 𝙩𝙝𝙚 𝙘𝙤𝙪𝙧𝙖𝙜𝙚 𝙩𝙤 𝙬𝙤𝙧𝙠 𝙬𝙞𝙩𝙝 𝙤𝙪𝙧 𝙞𝙣𝙣𝙚𝙧 𝙥𝙖𝙞𝙣 𝙖𝙣𝙙 𝙙𝙞𝙨𝙘𝙤𝙫𝙚𝙧 𝙟𝙤𝙮, 𝙬𝙚𝙡𝙡-𝙗𝙚𝙞𝙣𝙜, 𝙖𝙣𝙙 𝙘𝙤𝙣𝙛𝙞𝙙𝙚𝙣𝙘𝙚.</p>
      </li>
      {/* Add more book entries as needed */}
    </ul>        
      </div>
      
    </div>
  );
};

export default Header;