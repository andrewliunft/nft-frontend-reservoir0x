import React, { useEffect, useMemo, useState } from "react";
import { NftCardStyle } from "./style";
import { Token } from "@reservoir0x/reservoir-kit-ui";
import { TokenPreview } from "../NftCardList";
export interface props {
  //if u pass in ? that means optional
  //ex Title?:string
  tokenData: Token;
  onSelect: (val: TokenPreview) => void;
}

const NftCard = ({ tokenData, onSelect }: props) => {
  const [topBid, setTopBid] = useState<any>(null);

  const refreshTopBid = () => {
    fetch(
      `https://api.reservoir.tools/events/collections/top-bid/v2?collection=${tokenData?.token?.collection?.id}&sortDirection=desc`,
      {
        method: "GET",
        headers: { "x-api-key": `${process.env.REACT_APP_RESERVOIR_API_KEY}` },
      }
    )
      .then((res: any) => res.json())
      .then((data) => {
        setTopBid(data.events.length > 0 ? data.events[0] : null);
        setTimeout(() => refreshTopBid(), 100000);
      });
  };
  useEffect(() => {
    refreshTopBid();
  }, []);

  return (
    <NftCardStyle
      onClick={() =>
        onSelect({
          token: tokenData,
          topBid: {
            decimal: topBid?.topBid?.price?.amount?.decimal,
            usd: topBid?.topBid?.price?.amount?.usd,
          },
        })
      }
    >
      <h1>{tokenData?.token?.name}</h1>
      <img src={tokenData?.token?.image} alt=""></img>
      {/* <p>Top Bid : ${topBid?.topBid?.price?.amount?.usd}</p> */}
    </NftCardStyle>
  );
};

export default NftCard;
