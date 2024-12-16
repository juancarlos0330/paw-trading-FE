import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import {
  faBookmark,
  faMagnifyingGlass,
  faChevronDown,
  faLink,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";

// import style
import "./Projects.scss";

// temp data
const data = [
  {
    id: 1,
    name: "Ethereum",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6509e2826e7f9dcddbf8354f_ethereum-eth-logo-p-500.png",
    types: ["DEX", "DEX Aggregator", "Defi Tool"],
  },
  {
    id: 2,
    name: "Binance",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/667f65b81f8e28536db958fa_E06E6362-8590-4F23-A149-373FA0DE0F30-p-500.webp",
    types: ["DEX Aggregator"],
  },
  {
    id: 3,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6509e2c0d19e4527342b3c42_bnb-chain-binance-smart-chain-logo-p-500.png",
    types: ["DEX"],
  },
  {
    id: 4,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/667f65cf69cd32468cfd6c38_477B2EF5-8039-4077-B176-A9EDC2403FDD-p-500.png",
    types: ["Defi Tool"],
  },
  {
    id: 5,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6509e1f85581fc8a0683e67d_polygon-matic-logo-p-500.png",
    types: ["DEX Aggregator", "Defi Tool"],
  },
  {
    id: 6,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6668c0f3c5daccd9ff013254_360-avax.png",
    types: ["DEX", "DEX Aggregator", "Defi Tool"],
  },
  {
    id: 7,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6668c18078cec278bce0e47d_180-celo.png",
    types: ["DEX"],
  },
  {
    id: 8,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6509e2ed552d7ef27610e89a_optimism-ethereum-op-logo-p-500.png",
    types: ["Defi Tool"],
  },
  {
    id: 9,
    name: "Ethereum",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6509e2826e7f9dcddbf8354f_ethereum-eth-logo-p-500.png",
    types: ["DEX", "DEX Aggregator", "Defi Tool"],
  },
  {
    id: 10,
    name: "Binance",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/667f65b81f8e28536db958fa_E06E6362-8590-4F23-A149-373FA0DE0F30-p-500.webp",
    types: ["DEX Aggregator"],
  },
  {
    id: 11,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6509e2c0d19e4527342b3c42_bnb-chain-binance-smart-chain-logo-p-500.png",
    types: ["DEX"],
  },
  {
    id: 12,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/667f65cf69cd32468cfd6c38_477B2EF5-8039-4077-B176-A9EDC2403FDD-p-500.png",
    types: ["Defi Tool"],
  },
  {
    id: 13,
    name: "Ethereum",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6509e2826e7f9dcddbf8354f_ethereum-eth-logo-p-500.png",
    types: ["DEX", "DEX Aggregator", "Defi Tool"],
  },
  {
    id: 14,
    name: "Binance",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/667f65b81f8e28536db958fa_E06E6362-8590-4F23-A149-373FA0DE0F30-p-500.webp",
    types: ["DEX Aggregator"],
  },
  {
    id: 15,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6509e2c0d19e4527342b3c42_bnb-chain-binance-smart-chain-logo-p-500.png",
    types: ["DEX"],
  },
  {
    id: 16,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/667f65cf69cd32468cfd6c38_477B2EF5-8039-4077-B176-A9EDC2403FDD-p-500.png",
    types: ["Defi Tool"],
  },
  {
    id: 17,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6509e1f85581fc8a0683e67d_polygon-matic-logo-p-500.png",
    types: ["DEX Aggregator", "Defi Tool"],
  },
  {
    id: 18,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6668c0f3c5daccd9ff013254_360-avax.png",
    types: ["DEX", "DEX Aggregator", "Defi Tool"],
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="title">Projects</div>
      <div className="projects-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search projects, chains, and more" />
      </div>
      <div className="projects-category">
        <div className="projects-category-relative">
          <div className="projects-category-select">
            <FontAwesomeIcon icon={faBorderAll} />
            <span>Categories</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="projects-category-view"></div>
        </div>
        <div className="projects-category-relative">
          <div className="projects-category-select">
            <FontAwesomeIcon icon={faLink} />
            <span>Chains</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="projects-category-chain-view">
            <div className="projects-category-chain-view-item">
              <div className="projects-category-chain-view-item-title">
                Core Chains
              </div>
              <div className="projects-category-chain-view-item-list">
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/images/ArbOneLogo.svg"
                    alt="token"
                  />
                  <span>Arbitrum One</span>
                </div>
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/images/ArbNovaLogo.svg"
                    alt="token"
                  />
                  <span>Arbitrum Nova</span>
                </div>
              </div>
            </div>
            <div className="projects-category-chain-view-item">
              <div className="projects-category-chain-view-item-title">
                Orbit Chains
              </div>
              <div className="projects-category-chain-view-item-list">
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/_next/image?url=%2Fimages%2Forbitchains%2Fapechain-logo.webp&w=32&q=75"
                    alt="token"
                  />
                  <span>ApeChain</span>
                </div>
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/_next/image?url=%2Fimages%2Forbitchains%2Fcheese-logo.webp&w=32&q=75"
                    alt="token"
                  />
                  <span>CheeseChain</span>
                </div>
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/_next/image?url=%2Fimages%2Forbitchains%2Fdegen-logo.webp&w=32&q=75"
                    alt="token"
                  />
                  <span>Degen Chain</span>
                </div>
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/_next/image?url=%2Fimages%2Forbitchains%2Febi-xyz-logo.webp&w=32&q=75"
                    alt="token"
                  />
                  <span>ebi.xyz</span>
                </div>
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/_next/image?url=%2Fimages%2Forbitchains%2Finjective-logo.webp&w=32&q=75"
                    alt="token"
                  />
                  <span>Injective EVM</span>
                </div>
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/_next/image?url=%2Fimages%2Forbitchains%2Fpop-apex-logo.webp&w=32&q=75"
                    alt="token"
                  />
                  <span>Proof of Play Apex</span>
                </div>
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/_next/image?url=%2Fimages%2Forbitchains%2Freya-logo.webp&w=32&q=75"
                    alt="token"
                  />
                  <span>Reya</span>
                </div>
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/_next/image?url=%2Fimages%2Forbitchains%2Fsanko-logo.webp&w=32&q=75"
                    alt="token"
                  />
                  <span>Sanko</span>
                </div>
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/_next/image?url=%2Fimages%2Forbitchains%2Fxai-logo.webp&w=32&q=75"
                    alt="token"
                  />
                  <span>Xai</span>
                </div>
                <div className="projects-category-chain-view-item-list-item">
                  <input type="checkbox" />
                  <img
                    src="https://portal.arbitrum.io/_next/image?url=%2Fimages%2Forbitchains%2Fxchain-logo.webp&w=32&q=75"
                    alt="token"
                  />
                  <span>XCHAIN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-view">
        {data.map((item, key) => {
          return (
            <a href="/project/detail" className="projects-view-item" key={key}>
              <button
                type="button"
                className="projects-view-item-bookmark"
                onClick={() => alert("bookmarked")}
              >
                <FontAwesomeIcon icon={faBookmark} />
              </button>
              <div className="projects-view-item-img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="projects-view-item-content">
                <div className="projects-view-item-content-title">
                  {item.name}
                </div>
                <div className="projects-view-item-content-desc">
                  {item.desciption}
                </div>
                <div className="projects-view-item-content-types">
                  {item.types.map((type, index) => {
                    return (
                      <div
                        className="projects-view-item-content-types-item"
                        key={index}
                      >
                        {type}
                      </div>
                    );
                  })}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
