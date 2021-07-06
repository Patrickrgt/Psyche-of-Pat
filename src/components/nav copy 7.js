import React, { Component } from "react";
import { Transition, animate, animated } from "react-spring";
import reactDom from "react-dom";
import * as Mui from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import hnk from "../videos/hnk.mp4";
import pmmm from "../videos/pmmm.mp4";
import csm from "../videos/csm.mp4";

import hnklogo from "../logos/hnklogo.png";
import pmmmlogo from "../logos/pmmmlogo.png";
import csmlogo from "../logos/csmlogo.png";

import VideoPlayer from "./videoplayer.jsx";

class Nav extends Component {
  state = {
    story: true,
    thoughts: false,
    review: false,
    anime: [
      "Land of Lustrous",
      "Puella Magi Madoka Magica",
      "Chainsaw Man",
      "Witch Hat Atelier",
      "Test",
    ],
    mediaLogos: [hnklogo, pmmmlogo, csmlogo],
    pvs: ["hnk", "pmmm", "csm", "wha", "test"],
    storyList: { hnk: "test1", pmmm: "test2", csm: "test3" },
    thoughtsList: { hnk: "thoughts1", pmmm: "thoughts2", csm: "thoughts3" },
    reviewList: { hnk: "review1", pmmm: "review2", csm: "review3" },
    mediaObjects: {
      hnk: {
        story:
          "In the mysterious future, crystalline organisms called Gems inhabit a world that has been destroyed by six meteors. Each Gem is assigned a role in order to fight against the Lunarians, a species who attacks them in order to shatter their bodies and use them as decorations. \n \n Phosphophyllite, also known as Phos, is a young and fragile Gem who dreams of helping their friends in the war effort. Instead, they are told to compile an encyclopedia because of their delicate condition. After begrudgingly embarking on this task, Phos meets Cinnabar, an intelligent gem who has been relegated to patrolling the isolated island at night because of the corrosive poison their body creates. After seeing how unhappy Cinnabar is, Phos decides to find a role that both of the rejected Gems can enjoy. Houseki no Kuni follows Phos' efforts to be useful and protect their fellow Gems.",
        thoughts: "thoughts 1",
        review: "review 1",
      },
      pmmm: {
        story:
          "Madoka Kaname and Sayaka Miki are regular middle school girls with regular lives, but all that changes when they encounter Kyuubey, a cat-like magical familiar, and Homura Akemi, the new transfer student. \n \n Kyuubey offers them a proposition: he will grant any one of their wishes and in exchange, they will each become a magical girl, gaining enough power to fulfill their dreams. However, Homura Akemi, a magical girl herself, urges them not to accept the offer, stating that everything is not what it seems. \n \n A story of hope, despair, and friendship, Mahou Shoujo Madoka★Magica deals with the difficulties of being a magical girl and the price one has to pay to make a dream come true.",
        thoughts: "thoughts 2",
        review: "review 2",
      },
      csm: {
        story:
          "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash. \n \n Unfortunately, he has outlived his usefulness and is murdered by a devil in contract with the yakuza. However, in an unexpected turn of events, Pochita merges with Denji's dead body and grants him the powers of a chainsaw devil. Now able to transform parts of his body into chainsaws, a revived Denji uses his new abilities to quickly and brutally dispatch his enemies. Catching the eye of the official devil hunters who arrive at the scene, he is offered work at the Public Safety Bureau as one of them. Now with the means to face even the toughest of enemies, Denji will stop at nothing to achieve his simple teenage dreams.",
        thoughts: "thoughts 3",
        review: "review 3",
      },
    },
    quotes: [""],
    authors: [""],
    category: ["STORY", "THOUGHTS", "REVIEW"],
    currCategory: "story",
    handleMedia: false,
    quote: "“Power always comes with a measure of loneliness”",
    author: "Haruko Ichikawa",
  };

  componentDidMount() {
    this.setState(
      {
        pv: "hnk",
        handleMedia: true,
      },
      () => {
        document.getElementById("videoPlayer").play();
      }
    );
  }

  handleMediaHover = async (e) => {
    await this.setState(
      {
        handleMedia: false,
      },
      () => {
        this.setState({
          handleMedia: true,
        });
      }
    );

    if (e.target.id === this.state.anime[0]) {
      this.setState({
        currAnime: "Land of Lustrous",
        pv: "hnk",
        quote: "“Power always comes with a measure of loneliness”",
        author: "Haruko Ichikawa",
      });
    } else if (e.target.id === this.state.anime[1]) {
      this.setState({
        currAnime: "Puella Magi Madoka Magica",
        pv: "pmmm",
        quote:
          "“Whenever we pray for someone’s happiness, someone else must be cursed in exchange.”",
        author: "Sayaka Miki",
      });
    } else if (e.target.id === this.state.anime[2]) {
      this.setState({
        currAnime: "Chainsaw Man",
        pv: "csm",
        quote: "“A corpse is talking.”",
        author: "Makima",
      });
    }

    document.getElementById("videoPlayer").play();
  };

  handleMediaClick = async (e) => {
    await this.setState(
      {
        handleMedia: false,
      },
      () => {
        this.setState({
          handleMedia: true,
        });
      }
    );

    if (e.target.id === this.state.anime[0]) {
      this.setState({
        currAnime: "Land of Lustrous",
        pv: "hnk",
        quote: "“Power always comes with a measure of loneliness”",
        author: "Haruko Ichikawa",
      });
    } else if (e.target.id === this.state.anime[1]) {
      this.setState({
        currAnime: "Puella Magi Madoka Magica",
        pv: "pmmm",
        quote:
          "“Whenever we pray for someone’s happiness, someone else must be cursed in exchange.”",
        author: "Sayaka Miki",
      });
    } else if (e.target.id === this.state.anime[2]) {
      this.setState({
        currAnime: "Chainsaw Man",
        pv: "csm",
        quote: "“A corpse is talking.”",
        author: "Makima",
      });
    }

    document.getElementById("videoPlayer").play();
  };

  handleCardClick = (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "STORY") {
      this.setState(
        {
          currCategory: "story",
          story: true,
          thoughts: false,
          review: false,
        },
        () => {
          console.log(this.state.story);
        }
      );
    }

    if (e.target.innerHTML === "THOUGHTS") {
      this.setState(
        {
          currCategory: "thoughts",
          story: false,
          thoughts: true,
          review: false,
        },
        () => {
          console.log(this.state.thoughts);
        }
      );
    }

    if (e.target.innerHTML === "REVIEW") {
      this.setState(
        {
          currCategory: "review",
          story: false,
          thoughts: false,
          review: true,
        },
        () => {
          console.log(this.state.review);
        }
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div id={this.state.pv} className="react-wallpaper"></div>
        <Mui.Grid container className="grid-container" direction="row">
          <Mui.Grid item xs={5}>
            <div className="nav-arrow-up"></div>
            <div className="grid-column">
              {this.state.anime.map((animeTitle, index) => (
                <div>
                  <div
                    id={animeTitle}
                    className={
                      animeTitle === this.state.currAnime
                        ? "nav-image-container active"
                        : "nav-image-container"
                    }
                    onClick={(e) => this.handleMediaClick(e)}
                    // onMouseOver={(e) => this.handleMediaHover(e)}
                  >
                    {animeTitle}
                  </div>
                </div>
              ))}
            </div>
            <div className="nav-arrow-down"></div>
          </Mui.Grid>

          <Mui.Grid item xs={7}>
            <item>
              <section className="video-container">
                {this.state.handleMedia === true ? (
                  <React.Fragment>
                    {/* <div className="video-overlay">
                      <h1 className="overlay-quote fade-in">
                        {this.state.quote}
                      </h1>
                      <h1 className="overlay-author fade-in">
                        {this.state.author}
                      </h1>
                    </div>
                    <video
                      id="videoPlayer"
                      // className="fade-in"
                      autoplay
                      loop
                      muted
                    >
                      <source
                        src={
                          this.state.pv === "hnk"
                            ? hnk
                            : this.state.pv === "pmmm"
                            ? pmmm
                            : this.state.pv === "csm"
                            ? csm
                            : csm
                        }
                        type="video/mp4"
                      ></source>
                    </video> */}
                    <VideoPlayer
                      quote={this.state.quote}
                      author={this.state.author}
                      pv={
                        this.state.pv === "hnk"
                          ? hnk
                          : this.state.pv === "pmmm"
                          ? pmmm
                          : this.state.pv === "csm"
                          ? csm
                          : csm
                      }
                    />
                  </React.Fragment>
                ) : (
                  <div></div>
                )}
              </section>
              {/* <Transition
                native
                items={this.state.handleMedia}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
              >
                {(show) =>
                  show &&
                  ((props) => <animated.div style={props}></animated.div>)
                }
              </Transition> */}
              {this.state.handleMedia === true ? (
                <Card className="card-styling fade-in">
                  <CardActions>
                    {this.state.category.map((categoryTab) => (
                      <button
                        type="button"
                        className="card-button"
                        size="large"
                        onClick={(e) => this.handleCardClick(e)}
                      >
                        {categoryTab}
                      </button>
                    ))}
                  </CardActions>

                  <div>
                    {/* If PV = said media then we map all object values of said media from the object list */}
                    {Object.values(this.state.mediaObjects[this.state.pv]).map(
                      (media, index) => (
                        <div
                          // J itteration ternary if current category is equal to object list of media of index
                          className={
                            this.state.currCategory ===
                            Object.keys(this.state.mediaObjects[this.state.pv])[
                              index
                            ]
                              ? "card-styling"
                              : "inactive"
                          }
                        >
                          <CardContent className="card-content-container">
                            <Typography className="card-text">
                              <span>{media}</span>
                            </Typography>
                          </CardContent>
                        </div>
                      )
                    )}
                  </div>
                </Card>
              ) : (
                <div></div>
              )}
            </item>
          </Mui.Grid>
        </Mui.Grid>
      </React.Fragment>
    );
  }
}

export default Nav;
