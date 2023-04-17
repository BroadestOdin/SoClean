import React, { useState, useEffect } from "react";
import axios from "axios";
import { InstagramEmbed } from 'react-social-media-embed';

function RetrieveInsta() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/data").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap:'wrap', margin:'2%', gap:'30px'}}>
        {data.map((item) => (
          <InstagramEmbed url={item.url} width={650} height={550} />
        ))}
        </div>
  );
}

export default RetrieveInsta;