// app/page.js

import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/images/profile.jpg";
import heroPic from "../public/images/index-hero.jpg";

const Index = () => {
  console.log("?????");
  return (
    <>
      <div className="hero">
        <Image src={heroPic} alt="だれだよ" priority={true} />
        <div className="textContainer">
          <h1>こんにちは</h1>
          <h3>JavaScript Developer</h3>
        </div>
      </div>
      <div className="container">
        <div className="profile">
          <div>
            <h2>JS Nerd</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Image src={profilePic} alt="profile" priority={true} />
          </div>
        </div>
        <div>
          <h2>Skills</h2>
          <div>
            <div>
              <img src="/images/javascript.svg" alt="javascript" />
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link href="/contact">Contactへ</Link>
      </div>
    </>
  );
};

export default Index;
