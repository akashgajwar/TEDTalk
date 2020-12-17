import React, { useState } from "react";
import "./styles.css";

var domainList = {
  Tech: [
    {
      name: "How technology evolves. - 4/5",
      link: "https://www.ted.com/talks/kevin_kelly_how_technology_evolves",
      desc:
        "Tech enthusiast Kevin Kelly asks What does technology want? and discovers that its movement toward ubiquity and complexity is much like the evolution of life.“Thinker, environmentalist and philosopher extraordinaire ... A one-man force of nature.” — fashiontribes.com"
    },
    {
      name: "Can technology solve our big problems? - 3/5",
      link:
        "https://www.ted.com/talks/jason_pontin_can_technology_solve_our_big_problems",
      desc:
        "In today’s talk, Jason Pontin asks a bold question: Why hasn’t technological innovation brought solutions to the world’s biggest problems — curing cancer, feeding everyone on the planet, creating truly clean energy, etc. In this talk, Pontin hopes aloud that technology will help us with some of these seemingly-intractable issues , and gives insight into four criteria that must be met for a problem to have a technological solution."
    }
  ],
  Business: [
    {
      name: "The business logic of sustainability - 4/5",
      link:
        "https://www.ted.com/talks/ray_anderson_the_business_logic_of_sustainability",
      desc:
        "Ray Anderson founded the company that makes covetable Flor carpeting. But behind the fresh design is a decades-deep commitment to sustainable ways of doing business — culminating in the Mission Zero plan."
    },
    {
      name: "What brands can learn from online dating - 5/5",
      link:
        "https://www.ted.com/talks/sarah_willersdorf_what_brands_can_learn_from_online_dating",
      desc:
        "On dating sites like Tinder and Hinge, users average 3-5 seconds reviewing a profile before swiping left or right. In a generation raised on 140 characters or less, brand expert Sarah Willersdorf proposes that marketing has a lot to learn from online daters. "
    }
  ],
  Social: [
    {
      name: "Online social change: easy to organize, hard to win - 4/5",
      link:
        "https://www.ted.com/talks/zeynep_tufekci_online_social_change_easy_to_organize_hard_to_win",
      desc:
        "Today, a single email can launch a worldwide movement. But as sociologist Zeynep Tufekci suggests, even though online activism is easy to grow, it often doesn't last. Why? She compares modern movements -- Gezi, Ukraine, Hong Kong -- to the civil rights movement of the 1960s, and uncovers a surprising benefit of organizing protest movements the way it happened before Twitter."
    },
    {
      name: "Parenting in the digital age - 5/5",
      link:
        "https://www.ted.com/talks/sonia_livingstone_parenting_in_the_digital_age",
      desc:
        "How can parents ensure their children have a healthy relationship with technology? Social psychologist Sonia Livingstone suggests that the key lies in embracing technology alongside children -- and lays out a practical roadmap for how to get there."
    }
  ],
  Entertainment: [
    {
      name: "What streaming means for the future of entertainment - 4/5",
      link:
        "https://www.ted.com/talks/emmett_shear_what_streaming_means_for_the_future_of_entertainment",
      desc:
        "In a talk and demo, Twitch cofounder Emmett Shear shares his vision for the future of interactive entertainment -- and explains how video game streaming is helping people build communities online.I am excited for a world where our entertainment could connect us instead of isolating us -- a world where we can bond with each other over our shared interests and create real, strong communities,- Shear says."
    },
    {
      name: "Bring out your inner filmmaker - 3/5",
      link:
        "https://www.ted.com/talks/mark_halliday_bring_out_your_inner_filmmaker",
      desc:
        "Video is ubiquitous. Companies use it for entertainment, marketing, training – and customers generally expect it. Mark Halliday describes 'Studio in a Box', a program he put together which allows State Street employees to make professional-quality videos of their own."
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
            style={{ fontSize: "1.5rem", padding: "1.5rem", cursor: "pointer" }}
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
              <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
                {data.name}
              </p>
              <button href={data.link}>
                <span style={{ color: "blue", fontWeight: "bold" }}>
                  Watch here
                </span>
              </button>
              <p>{data.desc}</p>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
