import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Shop = () => {
  const [banners, setBanners] = useState([]);
  const [saved, setSaved] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fortnite-api.com/v1/banners`);
      const data = response.data;
      console.log(data.data);
      setBanners(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>The Items are down here</h2>
      <div className="banners">
        {banners.map((banner) => {
          return (
            <div className="banner" key={banner.id}>
              <Link to={`/shop/${banner.id}`}>
                <p>{banner.devName}</p>
                <img src={banner.images.smallIcon} alt="Banner_Image" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
