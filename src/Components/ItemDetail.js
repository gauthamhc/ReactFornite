import React from "react";

const ItemDetail = (match) => {
  console.log(match);
  console.log(match.match.params.id);

  return (
    <>
      <h2>You are a successful developer</h2>
    </>
  );
};

// https://fortnite-api.theapinetwork.com/item/get?id={{itemid}}

export default ItemDetail;
