import React, { Component } from "react";

// import * as Mui from "@material-ui/core";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";

import hnk from "../videos/hnk.mp4";
import pmmm from "../videos/pmmm.mp4";
import csm from "../videos/csm.mp4";
import wha from "../videos/wha.mp4";
import tpnl from "../videos/tpnl.mp4";

import hnklogo from "../logos/hnklogo.png";
import pmmmlogo from "../logos/pmmmlogo.png";
import csmlogo from "../logos/csmlogo.png";
import whalogo from "../logos/whalogo.png";
import tpnllogo from "../logos/tpnllogo.png";

import phos from "../pfp/phos.jpg";

import VideoPlayer from "./videoplayer.jsx";

class NavDesktop extends Component {
  state = {
    story: true,
    thoughts: false,
    review: false,
    about: false,
    anime: [
      "Land of Lustrous",
      "Puella Magi Madoka Magica",
      "Chainsaw Man",
      "Witch Hat Atelier",
      "The Promised Neverland",
    ],
    mediaLogos: [hnklogo, pmmmlogo, csmlogo, whalogo, tpnllogo],
    pvs: ["hnk", "pmmm", "csm", "wha", "tpnl"],
    storyList: { hnk: "test1", pmmm: "test2", csm: "test3" },
    thoughtsList: { hnk: "thoughts1", pmmm: "thoughts2", csm: "thoughts3" },
    reviewList: { hnk: "review1", pmmm: "review2", csm: "review3" },
    menu: true,
    mediaObjects: {
      hnk: {
        story:
          "In the mysterious future, crystalline organisms called Gems inhabit a world that has been destroyed by six meteors. Each Gem is assigned a role in order to fight against the Lunarians, a species who attacks them in order to shatter their bodies and use them as decorations. \n \n Phosphophyllite, also known as Phos, is a young and fragile Gem who dreams of helping their friends in the war effort. Instead, they are told to compile an encyclopedia because of their delicate condition. After begrudgingly embarking on this task, Phos meets Cinnabar, an intelligent gem who has been relegated to patrolling the isolated island at night because of the corrosive poison their body creates. After seeing how unhappy Cinnabar is, Phos decides to find a role that both of the rejected Gems can enjoy. Houseki no Kuni follows Phos' efforts to be useful and protect their fellow Gems.",
        thoughts:
          "The land of lustrous takes on a CGI approach and goes beyond expected adaptations from a manga to an anime. \n \n Scenes feel more dynamic as the camera occasionally pans one hundred eighty degrees to reveal characters or enemies in turn, really immersing the viewer in each scene. \n \n Usually with CGI animations one may find it an awkward transition from normally watching 2D animations, however Studio Orange (the studio animators for the Land of Lustrous) executes the animation well by playing with the frame rate of each action to mimic 2D animations, similar to what Sony Pictures Animations did with the movie, Spider-Man: Into the Spider-Verse. \n \n The uniqueness of the story lies in world-building of gems and moon enemies known as Lunarians. Each episode makes you curious as to what the main character will do next as you further envelop yourself intro the Land of the Lustrous.",
        review:
          "Currently one of my favorite series. The anime is warm-hearted and gets a little dark by the end, however after reading the manga I experienced an existential dread after seeing what the main character had to go through. The main character Phos psychologically resembles any regular human being. As a fragile gem, Phos quickly learns they have no place in the world and lazily sleeps the day away desiring more. Phos wants to be stronger, but her composition as a gem makes her one of the weakest with a score of a 3.5 on the hardness scale. Phos’s vulnerability is shown when they break after their teacher raises his voice at one of the other gems. Despite this, Phos tries to fight alongside her fellow gems in order to find a place in the world. As Phos learns from each mistake, they grow more curious of the unknown and seek answers only they believe they can find. The journey to the truth changes them and sometimes not everyone wants to believe it as truth. \n \n  The series takes the thought experiment of the Ship of Thesus to almost a literal level that makes each episode and each chapter all the more exciting to read. Phos is a very relatable character exposed to a very cruel world that makes you pity them by the end of the series. It’s a beautiful story of a tragic hero that everyone should pick up if they have time.",
      },
      pmmm: {
        story:
          "Madoka Kaname and Sayaka Miki are regular middle school girls with regular lives, but all that changes when they encounter Kyuubey, a cat-like magical familiar, and Homura Akemi, the new transfer student. \n \n Kyuubey offers them a proposition: he will grant any one of their wishes and in exchange, they will each become a magical girl, gaining enough power to fulfill their dreams. However, Homura Akemi, a magical girl herself, urges them not to accept the offer, stating that everything is not what it seems. \n \n A story of hope, despair, and friendship, Mahou Shoujo Madoka★Magica deals with the difficulties of being a magical girl and the price one has to pay to make a dream come true.",
        thoughts:
          "A well-executed deconstructed magical girl genre anime, and one of the first well known ones that inspired many to write similar stories. \n \n The animation and sound direction work together perfectly, setting a unique atmosphere paired with rune calligraphy that differentiates the anime apart from other magical girl focused ones. \n \n The series is setup as one that seems whole hearted and friendly but quickly turns into a dark tragedy with each episode. \n \n I consider Madoka Magica to be a classic anime that tells a modern tragedy in such a short amount of episodes that would leave many remembering it for years.",
        review:
          "Madoka Magica has been a favorite of mine for years and set the bar for me in terms of quality for media to the point where I feel spoiled to have been able to experience it. The twists are dark, gritty and unexpected keeping you focused as to what comes next as you experience each character being brought up and slowly torn down by the dark reality that faces them. \n \n Each character has their own conflict and eventual resolve that happens in some of the most ironic ways making it feel like a classic Greek tragedy. \n \n Puella Magi Madoka Magica is an absolute pick up for dark, thriller, psychological fans.",
      },
      csm: {
        story:
          "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash. \n \n Unfortunately, he has outlived his usefulness and is murdered by a devil in contract with the yakuza. However, in an unexpected turn of events, Pochita merges with Denji's dead body and grants him the powers of a chainsaw devil. Now able to transform parts of his body into chainsaws, a revived Denji uses his new abilities to quickly and brutally dispatch his enemies. Catching the eye of the official devil hunters who arrive at the scene, he is offered work at the Public Safety Bureau as one of them. Now with the means to face even the toughest of enemies, Denji will stop at nothing to achieve his simple teenage dreams.",
        thoughts:
          "Tatsuki Fujimoto has a distinct art style that fits the tone of the story so well. Levels of grittiness are shown through detailing--further amplifying the story’s flare. \n \n The story moves at a fast-pace, you would be able to finish reading Chainsaw Man in a day but find yourself thinking about it for months. \n \n Not everything in Chainsaw Man is explained which would leave most hanging, but even without explanations, most would probably be content with where the story is at as of now. \n \n Chainsaw Man is such a fun read, there’s no way to expect what would happen next which always keeps you glued to each page moving from chapter to chapter. \n \n Chainsaw Man is one of those mangas that you would find yourself revisiting and loving with each re-read. \n \n It would be hard to get tired of the dynamic stories and characters that Fujimoto created. The world of Chainsaw Man is such an engaging one, it’s a great entry to manga media for young adults.",
        review:
          "Chainsaw Man is a great read for any mood, the mindless action will entice you to keep reading, it’s such a unique story you can’t help but think of what inspired Fujimoto on world building. Fujimoto takes common hero-story tropes and twists them inside-out to keep it fresh. \n \n Character progressions are different from regular shounen manga. Progressions could be considered to many as going either too fast or being too lackluster, but the ridiculous events in the story make up for lack of explanation. \n \n Chainsaw Man is for anyone that loves a good hero story and will be a classic years down the line.",
      },
      wha: {
        story:
          "Coco, a humble dressmaker’s daughter, has always been fascinated by magic and the witches who cast it, despite the strict precautions they take to hide their methods from the public. However, when Coco takes advantage of a golden chance to spy on the skilled witch Qifrey, she realizes that her favorite picture book was a disguised magic book all along! In her excitement, she immediately starts testing out the various spells. \n \n When a spell causes a disaster in her home, Qifrey rescues her just in time and decides to train her, realizing that she is the first lead he has found that could help him track down the Brimmed Caps—a dangerous group of heretics who experiment with forbidden body-altering magic and spread magical artifacts among the commoners. But before Coco and Qifrey can confront the Brimmed Caps, she is going to have to improve her magical skills and learn to get along with Qifrey’s other apprentices.",
        thoughts:
          "Witch Hat Atelier’s art style resembles that of Semi-realism as Kamome Shirahama did Marvel comic book covers in the past. The magic system in the story is unique which makes it so refreshing. Environments are vast and detailed and you can tell each panel was drawn with love and affection towards the author’s own craft. \n \n Events in Witch Hat Atelier are wholesome but can sometimes feel dangerous towards the characters at times. Coco, the main character, is determined to learn magic even though she was not born into the craft. Her determination towards her own goals is inspiring and makes you want to cheer her on. \n \n With Hat Atelier is a great read for all ages especially those interested in fantasy stories. Veterans reading will also enjoy the uniqueness of the story but will find themselves quickly wanting more as chapter releases are monthly. \n \n",
        review:
          "The art style is unique and is one of my favorites. I find myself appreciating each panel with all it’s detail. However, at some points I found myself spoiled enough by the intricate backgrounds to notice that some chapters were more detailed than others. At times some panels seemed lazy with no backgrounds at all which brought me out of the immersion, but when the backgrounds are there you really do feel immersed and begin to admire the author’s universe. \n \n Character progression is light with common tropes of youth wanting to become something more and help others which makes the story very wholesome. After reading and watching countless psychological stories, Witch Hat Atelier to me feels like a slice of life fantasy that makes me feel comfy with each chapter. \n \n Witch Hat Atelier is a great entry read for those interested in fantasy stories as it is light-hearted at times but can get a little dark as well but still retain it’s tone throughout the story. \n \n",
      },
      tpnl: {
        story:
          "At Grace Field House, life couldn't be better for the orphans! Though they have no parents, together with the other kids and a kind 'Mama' who cares for them, they form one big, happy family. No child is ever overlooked, especially since they are all adopted by the age of 12. Their daily lives involve rigorous tests, but afterwards, they are allowed to play outside. \n \n There is only one rule they must obey: do not leave the orphanage. But one day, two top-scoring orphans, Emma and Norman, venture past the gate and unearth the harrowing secret behind their entire existence. Utilizing their quick-wittedness, the children must work together to somehow change their predetermined fate.",
        thoughts:
          "Without spoiling anything, The Promised Neverland’s story will be disturbing to many. The genres seem to change as the story progresses, the first few chapters are a psychological thriller, which then turns into an action-based story. The switch of tones however makes sense with story progression but drew away some fans of the original tone in the first half of the story. \n \n I very much enjoyed seeing the progression of the three main characters in the story. Emma is the ambitious fighter while Ray and Norman are the intellectuals. Each main character keeps the other in check, but everyone is fighting towards their goal of changing their predetermined fates. \n \n",
        review:
          "The Promised Neverland is an amazing sci-fi story of survival in unknown territory. It’s a story focused around family as each orphan sees each other as brother and sister which can make it even more impactful for the reader--feeling as if they’re part of the family throughout the journey. The plot twist in the story made my mouth drop the first time and I was so stunned that I left my room. I couldn’t help but cry several times during my read. I felt heavily connected with the characters and was wishing for the best for them. \n \n The Promised Neverland is an intense story for young adults into thriller, mystery and action genres. Readers will find themselves attached and wanting more. My only qualm with the story is the skips in time which may feel rushed to many. Many fans even complained to the author that the story seemed rushed but it was fine in my opinion. I recommend everyone interested in reading The Promised Neverland to watch the first season of the anime then continue in the manga around chapter 30. \n \n",
      },
    },
    pv: "hnk",
    quotes: [""],
    authors: [""],
    category: ["STORY", "THOUGHTS", "REVIEW"],
    currCategory: "story",
    handleMedia: false,
    quote: "“Power always comes with a measure of loneliness”",
    author: "Haruko Ichikawa",
    currAnime: "Land of Lustrous",
    pat: {
      pfp: phos,
      general:
        "Hi, I'm Patrick, I enjoy fictional psychological media that puts characters in fight or flight siutations that convey the author's interpretation of human nature given thrilling circumstances. Feel free to scroll through the titles!",
    },
  };

  componentDidMount() {
    console.log(Object.keys(this.state.pat));
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

  handleMediaClick = async (e) => {
    await this.setState(
      {
        handleMedia: false,
        currCategory: "story",
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
    } else if (e.target.id === this.state.anime[3]) {
      this.setState({
        currAnime: "Witch Hat Atelier",
        pv: "wha",
        quote:
          "“If being a “full-fledged adult” means having to do the things you don't want to do... I'd rather stay the way I am now”",
        author: "Richeh",
      });
    } else if (e.target.id === this.state.anime[4]) {
      this.setState({
        currAnime: "The Promised Neverland",
        pv: "tpnl",
        quote:
          "“Even If It's Impossible, I Want To Escape With Everyone... I Don't Want All Of Us To Die. But There's No Option To Leave Them Behind.”",
        author: "Emma",
      });
    }

    document.getElementById("videoPlayer").play();
    window.location.href = `#${this.state.currAnime}`;
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

  handleMenu() {
    this.setState((prevState) => ({
      menu: !prevState.menu,
    }));
  }

  aboutMe() {
    this.setState({
      about: !this.state.about,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="title-div">
          <div className="title">PSYCHE</div>
          <div className="title2">OF PAT</div>
        </div>

        <Card className="profile-pat ">
          {this.state.about === true ? (
            <CardActions onClick={() => this.aboutMe()}>
              <div className="card-container-pat animate__animated animate__fadeInRight">
                <p className="media-text-gen">{this.state.pat.general}</p>
              </div>
            </CardActions>
          ) : (
            <CardActions
              onClick={() => this.aboutMe()}
              className="card-container-pat-pre animate__animated animate__fadeInRight"
            >
              <p className="media-text"></p>
            </CardActions>
          )}

          <img
            className="pfp-pat animate__animated animate__fadeIn"
            src={this.state.pat.pfp}
            alt="phos profile"
          ></img>
        </Card>

        {/* <div className="title2">.S.C.E .F .A.</div> */}
        <div id={this.state.pv} className="react-wallpaper"></div>

        <div className="flex-container">
          <section className="video-container">
            {this.state.handleMedia === true ? (
              <React.Fragment>
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
                      : this.state.pv === "wha"
                      ? wha
                      : tpnl
                  }
                />
              </React.Fragment>
            ) : (
              <div></div>
            )}
          </section>

          {this.state.handleMedia === true ? (
            <div className="card-container animate__animated animate__fadeIn animate__delay-1s">
              <Card className="card-styling animate__animated animate__fadeInRight animate__delay-1s">
                <CardActions>
                  {this.state.category.map((categoryTab) => (
                    <button
                      id={categoryTab}
                      type="button"
                      className={
                        categoryTab === this.state.currCategory.toUpperCase()
                          ? "card-button card-active"
                          : "card-button"
                      }
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
                        <div className="card-content-container">
                          <Typography className="card-text">
                            <p className="media-text animate__animated animate__fadeIn">
                              {media}
                            </p>
                          </Typography>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </Card>
            </div>
          ) : (
            <div></div>
          )}

          <div className="card-container-tab">
            {/* <img
              onClick={() => this.handleMenu()}
              className="menu-button"
              src="https://picsum.photos/50"
              alt="arrow"
            ></img> */}
            {this.state.menu === true ? (
              <div className="grid-column">
                {this.state.anime.map((animeTitle, index) => (
                  <div
                    id={animeTitle}
                    className={
                      animeTitle === this.state.currAnime
                        ? "nav-image-container active"
                        : "nav-image-container"
                    }
                    onClick={(e) => this.handleMediaClick(e)}
                  >
                    <img
                      id={animeTitle}
                      className="media-logo"
                      src={this.state.mediaLogos[index]}
                      alt={animeTitle}
                      onClick={(e) => this.handleMediaClick(e)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavDesktop;
