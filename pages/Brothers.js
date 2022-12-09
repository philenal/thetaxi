import { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import ProfilePhoto from "../components/ProfilePhoto";
import BrotherModal from "../components/BrotherModal";
import styles from "../styles/Brother.module.css";

const brothers = [
  {
    name: "Victor Chau",
    delta: "1221",
    class: "2022",
    course: "6-3",
    interests: "Lifting, Singing, Dancing, sadly League",
    blurb: "Shitttt",
  },
  {
    name: "Jan Adlawan",
    delta: "1234",
    class: "2023",
    course: "6-3",
    interests: "Gaming, wholesome gatherings",
    blurb: "Get ready for hella dad jokes cuz im here now",
  },
  {
    name: "Max Tao",
    delta: "1263",
    class: "2024",
    course: "8, 6-2",
    interests: "Tetris, Sleeping",
    blurb: "I am a devout follower of Parkinson's Law",
  },
  {
    name: "Vayd Ramkumar",
    delta: "1269",
    class: "2024",
    course: "6-2, 18",
    interests: "Interests: valorant, politics, lifting, being cringe",
    blurb: "i love K/DA",
  },
  {
    name: "Qiong Zhou Huang",
    delta: "1245",
    class: "2024",
    course: "6-2",
    interests:
      "biking, exploring the city, ramen, memes, video games, politics, research",
    blurb: "water is hydrophilic",
  },
  {
    name: "Sebastian Zhu",
    delta: "1249",
    class: "2024",
    course: "18",
    interests: "Dance, Running, Chess, Music",
    blurb: "Pho is better than ramen change my mind",
  },
  {
    name: "Brian Liu",
    delta: "1248",
    class: "2024",
    course: "6-14, 18",
    interests: "Music, frisbee, video games, adt, volleyball, nature, kemps",
    blurb: "People say nothing is impossible, but I do nothing every day.",
  },
  {
    name: "Larry Shi",
    delta: "1279",
    class: "2025",
    course: "6-2",
    interests: "Startups, poker, music, dance",
    blurb: "shen otp peak 162lp",
  },
  {
    name: "Will Yang",
    delta: "1278",
    class: "2025",
    course: "6-3",
    interests:
      "Exploring campus, playing piano, cubing, and short story writing",
    blurb: "I am an expert at factoring large prime numbers.",
  },
  {
    name: "Darren Yao",
    delta: "1277",
    class: "2025",
    course: "6-4",
    interests: "music, poker, adt, photography",
    blurb: "",
  },
  {
    name: "Hyunwoo Lee",
    delta: "1274",
    class: "2025",
    course: "6-3, 18",
    interests: "dance, league of legends, tft, kpop, singing",
    blurb: "",
  },
  {
    name: "Nathan Chen",
    delta: "1273",
    class: "2025",
    course: "6-3",
    interests: "Programming, Poker, Painting",
    blurb: "Anyone wanna play poker?",
  },
  {
    name: "Jacob Teo",
    delta: "1270",
    class: "2025",
    course: "6-3",
    interests: "pool, food, F1, baking",
    blurb: "plays way too much pool",
  },
  {
    name: "Andrew Doan",
    delta: "1268",
    class: "2025",
    course: "2",
    interests:
      "Cycling, Powerlifting, Woodworking, Ceramics, Cars, League of Legends",
    blurb: "I like making things",
  },
  {
    name: "Thomas Guo",
    delta: "1267",
    class: "2025",
    course: "6-3, 18",
    interests: "Hockey, Poker, Chess, Politics, League",
    blurb: "yasuo main",
  },
  {
    name: "Siyong Huang",
    delta: "1264",
    class: "2025",
    course: "6-3",
    interests: "Card games, fountain pens, baking",
    blurb: "cleans his room",
  },
  {
    name: "Ian Chen",
    delta: "1266",
    class: "2024",
    course: "3, 6-14",
    interests: "Poker, basketball, pool",
    blurb: "早上好中國，現在我有冰淇淋！",
  },
  {
    name: "Charles Phu",
    delta: "1262",
    class: "2024",
    course: "10-Eng",
    interests: "Youtube, Cooking, Genshin, Music",
    blurb: "zzzzz",
  },
  // {
  //   name: "Ethan Yang",
  //   delta: "1261",
  //   class: "2025",
  //   course: "6-2",
  //   interests: "Rock climbing, video games, cooking, robotics",
  //   blurb: "<3",
  // },
  {
    name: "Curtis Chang",
    delta: "1260",
    class: "2025",
    course: "18, 6-14",
    interests: "Origami, Cooking, Eating, Listening to K-Pop, Dancing (poorly)",
    blurb: 'alexa play "what is love" by twice',
  },
  // {
  //   name: "Pascal Passigan",
  //   delta: "1258",
  //   class: "2025",
  //   course: "18-C",
  //   interests: "Poker, basketball, pool",
  //   blurb: "I'm chill",
  // },
  {
    name: "Adrian Gutierrez",
    delta: "1257",
    class: "2024",
    course: "16",
    interests:
      "Rocket Team, Valorant, Working out, Materials and/or Robotics???",
    blurb: "I need sleep.",
  },
  {
    name: "Andy Fong",
    delta: "1256",
    class: "2025",
    course: "5, 12",
    interests: "Video Games, Chemistry, Choir, Learning Japanese, Exercising",
    blurb: "Water is delicious.",
  },
  {
    name: "Chris Zhang",
    delta: "1255",
    class: "2025",
    course: "6-3",
    interests: "dance, watching k/c-dramas, programming, sports, music",
    blurb: "",
  },
  {
    name: "Jorge Ramos",
    delta: "1254",
    class: "2025",
    course: "2",
    interests: "Novels, manga, anime, physics, a lot of video games",
    blurb: "Death and Taxes",
  },
  {
    name: "Khiem Nguyen",
    delta: "1253",
    class: "2023",
    course: "10B",
    interests: "Photography, Traveling, and Food",
    blurb: "I bought AMC and it's still early for you to do the same!",
  },
  {
    name: "William Lin",
    delta: "1252",
    class: "2024",
    course: "6-3",
    interests:
      "programming, tennis, table tennis, working out, running, programming",
    blurb: "",
  },
  {
    name: "Aiden Padilla",
    delta: "1250",
    class: "2023",
    course: "6-1",
    interests: "Making things, League, cooking/baking, working out",
    blurb: "Space is cool",
  },
  {
    name: "Nicholas Tsao",
    delta: "1246",
    class: "2024",
    course: "6-3, 18",
    interests: "Beach Volleyball, Spikeball, Card Games, Writing, Drawing",
    blurb: "",
  },
  // {
  //   name: "Collin Wen",
  //   delta: "1247",
  //   class: "2024",
  //   course: "6-3",
  //   interests: "Squash, golf, music, hiking, art",
  //   blurb: "",
  // },
  {
    name: "Nguyen Le",
    delta: "1244",
    class: "2023",
    course: "6-3",
    interests: "Chess, gaming, badminton, soccer, history",
    blurb:
      "Born and raised in Vietnam. I like to play chess, poker and badminton.",
  },
  {
    name: "Dylan Liu",
    delta: "1243",
    class: "2023",
    course: "18, 6-3",
    interests: "Piano, Basketball, Swimming, Anime (music)",
    blurb: "Poggers!",
  },
  {
    name: "Joey Heerens",
    delta: "1237",
    class: "2023",
    course: "18, 6-3",
    interests:
      "Basketball, Dance, HMMT, Poker, Running, Ultimate Frisbee, scrolling Facebook/Youtube for 2 hours every night",
    blurb:
      "I am a 6'2'' sophomore who loves learning new things, going on random late night expeditions, and meeting new people!",
  },
  {
    name: "Griffin Duffy",
    delta: "1227",
    class: "2022",
    course: "6-2",
    interests: "Cybersecurity, Game Theory, Photography, Bowling",
    blurb:
      'When my friends call on me, I always bring the thunder. I\'ve been described as a "level headed lunatic".',
  },
  {
    name: "Dylan Walker",
    delta: "1276",
    class: "2024",
    course: "6-3",
    interests: "Soccer, video games, and programming",
    blurb: "GOAT of street taco eating contests",
  },
  {
    name: "Timothy Qian",
    delta: "1275",
    class: "2025",
    course: "6-2",
    interests: "Competitive programming, anime/manga, singing, running, tennis, music",
    blurb: "",
  },
  {
    name: "Jacky Chen",
    delta: "1281",
    class: "2026",
    course: "6-14, 15-2",
    interests: "CDRAMA, LEAGUE, EDM",
    blurb: "YASUO TAMER",
  },
  {
    name: "Cameron Holt",
    delta: "1283",
    class: "2026",
    course: "6-3, 21M",
    interests: "Music, Baseball, Football, Osu, Pokémon, Thomas Guo",
    blurb: "diamond instalock jett",
  },
  {
    name: "Kevin Chen",
    delta: "1280",
    class: "2026",
    course: "6-3, 15-1",
    interests: "sunsets, sleep + food, calisthenics, int",
    blurb: "Eat good, sleep well!",
  },
  {
    name: "Nathan Wang",
    delta: "1289",
    class: "2026",
    course: "6-3",
    interests: "board games, bridge, politics, secret hitler, avalon, taxes",
    blurb: "",
  },
  {
    name: "Danny Yang",
    delta: "1292",
    class: "2026",
    course: "20",
    interests: "Lifting, Trenbolone, Steak",
    blurb: "Monkey lift big thing. Monkey good brother",
  },
  {
    name: "Franklin Wang",
    delta: "1287",
    class: "2026",
    course: "6, 18",
    interests: "Oboe, Modular Synthesizers, Skiing, Hiking, Rock Climbing",
    blurb: "so true bestie!!",
  },
  // {
  //   name: "Ray Zheng",
  //   delta: "6969",
  //   class: "2024",
  //   course: "6-14",
  //   interests:
  //     "Cooking, shopping, skincare, dancing, crnb, hanging out with the boyz",
  //   blurb: "watashi brother desu",
  // },
  // {
  //   name: "Phil Liu",
  //   delta: "6996",
  //   class: "2024",
  //   course: "18C",
  //   interests:
  //     "Shopping, badminton, art, running, web dev, hanging out with the boyz and ray",
  //   blurb: "joneun brother ay yo",
  // },
].sort((a, b) => (a.delta > b.delta ? 1 : -1));

function Brothers(props) {
  const scollToRef = useRef();
  const [brother, setBrother] = useState({});
  const [glowDelta, setGlowDelta] = useState(null);

  const elTitle = useRef(null);
  const typedTitle = useRef(null);

  useEffect(() => {
    const optionsTitle = {
      strings: [`BROTHERS`],
      typeSpeed: 80,
      backSpeed: 50,
      loop: false,
      showCursor: true,
    };

    typedTitle.current = new Typed(elTitle.current, optionsTitle);
    return () => {
      typedTitle.current.destroy();
    };
  }, []);

  function showModal() {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#brotherModal");
    myModal.show();
  }

  function renderBrotherImages() {
    // transform to a BrotherImage component
    let renderedBrothers = brothers.map((brother, index) => {
      return (
        <ProfilePhoto
          onMouseOver={() => {
            setGlowDelta(brother.delta);
            scollToRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          onMouseOut={() => setGlowDelta(null)}
          name={brother.name}
          src={"/images/" + brother.delta + ".jpg"}
          onClick={() => {
            setBrother({ ...brother });
            showModal();
          }}
          hasGlow={brother.delta === glowDelta}
        />
      );
    });
    return renderedBrothers;
  }

  function renderBrotherNames() {
    // transform to a BrotherName component
    let renderedBrotherNames = brothers.map((brother, index) => {
      return (
        <div
          className={
            glowDelta === brother.delta
              ? styles.BrotherNameGlow
              : styles.BrotherName
          }
          ref={glowDelta === brother.delta ? scollToRef : null}
          onClick={() => {
            setBrother({ ...brother });
            showModal();
          }}
          onMouseOver={() => setGlowDelta(brother.delta)}
          onMouseOut={() => setGlowDelta(null)}
        >
          {brother.name}
        </div>
      );
    });
    return renderedBrotherNames;
  }
  return (
    <>
      <BrotherModal
        brother={brother}
        open={brother != null}
        setClose={() => setBrother({})}
      />
      <div className={styles.videoContainer}>
        <Link href="/">
          <a className={styles.Back}>BACK TO HOME</a>
        </Link>
        <div className={styles.BrotherTitle}>
          <span ref={elTitle} />
        </div>
        <div className={styles.BrotherAll}>
          <div className={styles.BrotherNamesContainer}>
            {renderBrotherNames()}
          </div>
          <div className={styles.BrotherImagesContainer}>
            {renderBrotherImages()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Brothers;
