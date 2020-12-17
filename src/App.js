import React, { useState } from "react";
import "./styles.css";

var domainList = {
  Tech: [
    {
      name: "Video-1",
      link: "https://www.ted.com/talks/kevin_kelly_how_technology_evolves",
      desc:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs"
    },
    {
      name: "Video-2",
      link: "https://www.ted.com/talks/kevin_kelly_how_technology_evolves",
      desc:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs"
    }
  ],
  Business: [
    {
      name: "Video-3",
      link: "https://www.ted.com/talks/kevin_kelly_how_technology_evolves",
      desc:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs"
    },
    {
      name: "Video-4",
      link: "https://www.ted.com/talks/kevin_kelly_how_technology_evolves",
      desc:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs"
    }
  ],
  Social: [
    {
      name: "Video-1",
      link: "https://www.ted.com/talks/kevin_kelly_how_technology_evolves",
      desc:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs"
    },
    {
      name: "Video-1",
      link: "https://www.ted.com/talks/kevin_kelly_how_technology_evolves",
      desc:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs"
    }
  ],
  Entertainment: [
    {
      name: "Video-1",
      link: "https://www.ted.com/talks/kevin_kelly_how_technology_evolves",
      desc:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs"
    },
    {
      name: "Video-1",
      link: "https://www.ted.com/talks/kevin_kelly_how_technology_evolves",
      desc:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs"
    }
  ]
};

var domainsWeHave = Object.keys(domainList);

export default function App() {
  const [videos, setVideos] = useState(["Your videos will apper here"]);
  function domainClickHandler(domain) {
    var videos = domainList[domain];
    setVideos(videos);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: 50 }}>
        <span style={{ color: "red" }}>TED</span> Talk
      </h1>
      <h2 style={{ fontSize: 16, color: "grey" }}>Stir your curiosity..</h2>

      <h3 style={{ fontSize: 20, padding: "2rem" }}>
        Click the domain you want to explore👇
      </h3>
      {domainsWeHave.map(function (domain) {
        return (
          <span
            onClick={() => domainClickHandler(domain)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={domain}
          >
            {domain}
          </span>
        );
      })}
      <div style={{ fontSize: 20, padding: "2rem" }}>
        {videos.map((data) => {
          console.log(data);
          return (
            <div>
              <p>{data.name}</p>
              <a href={data.link}>
                <span style={{ color: "blue" }}>Watch here</span>
              </a>
              <p>{data.desc}</p>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
