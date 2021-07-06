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
    ],
    category: ["STORY", "THOUGHTS", "REVIEW"],
  };

  componentDidMount() {
    document.getElementById("hnk").play();
  }

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
        <Mui.Grid container className="grid-container" direction="row">
          <Mui.Grid item xs={5}>
            <div className="nav-arrow-up"></div>
            <div className="grid-column">
              {this.state.anime.map((animeTitle) => (
                <div className="nav-image-container">
                  {animeTitle}
                  {/* <img src="https://picsum.photos/400/100" /> */}
                </div>
              ))}

              {/* <div className="nav-image-container">
                <img src="https://picsum.photos/400/100" />
              </div>
              <div className="nav-image-container">
                <img src="https://picsum.photos/400/100" />
              </div>
              <div className="nav-image-container">
                <img src="https://picsum.photos/400/100" />
              </div>
              <div className="nav-image-container">
                <img src="https://picsum.photos/400/100" />
              </div>
              <div className="nav-image-container">
                <img src="https://picsum.photos/400/100" />
              </div> */}
            </div>
            <div className="nav-arrow-down"></div>
          </Mui.Grid>

          <Mui.Grid className="grid-container" item xs={7}>
            <item>
              <section className="video-container">
                <div className="video-overlay">
                  <h1 className="overlay-quote">
                    “Power always comes with a measure of loneliness”
                  </h1>
                  <h1 className="overlay-author">Haruko Ichikawa</h1>
                </div>
                <video id="hnk" autoplay loop muted>
                  <source src={hnk} type="video/mp4"></source>
                </video>
              </section>

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

                  {/* <Button
                    className="card-button"
                    size="large"
                    color="primary"
                    onClick={(e) => this.handleCardClick(e)}
                  >
                    THOUGHTS
                  </Button>
                  <Button
                    className="card-button"
                    size="large"
                    color="primary"
                    onClick={(e) => this.handleCardClick(e)}
                  >
                    REVIEW
                  </Button> */}
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
                        In the mysterious future, crystalline organisms called
                        Gems inhabit a world that has been destroyed by six
                        meteors. Each Gem is assigned a role in order to fight
                        against the Lunarians, a species who attacks them in
                        order to shatter their bodies and use them as
                        decorations. Phosphophyllite, also known as Phos, is a
                        young and fragile Gem who dreams of helping their
                        friends in the war effort. Instead, they are told to
                        compile an encyclopedia because of their delicate
                        condition.
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
