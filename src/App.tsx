import { useEffect, useState } from "react";

import "./App.css";
import { ReservoirKitProvider, darkTheme } from "@reservoir0x/reservoir-kit-ui";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import NftCardList from "./components/NftCardList";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

const theme = darkTheme({
  headlineFont: "sans-serif",
  font: "sans-serif",
  primaryColor: "#323aa8",
  primaryHoverColor: "#252ea5",
  contentBackground: "black",
});

const getTokens = async () => {
  const data = await fetch(`${process.env.REACT_APP_TOKENS_API_URL}`);
  return data.json();
};

function App() {
  const [tokenList, setTokenList] = useState<string[] | []>([]);

  useEffect(() => {
    getTokens()
      .then((data: { data: string[] }) => {
        setTokenList(data?.data);
      })
      .catch((error) => setTokenList([]));
  }, []);
  return (
    <ReservoirKitProvider
      options={{
        chains: [
          {
            id: 1,
            baseApiUrl: "https://api.reservoir.tools",
            active: true,
            apiKey: "611171e6-2788-5645-8886-5eb761b9e807",
          },
        ],

        source: "opensource.io",
      }}
      theme={theme}
    >
      <WagmiConfig client={client}>
        <div className="App">
          <h1>NFT Viewer</h1>
          {tokenList && tokenList.length > 0 && (
            <NftCardList tokensList={tokenList}></NftCardList>
          )}
        </div>
      </WagmiConfig>
    </ReservoirKitProvider>
  );
}

export default App;
