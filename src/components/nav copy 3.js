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
        quote: "testing",
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
        quote: "testing",
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
                    “Power always comes with a measure of loneliness”
                  </h1>
                  <h1 className="overlay-author">Haruko Ichikawa</h1>
                </div>
                <video id="hnk" autoplay loop muted>
                  <source src={hnk} type="video/mp4"></source>
                </video>
              </section> */}

              <Card className="card-styling">
                <CardActions>
                  {this.state.category.map((categoryTab) => (
                    <Button
                      className="card-button"
                      size="large"
                      color="primary"
                      onClick={(e) => this.handleCardClick(e)}
                    >
                      {categoryTab}
                    </Button>
                  ))}
                </CardActions>
                {this.state.story === true ? (
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
                        {this.state.pv === "hnk" ? (
                          <section>
                            <span>
                              "In the mysterious future, crystalline organisms
                              called Gems inhabit a world that has been
                              destroyed by six meteors. Each Gem is assigned a
                              role in order to fight against the Lunarians, a
                              species who attacks them in order to shatter their
                              bodies and use them as decorations."
                            </span>
                          </section>
                        ) : this.state.pv === "pmmm" ? (
                          <span>
                            "Madoka Kaname and Sayaka Miki are regular middle
                            school girls with regular lives, but all that
                            changes when they encounter Kyuubey, a cat-like
                            magical familiar, and Homura Akemi, the new transfer
                            student."
                          </span>
                        ) : this.state.pv === "csm" ? (
                          <span>
                            "Denji has a simple dream—to live a happy and
                            peaceful life, spending time with a girl he likes.
                            This is a far cry from reality, however, as Denji is
                            forced by the yakuza into killing devils in order to
                            pay off his crushing debts. Using his pet devil
                            Pochita as a weapon, he is ready to do anything for
                            a bit of cash."
                          </span>
                        ) : (
                          ""
                        )}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                ) : this.state.thoughts === true ? (
                  <CardActionArea className="card-styling">
                    <CardMedia
                      className="card-styling"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
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
            </item>
            <item></item>
          </Mui.Grid>
        </Mui.Grid>
      </React.Fragment>
    );
  }
}

export default Nav;
