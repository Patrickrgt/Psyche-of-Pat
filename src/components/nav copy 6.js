import React, { Component } from "react";
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
    pvs: ["hnk", "pmmm", "csm", "wha", "test"],
    storyList: { hnk: "test1", pmmm: "test2", csm: "test3" },
    thoughtsList: { hnk: "thoughts1", pmmm: "thoughts2", csm: "thoughts3" },
    reviewList: { hnk: "review1", pmmm: "review2", csm: "review3" },
    mediaObjects: {
      hnk: { story: "story 1", thoughts: "thoughts 1", review: "review 1" },
      pmmm: { story: "story 2", thoughts: "thoughts 2", review: "review 2" },
      csm: { story: "story 3", thoughts: "thoughts 3", review: "review 3" },
    },
    quotes: [""],
    authors: [""],
    category: ["STORY", "THOUGHTS", "REVIEW"],
    handleMedia: false,
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
    console.log(
      e.target.id,
      this.state.pvs[0],
      Object.keys(this.state.storyList)[0]
    );

    console.log(this.state.pv);
    console.log(Object.keys(this.state.mediaObjects["hnk"])[0]);
    // console.log(Object.keys(this.state.mediaObjects)[0]);
    // console.log(this.state.mediaObjects.hnk.story);
    // console.log(this.state.mediaObjects[0]);
    // console.log(this.state.mediaObjects[0]);
    // console.log(Object.values(this.state.mediaObjects)[0]["story"]);
    // console.log(this.state.mediaObjects["hnk"]);

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
    console.log(e.target.id);

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
        author: "author1",
      });
    } else if (e.target.id === this.state.anime[1]) {
      this.setState({
        currAnime: "Puella Magi Madoka Magica",
        pv: "pmmm",
        quote: "testing",
        author: "author2",
      });
    } else if (e.target.id === this.state.anime[2]) {
      this.setState({
        currAnime: "Chainsaw Man",
        pv: "csm",
        quote: "testing",
        author: "author3",
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
                    onMouseOver={(e) => this.handleMediaHover(e)}
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
                <div className="video-overlay">
                  <h1 className="overlay-quote">{this.state.quote}</h1>
                  <h1 className="overlay-author">{this.state.author}</h1>
                </div>
                {this.state.handleMedia === true ? (
                  <React.Fragment>
                    <video
                      id="videoPlayer"
                      className="fade-in"
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
                            : ""
                        }
                        type="video/mp4"
                      ></source>
                    </video>
                  </React.Fragment>
                ) : (
                  <div></div>
                )}
              </section>

              {/* <section className="video-container">
                <div className="video-overlay">
                  <h1 className="overlay-quote">
                   
                  </h1>
                  <h1 className="overlay-author"></h1>
                </div>
                <video id="hnk" autoplay loop muted>
                  <source src={hnk} type="video/mp4"></source>
                </video>
              </section> */}

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
                  {/* console.log(Object.keys(this.state.mediaObjects)[0]); */}

                  <div>
                    {Object.values(this.state.mediaObjects[this.state.pv]).map(
                      (media, index) => (
                        <div
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

                  {this.state.story === true ? (
                    <div>
                      {Object.values(this.state.storyList).map(
                        (story, index) => (
                          <div
                            className={
                              this.state.pv ===
                              Object.keys(this.state.storyList)[index]
                                ? "card-styling"
                                : "inactive"
                            }
                          >
                            <CardContent className="card-content-container">
                              <Typography className="card-text">
                                <span>{story}</span>
                              </Typography>
                            </CardContent>
                          </div>
                        )
                      )}
                    </div>
                  ) : this.state.thoughts === true ? (
                    <div>
                      {Object.values(this.state.thoughtsList).map(
                        (thoughts, index) => (
                          <div
                            className={
                              this.state.pv ===
                              Object.keys(this.state.thoughtsList)[index]
                                ? "card-styling"
                                : "inactive"
                            }
                          >
                            <CardContent className="card-content-container">
                              <Typography className="card-text">
                                <span>{thoughts}</span>
                              </Typography>
                            </CardContent>
                          </div>
                        )
                      )}
                    </div>
                  ) : this.state.review === true ? (
                    <div>
                      {Object.values(this.state.reviewList).map(
                        (review, index) => (
                          <div
                            className={
                              this.state.pv ===
                              Object.keys(this.state.reviewList)[index]
                                ? "card-styling"
                                : "inactive"
                            }
                          >
                            <CardContent className="card-content-container">
                              <Typography className="card-text">
                                <span>{review}</span>
                              </Typography>
                            </CardContent>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {this.state.story === true ? (
                    <div className="card-styling">
                      <CardMedia
                        className="card-styling"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                      />
                      <CardContent className="card-content-container">
                        {/* <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography> */}
                        <Typography className="card-text">
                          {this.state.pv === "hnk" ? (
                            <section>
                              <span>
                                "In the mysterious future, crystalline organisms
                                called Gems inhabit a world that has been
                                destroyed by six meteors. Each Gem is assigned a
                                role in order to fight against the Lunarians, a
                                species who attacks them in order to shatter
                                their bodies and use them as decorations."
                              </span>
                            </section>
                          ) : this.state.pv === "pmmm" ? (
                            <span>
                              Madoka Kaname and Sayaka Miki are regular middle
                              school girls with regular lives, but all that
                              changes when they encounter Kyuubey, a cat-like
                              magical familiar, and Homura Akemi, the new
                              transfer student.
                              <br></br>
                              <br></br>
                              Kyuubey offers them a proposition: he will grant
                              any one of their wishes and in exchange, they will
                              each become a magical girl, gaining enough power
                              to fulfill their dreams. However, Homura Akemi, a
                              magical girl herself, urges them not to accept the
                              offer, stating that everything is not what it
                              seems.
                              <br></br>
                              <br></br>A story of hope, despair, and friendship,
                              Mahou Shoujo Madoka★Magica deals with the
                              difficulties of being a magical girl and the price
                              one has to pay to make a dream come true.
                            </span>
                          ) : this.state.pv === "csm" ? (
                            <span>
                              "Denji has a simple dream—to live a happy and
                              peaceful life, spending time with a girl he likes.
                              This is a far cry from reality, however, as Denji
                              is forced by the yakuza into killing devils in
                              order to pay off his crushing debts. Using his pet
                              devil Pochita as a weapon, he is ready to do
                              anything for a bit of cash."
                            </span>
                          ) : (
                            ""
                          )}
                        </Typography>
                      </CardContent>
                    </div>
                  ) : this.state.thoughts === true ? (
                    <CardActionArea className="card-styling">
                      <CardContent className="card-content-container">
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          className="card-text"
                        >
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  ) : this.state.review === true ? (
                    <CardActionArea className="card-styling">
                      <CardMedia
                        className="card-styling"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                      />
                      <CardContent className="card-content-container">
                        {/* <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography> */}
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          className="card-text"
                        >
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  ) : (
                    <div></div>
                  )}
                </Card>
              ) : (
                <div></div>
              )}
            </item>
            <item></item>
          </Mui.Grid>
        </Mui.Grid>
      </React.Fragment>
    );
  }
}

export default Nav;
