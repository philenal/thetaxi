import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import styles from "../styles/Brother.module.css";
import Event from "../components/Event";
import EventModal from "../components/EventModal";

const day1 = [
  {
    src: "/event-images/kbbq.jpg",
    name: "KBBQ and House Tours",

    time: "2:00PM - 4:00PM",
    blurb:
      "Come try our signature homemade Korean barbecue and get acquainted with our two brownstone mansions. There's no better meal to start Rush off right!",
  },
  {
    src: "/event-images/arcade.jpg",
    name: "The Theta Xi Arcade",

    time: "4:00PM - 6:00PM",
    blurb:
      "Come chill and play our favorite games with us: League, Valorant, Tetris, Smash, pool, foosball, and much more! We also have a titled chess player in the house if you want to test out your chess skills.",
  },
  {
    src: "/event-images/fancydinner.jpg",
    name: "Steak Dinner",

    time: "6:00PM - 8:00PM",
    blurb:
      "Enjoy some gourmet steaks cooked to perfection by our very own brothers!",
  },
  {
    src: "/event-images/poker.jpg",
    name: "Poker Tournament",

    time: "8:00PM - 10:00PM",
    blurb:
      "Join us for some fun poker with the Theta Xi Bros! May the odds be in your favor as you compete for some big prizes like a Nintendo Switch and Airpods!",
  },
  {
    src: "/event-images/boba.jpg",
    name: "Late Night Boba",

    time: "10:00PM - 12:00AM",
    blurb:
      "Satisfy your both your body and your mind with a limitless supply of our very own homemade bubble tea, served with a side of board games and more!",
  },
];

const day2 = [
  {
    src: "/event-images/dimsum.jpg",
    name: "Dim Sum Run",

    time: "11:00AM - 1:00PM",
    blurb:
      "Our monthly Dim Sum run is a Theta Xi tradition. We’ll meet at the house, then trek to Chinatown for this classic Chinese-style brunch. Dim Sum is more than a just a meal, it’s an experience you can't miss!",
  },
  {
    src: "/event-images/trapology.jpg",
    name: "Escape the Room",

    time: "1:00PM - 4:00PM",
    blurb:
      "Come with us to Trapology Boston to take on some fun escape rooms! Do you have what it takes to make it out in time?",
  },
  {
    src: "/event-images/chinatowndessert.jpg",
    name: "The Great Chinatown Dessert-Off",
    time: "4:00PM - 6:00PM",
    blurb:
      "Compete to find the best hidden gems among Chinatown's many bakeries, then play a game of frisbee on the Common!",
  },
  {
    src: "/event-images/hotpot.jpg",
    name: "Hotpot Buffet",

    time: "6:00PM - 8:00PM",
    blurb:
      "You've had food cooked for you throughout rush so far, but what about cooking it yourself with some of our brothers? Fuel up for the rest of rush with an endless supply of meat and vegetables at Hot Pot Buffet!",
  },
  {
    src: "/event-images/bash.jpg",
    name: "B.A.S.H.",

    time: "8:00PM - 12:00AM",
    blurb:
      "Bring a camera and a friend, but leave your inhibitions behind. Compete for great prizes as you tour Boston on a wild mission to complete crazy tasks and retrieve zany items. Guaranteed to be a memorable part of your rush experience! Departure is at 8:15, dont be late!",
  },
];

const day3 = [
  {
    src: "/event-images/flaminggrill.jpg",
    name: "Flaming Grill",
    time: "11:00AM - 1:00PM",
    blurb: "Join us for lunch at the Flaming Grill and Buffet!",
  },
  {
    src: "/event-images/rockclimbing.jpg",
    name: "Rock Climbing",
    time: "1:00PM - 4:00PM",
    blurb:
      "Come join us for an afternoon of adventurous rock climbing at MetroRock Boston. Learn how to scale professional rock walls, then test your skills and experience the thrill of scaling indoor walls up to 45 feet high. All skill levels welcome, no previous rock-climbing experience necessary.",
  },
  {
    src: "/event-images/williamlin.png",
    name: "Raising Canes Dinner",
    time: "4:00PM - 7:00PM",
    blurb:
      "Enjoy some fried chicken and Texas toast from Raising Cane's with the brothers of Theta Xi! Also come meet the one and only tmwilliamlin168!",
  },
];

const day4 = [
  {
    src: "/event-images/ihop.jpg",
    name: "Late Night IHOP",
    time: "10:00PM - 12:00AM",
    blurb:
      "Hungry? There’s no better place to be than IHOP if you’re looking to satisfy your late night cravings.",
  },
];

const day5 = [
  {
    src: "/event-images/northend.jpg",
    name: "North End Pizza Tasting",
    time: "6:00PM - 8:00PM",
    blurb:
      "Which of the North End’s famous pizza joints actually has the best pizza? See for yourself as we take you to the North End for a memorable and delicious dining experience. ",
  },
  {
    src: "/event-images/gitdctf.jpg",
    name: "Glow in the Dark Capture the Flag",
    time: "8:00PM - 11:00PM",
    start: "20:00",
    end: "23:00",
    blurb:
      "A Theta Xi classic. Meet at the house, and we’ll head to a top secret location for an epic game of glow in the dark Capture the Flag. Think you’ve already got this game figured out? Theta Xi style is filled with surprises and twists that will make you rethink your strategy.",
  },
];

const day6 = [
  {
    src: "/event-images/thaifood.jpg",
    name: "Thai Dinner",
    time: "6:00PM - 8:00PM",
    start: "18:00",
    end: "20:00",
    blurb: "Enjoy some delicious Thai food after your first day of classes!",
  },
  {
    src: "/event-images/minigolf.jpg",
    name: "MiniGolf + Ice Cream",
    time: "8:00PM - 11:00PM",
    start: "20:00",
    end: "23:00",
    blurb:
      "Mini-golf made Happy Gilmore a world-class golfer, and it can do the same for you. Come join the brothers of Theta Xi for a round of this American pastime, and reward yourself with ice cream afterwards.",
  },
];

const day7 = [
  {
    src: "/event-images/yamatos.jpg",
    name: "Yamato's Sushi Dinner",
    time: "6:00PM - 8:00PM",
    blurb:
      "All-you-can-eat sushi at one of the brothers' favorite locations. Need we say more? Come find out for yourself why we return to Yamato year after year.",
  },
  {
    src: "/event-images/cocktails.jpg",
    name: "Theta Xi Mocktails",
    time: "8:00PM - 11:00PM",
    blurb:
      "Visit the Theta Xi bar and enjoy a selection of the finest mocktails, curated and prepared by our own brothers.",
  },
];

function Rush(props) {
  const [event, setEvent] = useState({});
  const [glowName, setGlowName] = useState(null);

  const elTitle = useRef(null);
  const typedTitle = useRef(null);

  useEffect(() => {
    const optionsTitle = {
      strings: [`FALL RUSH 22`],
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
    const myModal = new Modal("#eventModal");
    myModal.show();
  }

  function renderBrotherImages(day) {
    // transform to a BrotherImage component
    let renderedEvents = day.map((event, index) => {
      return (
        <Event
          onMouseOver={() => setGlowName(event.name)}
          onMouseOut={() => setGlowName(null)}
          name={event.name}
          src={event.src}
          onClick={() => {
            setEvent({ ...event });
            showModal();
          }}
          hasGlow={event.name === glowName}
          time={event.time}
        />
      );
    });
    return renderedEvents;
  }

  return (
    <>
      <EventModal
        event={event}
        open={event != null}
        setClose={() => setEvent({})}
      />
      <div className={styles.videoContainer}>
        <Link href="/">
          <a className={styles.Back}>BACK TO HOME</a>
        </Link>
        <div className={styles.RushTitle}>
          <span ref={elTitle} />
        </div>
        <div className={styles.RushPhone}>
          Need a ride? Have a question?
          <div className={styles.RushPhoneNumber}> CALL 978-809-5223</div>
        </div>
        <div className={styles.RushDay}>
          <div className={styles.RushDayTitle}> 9 | 3</div>
          <div className={styles.EventImagesContainer}>
            {renderBrotherImages(day1)}
          </div>
        </div>
        <div className={styles.RushDay}>
          <div className={styles.RushDayTitle}> 9 | 4</div>
          <div className={styles.EventImagesContainer}>
            {renderBrotherImages(day2)}
          </div>
        </div>
        <div className={styles.RushDay}>
          <div className={styles.RushDayTitle}> 9 | 5</div>
          <div className={styles.EventImagesContainer}>
            {renderBrotherImages(day3)}
          </div>
        </div>
        <div className={styles.RushDay}>
          <div className={styles.RushDayTitle}> 9 | 6</div>
          <div className={styles.EventImagesContainer}>
            {renderBrotherImages(day4)}
          </div>
        </div>
        <div className={styles.RushDay}>
          <div className={styles.RushDayTitle}> 9 | 7</div>
          <div className={styles.EventImagesContainer}>
            {renderBrotherImages(day5)}
          </div>
        </div>
        <div className={styles.RushDay}>
          <div className={styles.RushDayTitle}> 9 | 8</div>
          <div className={styles.EventImagesContainer}>
            {renderBrotherImages(day6)}
          </div>
        </div>
        <div className={styles.RushDay}>
          <div className={styles.RushDayTitle}> 9 | 9</div>
          <div className={styles.EventImagesContainer}>
            {renderBrotherImages(day7)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Rush;
