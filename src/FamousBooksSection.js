import React, { useState } from 'react';
import './FamousBooksSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './BookList';

function FamousBooksSection() {

return (
    <div id="books" className="books-container">
    <ul>
    <li>
    <div className="App">
      <h1>Book List</h1>
      <BookList />
    </div>
<h1>𝗦𝘁𝗮𝗿𝘁 𝗪𝗵𝗲𝗿𝗲 𝗬𝗼𝘂 𝗔𝗿𝗲: 𝗔 𝗚𝘂𝗶𝗱𝗲 𝘁𝗼 𝗖𝗼𝗺𝗽𝗮𝘀𝘀𝗶𝗼𝗻𝗮𝘁𝗲 𝗟𝗶𝘃𝗶𝗻𝗴 (𝗦𝗵𝗮𝗺𝗯𝗵𝗮𝗹𝗮 𝗖𝗹𝗮𝘀𝘀𝗶𝗰𝘀)</h1>
      <p>𝙀𝙫𝙚𝙧𝙮𝙗𝙤𝙙𝙮 𝙠𝙣𝙤𝙬𝙨 𝙩𝙝𝙖𝙩 𝙝𝙖𝙧𝙙 𝙬𝙤𝙧𝙠, 𝙡𝙪𝙘𝙠 𝙖𝙣𝙙 𝙩𝙖𝙡𝙚𝙣𝙩 𝙚𝙖𝙘𝙝 𝙥𝙡𝙖𝙮𝙨 𝙖 𝙧𝙤𝙡𝙚 𝙞𝙣 𝙤𝙪𝙧 𝙬𝙤𝙧𝙠𝙞𝙣𝙜 𝙡𝙞𝙫𝙚𝙨. 𝙄𝙣 𝙝𝙞𝙨 𝙡𝙖𝙣𝙙𝙢𝙖𝙧𝙠 𝙗𝙤𝙤𝙠, 𝘼𝙙𝙖𝙢 𝙂𝙧𝙖𝙣𝙩 𝙞𝙡𝙡𝙪𝙢𝙞𝙣𝙖𝙩𝙚𝙨 𝙩𝙝𝙚 𝙞𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙘𝙚 𝙤𝙛 𝙖 𝙛𝙤𝙪𝙧𝙩𝙝, 𝙞𝙣𝙘𝙧𝙚𝙖𝙨𝙞𝙣𝙜𝙡𝙮 𝙘𝙧𝙞𝙩𝙞𝙘𝙖𝙡 𝙛𝙖𝙘𝙩𝙤𝙧 - 𝙩𝙝𝙖𝙩 𝙩𝙝𝙚 𝙗𝙚𝙨𝙩 𝙬𝙖𝙮 𝙩𝙤 𝙜𝙚𝙩 𝙩𝙤 𝙩𝙝𝙚 𝙩𝙤𝙥 𝙞𝙨 𝙩𝙤 𝙛𝙤𝙘𝙪𝙨 𝙤𝙣 𝙗𝙧𝙞𝙣𝙜𝙞𝙣𝙜 𝙤𝙩𝙝𝙚𝙧𝙨 𝙬𝙞𝙩𝙝 𝙮𝙤𝙪.

𝙂𝙞𝙫𝙚 𝙖𝙣𝙙 𝙏𝙖𝙠𝙚 𝙘𝙝𝙖𝙣𝙜𝙚𝙨 𝙤𝙪𝙧 𝙛𝙪𝙣𝙙𝙖𝙢𝙚𝙣𝙩𝙖𝙡 𝙪𝙣𝙙𝙚𝙧𝙨𝙩𝙖𝙣𝙙𝙞𝙣𝙜 𝙤𝙛 𝙬𝙝𝙮 𝙬𝙚 𝙨𝙪𝙘𝙘𝙚𝙚𝙙, 𝙤𝙛𝙛𝙚𝙧𝙞𝙣𝙜 𝙖 𝙣𝙚𝙬 𝙢𝙤𝙙𝙚𝙡 𝙛𝙤𝙧 𝙤𝙪𝙧 𝙧𝙚𝙡𝙖𝙩𝙞𝙤𝙣𝙨𝙝𝙞𝙥𝙨 𝙬𝙞𝙩𝙝 𝙘𝙤𝙡𝙡𝙚𝙖𝙜𝙪𝙚𝙨, 𝙘𝙡𝙞𝙚𝙣𝙩𝙨 𝙖𝙣𝙙 𝙘𝙤𝙢𝙥𝙚𝙩𝙞𝙩𝙤𝙧𝙨. 𝙐𝙨𝙞𝙣𝙜 𝙝𝙞𝙨 𝙤𝙬𝙣 𝙘𝙪𝙩𝙩𝙞𝙣𝙜-𝙚𝙙𝙜𝙚 𝙧𝙚𝙨𝙚𝙖𝙧𝙘𝙝 𝙖𝙨 𝙖 𝙥𝙧𝙤𝙛𝙚𝙨𝙨𝙤𝙧 𝙖𝙩 𝙒𝙝𝙖𝙧𝙩𝙤𝙣 𝘽𝙪𝙨𝙞𝙣𝙚𝙨𝙨 𝙎𝙘𝙝𝙤𝙤𝙡, 𝙖𝙨 𝙬𝙚𝙡𝙡 𝙖𝙨 𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙨𝙩𝙤𝙧𝙞𝙚𝙨 𝙛𝙧𝙤𝙢 𝙃𝙤𝙡𝙡𝙮𝙬𝙤𝙤𝙙 𝙩𝙤 𝙝𝙞𝙨𝙩𝙤𝙧𝙮, 𝙂𝙧𝙖𝙣𝙩 𝙨𝙝𝙤𝙬𝙨 𝙩𝙝𝙖𝙩 𝙣𝙞𝙘𝙚 𝙜𝙪𝙮𝙨 𝙣𝙚𝙚𝙙 𝙣𝙤𝙩 𝙛𝙞𝙣𝙞𝙨𝙝 𝙡𝙖𝙨𝙩. 𝙃𝙚 𝙙𝙚𝙢𝙤𝙣𝙨𝙩𝙧𝙖𝙩𝙚𝙨 𝙝𝙤𝙬 𝙨𝙢𝙖𝙧𝙩 𝙜𝙞𝙫𝙚𝙧𝙨 𝙖𝙫𝙤𝙞𝙙 𝙗𝙚𝙘𝙤𝙢𝙞𝙣𝙜 𝙙𝙤𝙤𝙧𝙢𝙖𝙩𝙨, 𝙖𝙣𝙙 𝙬𝙝𝙮 𝙩𝙝𝙞𝙨 𝙠𝙞𝙣𝙙 𝙤𝙛 𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙝𝙖𝙨 𝙩𝙝𝙚 𝙥𝙤𝙬𝙚𝙧 𝙩𝙤 𝙩𝙧𝙖𝙣𝙨𝙛𝙤𝙧𝙢 𝙣𝙤𝙩 𝙟𝙪𝙨𝙩 𝙞𝙣𝙙𝙞𝙫𝙞𝙙𝙪𝙖𝙡𝙨 𝙖𝙣𝙙 𝙜𝙧𝙤𝙪𝙥𝙨, 𝙗𝙪𝙩 𝙚𝙣𝙩𝙞𝙧𝙚 𝙤𝙧𝙜𝙖𝙣𝙞𝙨𝙖𝙩𝙞𝙤𝙣𝙨 𝙖𝙣𝙙 𝙘𝙤𝙢𝙢𝙪𝙣𝙞𝙩𝙞𝙚𝙨.</p> </li>
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
    <li>
   
<h1>𝗚𝗶𝘃𝗲 𝗮𝗻𝗱 𝗧𝗮𝗸𝗲: 𝗪𝗵𝘆 𝗛𝗲𝗹𝗽𝗶𝗻𝗴 𝗢𝘁𝗵𝗲𝗿𝘀 𝗗𝗿𝗶𝘃𝗲𝘀 𝗢𝘂𝗿 𝗦𝘂𝗰𝗰𝗲𝘀𝘀</h1>
   <p>𝙎𝙩𝙖𝙧𝙩 𝙒𝙝𝙚𝙧𝙚 𝙔𝙤𝙪 𝘼𝙧𝙚 𝙞𝙨 𝙖𝙣 𝙞𝙣𝙙𝙞𝙨𝙥𝙚𝙣𝙨𝙖𝙗𝙡𝙚 𝙝𝙖𝙣𝙙𝙗𝙤𝙤𝙠 𝙛𝙤𝙧 𝙘𝙪𝙡𝙩𝙞𝙫𝙖𝙩𝙞𝙣𝙜 𝙛𝙚𝙖𝙧𝙡𝙚𝙨𝙨𝙣𝙚𝙨𝙨 𝙖𝙣𝙙 𝙖𝙬𝙖𝙠𝙚𝙣𝙞𝙣𝙜 𝙖 𝙘𝙤𝙢𝙥𝙖𝙨𝙨𝙞𝙤𝙣𝙖𝙩𝙚 𝙝𝙚𝙖𝙧𝙩. 𝙒𝙞𝙩𝙝 𝙞𝙣𝙨𝙞𝙜𝙝𝙩 𝙖𝙣𝙙 𝙝𝙪𝙢𝙤𝙧, 𝙋𝙚𝙢𝙖 𝘾𝙝𝙤̈𝙙𝙧𝙤̈𝙣 𝙥𝙧𝙚𝙨𝙚𝙣𝙩𝙨 𝙙𝙤𝙬𝙣-𝙩𝙤-𝙚𝙖𝙧𝙩𝙝 𝙜𝙪𝙞𝙙𝙖𝙣𝙘𝙚 𝙤𝙣 𝙝𝙤𝙬 𝙬𝙚 𝙘𝙖𝙣 "𝙨𝙩𝙖𝙧𝙩 𝙬𝙝𝙚𝙧𝙚 𝙬𝙚 𝙖𝙧𝙚"—𝙚𝙢𝙗𝙧𝙖𝙘𝙞𝙣𝙜 𝙧𝙖𝙩𝙝𝙚𝙧 𝙩𝙝𝙖𝙣 𝙙𝙚𝙣𝙮𝙞𝙣𝙜 𝙩𝙝𝙚 𝙥𝙖𝙞𝙣𝙛𝙪𝙡 𝙖𝙨𝙥𝙚𝙘𝙩𝙨 𝙤𝙛 𝙤𝙪𝙧 𝙡𝙞𝙫𝙚𝙨. 𝙋𝙚𝙢𝙖 𝘾𝙝𝙤̈𝙙𝙧𝙤̈𝙣 𝙛𝙧𝙖𝙢𝙚𝙨 𝙝𝙚𝙧 𝙩𝙚𝙖𝙘𝙝𝙞𝙣𝙜𝙨 𝙤𝙣 𝙘𝙤𝙢𝙥𝙖𝙨𝙨𝙞𝙤𝙣 𝙖𝙧𝙤𝙪𝙣𝙙 𝙛𝙞𝙛𝙩𝙮-𝙣𝙞𝙣𝙚 𝙩𝙧𝙖𝙙𝙞𝙩𝙞𝙤𝙣𝙖𝙡 𝙏𝙞𝙗𝙚𝙩𝙖𝙣 𝘽𝙪𝙙𝙙𝙝𝙞𝙨𝙩 𝙢𝙖𝙭𝙞𝙢𝙨, 𝙤𝙧 𝙨𝙡𝙤𝙜𝙖𝙣𝙨, 𝙨𝙪𝙘𝙝 𝙖𝙨: "𝘼𝙡𝙬𝙖𝙮𝙨 𝙖𝙥𝙥𝙡𝙮 𝙤𝙣𝙡𝙮 𝙖 𝙟𝙤𝙮𝙛𝙪𝙡 𝙨𝙩𝙖𝙩𝙚 𝙤𝙛 𝙢𝙞𝙣𝙙," "𝘿𝙤𝙣'𝙩 𝙨𝙚𝙚𝙠 𝙤𝙩𝙝𝙚𝙧𝙨' 𝙥𝙖𝙞𝙣 𝙖𝙨 𝙩𝙝𝙚 𝙡𝙞𝙢𝙗𝙨 𝙤𝙛 𝙮𝙤𝙪𝙧 𝙤𝙬𝙣 𝙝𝙖𝙥𝙥𝙞𝙣𝙚𝙨𝙨," 𝙖𝙣𝙙 "𝘼𝙡𝙬𝙖𝙮𝙨 𝙢𝙚𝙙𝙞𝙩𝙖𝙩𝙚 𝙤𝙣 𝙬𝙝𝙖𝙩𝙚𝙫𝙚𝙧 𝙥𝙧𝙤𝙫𝙤𝙠𝙚𝙨 𝙧𝙚𝙨𝙚𝙣𝙩𝙢𝙚𝙣𝙩."
𝙒𝙤𝙧𝙠𝙞𝙣𝙜 𝙬𝙞𝙩𝙝 𝙩𝙝𝙚𝙨𝙚 𝙨𝙡𝙤𝙜𝙖𝙣𝙨 𝙖𝙣𝙙 𝙩𝙝𝙧𝙤𝙪𝙜𝙝 𝙩𝙝𝙚 𝙥𝙧𝙖𝙘𝙩𝙞𝙘𝙚 𝙤𝙛 𝙢𝙚𝙙𝙞𝙩𝙖𝙩𝙞𝙤𝙣, 𝙎𝙩𝙖𝙧𝙩 𝙒𝙝𝙚𝙧𝙚 𝙔𝙤𝙪 𝘼𝙧𝙚 𝙨𝙝𝙤𝙬𝙨 𝙝𝙤𝙬 𝙬𝙚 𝙘𝙖𝙣 𝙖𝙡𝙡 𝙙𝙚𝙫𝙚𝙡𝙤𝙥 𝙩𝙝𝙚 𝙘𝙤𝙪𝙧𝙖𝙜𝙚 𝙩𝙤 𝙬𝙤𝙧𝙠 𝙬𝙞𝙩𝙝 𝙤𝙪𝙧 𝙞𝙣𝙣𝙚𝙧 𝙥𝙖𝙞𝙣 𝙖𝙣𝙙 𝙙𝙞𝙨𝙘𝙤𝙫𝙚𝙧 𝙟𝙤𝙮, 𝙬𝙚𝙡𝙡-𝙗𝙚𝙞𝙣𝙜, 𝙖𝙣𝙙 𝙘𝙤𝙣𝙛𝙞𝙙𝙚𝙣𝙘𝙚.</p>
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
    <li>
    
<h1>The unplugged Alpha</h1>
   <p>❝𝐌𝐨𝐬𝐭 𝐦𝐞𝐧 𝐭𝐨𝐝𝐚𝐲 𝐚𝐫𝐞 𝐬𝐞𝐧𝐭 𝐨𝐟𝐟 𝐢𝐧𝐭𝐨 𝐬𝐨𝐜𝐢𝐞𝐭𝐲 𝐰𝐢𝐭𝐡 𝐚 𝐛𝐫𝐨𝐤𝐞𝐧 𝐛𝐞𝐥𝐢𝐞𝐟 𝐬𝐲𝐬𝐭𝐞𝐦, 𝐰𝐡𝐢𝐜𝐡 𝐭𝐡𝐞𝐲 𝐮𝐬𝐞 𝐭𝐨 𝐦𝐚𝐤𝐞 𝐜𝐡𝐨𝐢𝐜𝐞𝐬, 𝐭𝐡𝐚𝐭 𝐠𝐞𝐭 𝐭𝐡𝐞𝐦 𝐭𝐞𝐫𝐫𝐢𝐛𝐥𝐞 𝐫𝐞𝐬𝐮𝐥𝐭𝐬 𝐰𝐢𝐭𝐡 𝐥𝐢𝐟𝐞 𝐚𝐧𝐝 𝐰𝐨𝐦𝐞𝐧. 𝐌𝐞𝐧 𝐡𝐚𝐯𝐞 𝐛𝐞𝐞𝐧 𝐜𝐨𝐧𝐝𝐢𝐭𝐢𝐨𝐧𝐞𝐝 𝐭𝐨 𝐛𝐞 𝐭𝐡𝐞 𝐪𝐮𝐢𝐧𝐭𝐞𝐬𝐬𝐞𝐧𝐭𝐢𝐚𝐥 "𝐧𝐢𝐜𝐞 𝐠𝐮𝐲." 𝐓𝐡𝐞𝐲'𝐫𝐞 𝐭𝐫𝐚𝐢𝐧𝐞𝐝 𝐭𝐨 𝐛𝐞 𝐨𝐯𝐞𝐫𝐥𝐲 𝐡𝐮𝐦𝐛𝐥𝐞, 𝐤𝐢𝐧𝐝 𝐭𝐨 𝐚 𝐟𝐚𝐮𝐥𝐭, 𝐚𝐧𝐝 𝐭𝐡𝐚𝐭 𝐣𝐮𝐬𝐭 "𝐛𝐞𝐢𝐧𝐠 𝐭𝐡𝐞𝐦𝐬𝐞𝐥𝐯𝐞𝐬" 𝐢𝐬 𝐞𝐧𝐨𝐮𝐠𝐡 𝐭𝐨 𝐚𝐭𝐭𝐫𝐚𝐜𝐭 𝐚𝐧𝐝 𝐤𝐞𝐞𝐩 𝐭𝐡𝐞 𝐰𝐨𝐦𝐚𝐧 𝐨𝐟 𝐭𝐡𝐞𝐢𝐫 𝐝𝐫𝐞𝐚𝐦𝐬. 𝐌𝐞𝐧 𝐚𝐫𝐞 𝐭𝐨𝐥𝐝 𝐭𝐨 𝐛𝐞𝐥𝐢𝐞𝐯𝐞 𝐭𝐡𝐚𝐭 𝐜𝐨𝐧𝐯𝐞𝐧𝐭𝐢𝐨𝐧𝐚𝐥 𝐦𝐚𝐬𝐜𝐮𝐥𝐢𝐧𝐢𝐭𝐲 𝐢𝐬 𝐭𝐨𝐱𝐢𝐜, 𝐚𝐧𝐝 𝐭𝐨 𝐩𝐮𝐭 𝐰𝐨𝐦𝐞𝐧 𝐚𝐡𝐞𝐚𝐝 𝐨𝐟 𝐭𝐡𝐞𝐢𝐫 𝐨𝐰𝐧 𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭𝐬, 𝐩𝐚𝐬𝐬𝐢𝐨𝐧𝐬, 𝐚𝐧𝐝 𝐩𝐮𝐫𝐩𝐨𝐬𝐞. 𝐓𝐡𝐢𝐬 𝐡𝐚𝐬 𝐥𝐞𝐝 𝐭𝐨 𝐚𝐧 𝐞𝐧𝐭𝐢𝐫𝐞 𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐦𝐞𝐧 𝐟𝐨𝐫𝐦𝐢𝐧𝐠 𝐯𝐞𝐫𝐲 𝐮𝐧𝐡𝐞𝐚𝐥𝐭𝐡𝐲 𝐚𝐭𝐭𝐚𝐜𝐡𝐦𝐞𝐧𝐭𝐬 𝐭𝐨 𝐰𝐨𝐦𝐞𝐧 𝐭𝐡𝐚𝐭 𝐭𝐡𝐞𝐲, 𝐮𝐧𝐟𝐨𝐫𝐭𝐮𝐧𝐚𝐭𝐞𝐥𝐲, 𝐨𝐟𝐭𝐞𝐧 𝐦𝐚𝐤𝐞 𝐭𝐡𝐞𝐢𝐫 𝐬𝐨𝐥𝐞 𝐟𝐨𝐜𝐮𝐬 𝐨𝐟 𝐭𝐡𝐞𝐢𝐫 𝐥𝐢𝐯𝐞𝐬. 𝐓𝐡𝐞 𝐩𝐥𝐚𝐲𝐛𝐨𝐨𝐤 𝐭𝐨 𝐰𝐨𝐦𝐞𝐧 𝐚𝐧𝐝 𝐥𝐢𝐟𝐞 𝐡𝐚𝐬 𝐜𝐡𝐚𝐧𝐠𝐞𝐝, 𝐛𝐮𝐭 𝐦𝐨𝐬𝐭 𝐦𝐞𝐧 𝐦𝐢𝐬𝐬𝐞𝐝 𝐭𝐡𝐞 𝐦𝐞𝐦𝐨. 𝐃𝐨 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐬𝐮𝐜𝐜𝐞𝐞𝐝, 𝐚𝐧𝐝 𝐥𝐞𝐯𝐞𝐥 𝐮𝐩 𝐢𝐧 𝐞𝐯𝐞𝐫𝐲 𝐚𝐫𝐞𝐚 𝐨𝐟 𝐲𝐨𝐮𝐫 𝐥𝐢𝐟𝐞? 𝐈𝐟 𝐬𝐨, 𝐭𝐡𝐞𝐧 𝐭𝐡𝐢𝐬 𝐛𝐨𝐨𝐤 𝐞𝐱𝐩𝐥𝐚𝐢𝐧𝐬 𝐭𝐨 𝐦𝐞𝐧: - 𝐓𝐡𝐞 𝐢𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐜𝐞 𝐨𝐟 𝐦𝐚𝐱𝐢𝐦𝐢𝐳𝐢𝐧𝐠 𝐲𝐨𝐮𝐫 𝐥𝐨𝐨𝐤𝐬, 𝐦𝐨𝐧𝐞𝐲, 𝐬𝐨𝐜𝐢𝐚𝐥 𝐬𝐭𝐚𝐭𝐮𝐬, 𝐚𝐧𝐝 𝐠𝐚𝐦𝐞.- 𝐖𝐡𝐲 𝐢𝐭'𝐬 𝐞𝐬𝐬𝐞𝐧𝐭𝐢𝐚𝐥 𝐭𝐨 𝐠𝐞𝐭 𝐠𝐞𝐧𝐮𝐢𝐧𝐞 𝐛𝐮𝐫𝐧𝐢𝐧𝐠 𝐝𝐞𝐬𝐢𝐫𝐞 𝐟𝐫𝐨𝐦 𝐚 𝐰𝐨𝐦𝐚𝐧 𝐰𝐡𝐨 𝐰𝐚𝐧𝐭𝐬 𝐭𝐨 𝐝𝐚𝐭𝐞 𝐲𝐨𝐮.- 𝐓𝐡𝐞 𝐭𝐨𝐩 𝟐𝟎 𝐫𝐞𝐝 𝐟𝐥𝐚𝐠𝐬 𝐭𝐡𝐚𝐭 𝐲𝐨𝐮 𝐦𝐮𝐬𝐭 𝐯𝐞𝐭 𝐰𝐨𝐦𝐞𝐧 𝐟𝐨𝐫 𝐚 𝐥𝐨𝐧𝐠 𝐭𝐞𝐫𝐦 𝐫𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩.- 𝐇𝐨𝐰 𝐭𝐨 𝐛𝐞𝐜𝐨𝐦𝐞 𝐨𝐧𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐭𝐨𝐩 𝟐𝟎% 𝐨𝐟 𝐦𝐞𝐧 𝐭𝐡𝐚𝐭 𝐰𝐨𝐦𝐞𝐧 𝐬𝐰𝐢𝐩𝐞 𝐫𝐢𝐠𝐡𝐭 𝐟𝐨𝐫 𝐨𝐧 𝐨𝐧𝐥𝐢𝐧𝐞 𝐝𝐚𝐭𝐢𝐧𝐠. - 𝐖𝐡𝐲 𝐬𝐦𝐚𝐫𝐭 𝐦𝐞𝐧 𝐚𝐯𝐨𝐢𝐝 𝐦𝐚𝐫𝐫𝐢𝐚𝐠𝐞. 𝐀𝐧𝐝 𝐦𝐮𝐜𝐡 𝐦𝐨𝐫𝐞. 𝐓𝐡𝐢𝐬 𝐛𝐨𝐨𝐤 𝐞𝐱𝐩𝐨𝐬𝐞𝐬 𝐭𝐡𝐞 𝐜𝐨𝐦𝐟𝐨𝐫𝐭𝐢𝐧𝐠 𝐥𝐢𝐞𝐬 𝐲𝐨𝐮'𝐯𝐞 𝐛𝐞𝐞𝐧 𝐭𝐨𝐥𝐝 𝐭𝐡𝐫𝐨𝐮𝐠𝐡𝐨𝐮𝐭 𝐲𝐨𝐮𝐫 𝐥𝐢𝐟𝐞 𝐟𝐨𝐫 𝐰𝐡𝐚𝐭 𝐭𝐡𝐞𝐲 𝐫𝐞𝐚𝐥𝐥𝐲 𝐚𝐫𝐞. 𝐄𝐧𝐚𝐛𝐥𝐢𝐧𝐠 𝐲𝐨𝐮 𝐭𝐨 𝐛𝐞𝐜𝐨𝐦𝐞 𝐚 𝐭𝐫𝐮𝐥𝐲 𝐚𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜 𝐀𝐥𝐩𝐡𝐚 𝐭𝐡𝐚𝐭 𝐜𝐡𝐚𝐬𝐞𝐬 𝐞𝐱𝐜𝐞𝐥𝐥𝐞𝐧𝐜𝐞, 𝐚𝐧𝐝 𝐥𝐞𝐚𝐝𝐬 𝐚 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐩𝐚𝐬𝐬𝐢𝐨𝐧-𝐟𝐢𝐥𝐥𝐞𝐝 𝐥𝐢𝐟𝐞.❞</p>
     <button
onClick={() => window.open("/the-unplugged-alpha.pdf", "_blank")}
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
}
export default FamousBooksSection ;