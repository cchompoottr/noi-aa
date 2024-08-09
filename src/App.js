import React, { useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { motion } from "framer-motion";
import move from "lodash-move";

gsap.registerPlugin(TextPlugin);

const CARD_IMAGES = [
  "/pic/1.png",
  "/pic/2.png",
  "/pic/3.png"
];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const CardStack = () => {
  const [cards, setCards] = React.useState(CARD_IMAGES);

  const moveToEnd = from => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((image, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={image}
              style={{
                ...cardStyle,
                backgroundImage: `url(${image})`,
                cursor: canDrag ? "grab" : "auto",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: CARD_IMAGES.length - index
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0
              }}
              onDragEnd={() => moveToEnd(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};

const wrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "70vh"
};

const cardWrapStyle = {
  position: "relative",
  width: "350px",
  height: "350px",

};

const cardStyle = {
  position: "absolute",
  width: "350px",
  height: "350px",
  borderRadius: "50px",
  transformOrigin: "top center",
  listStyle: "none",
  backgroundColor: "transparent", // Ensure backgroundColor does not override the image
  boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px"
};

function App() {
  useEffect(() => {
    const target = "#scramble";
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power1.out" } });

    // Animation setup
    const animateText = () => {
      tl.fromTo(target, 
        {
          text: { value: "" }
        }, 
        {
          text: { 
            value: "Hello,<br>I am a Software Engineering Student", 
            delimiter: "", 
            newClass: "highlight"
          },
          stagger: 0.1,
          onComplete: () => {
            // Set timeout to restart animation
            setTimeout(() => {
              tl.restart(); // Restart the animation
            }, 2000); // Delay of 2 seconds (2000 milliseconds)
          }
        }
      );
    };

    // Start the animation
    animateText();

    // Reset animation on mouseover
    const element = document.querySelector(target);
    if (element) {
      element.addEventListener('mouseover', () => {
        tl.restart(); // Restart the animation
      });
    }

    // Cleanup
    return () => {
      if (element) {
        element.removeEventListener('mouseover', () => {
          tl.restart();
        });
      }
    };
  }, []);

  return (
    <div className="body w-full">
      {/* Bar */}
      <div className="text-center text-black font-normal border-solid border-b-[2px] border-black p-5">
        <h1 className="text-2xl">cchompoo</h1>
      </div>

      {/* Card Stack */}
      <CardStack />

      {/* Title */}
      <h1 id="scramble" className="text-center font-light text-3xl -pt-10 -mt-10 pb-20 mb-20">
        <span className="font-medium">Hello,</span><br />
        I am a Software Engineering Student
      </h1>

      {/* About */}
      <h1 className="title text-center text-3xl py-10 mt-10">ABOUT ME</h1>
      <p className="text-center text-base font-light">
        My name is Thitirat Rattanapan, you can call me Chompoo.<br />
        I am a 4th-year Software Engineering student at Thammasat University.<br />
        <span className="pt-5 mt-5 block">
          Passionate about both the design and development of digital products and data science.<br />
          Eager to expand my skill set and embrace new technologies,<br />
          I am committed to continuous learning and professional growth.
        </span>
      </p>

      {/* Project */}
      <div className="flex justify-center flex-wrap mt-10">
        {/* 1 */}
        <div className="max-w-sm rounded overflow-hidden mt-10 p-5">
          <div style={{
              position: 'relative',
              width: '325px',
              height: '0',
              paddingTop: '56.2500%',
              paddingBottom: '0',
              boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
              marginTop: '1.6em',
              marginBottom: '0.9em',
              overflow: 'hidden',
              borderRadius: '8px',
              willChange: 'transform'
            }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                border: 'none',
                padding: '0',
                margin: '0'
              }}
              src="https://www.canva.com/design/DAGNVtzyuDU/ncwndo1dEju9kBKjOFE1jg/view?embed"
              allowFullScreen
              title="Canva Design"
            ></iframe>
          </div>
          <div className="text-center font-medium text-xl mt-4">Music Recommend</div>
          <div className="text-center mt-2">
            <span className="inline-block rounded-full px-3 py-1 text-sm font-base mr-2 mb-2 border-[1px] border-black">Python</span>
            <span className="inline-block rounded-full px-3 py-1 text-sm font-base mr-2 mb-2 border-[1px] border-black">Next.js</span>
            <span className="inline-block rounded-full px-3 py-1 text-sm font-base mr-2 mb-2 border-[1px] border-black">Tailwind CSS</span>
          </div>
        </div>

        {/* 2 */}
        <div className="max-w-sm rounded overflow-hidden mt-10 p-5">
          <div style={{
              position: 'relative',
              width: '325px',
              height: '0',
              paddingTop: '56.2500%',
              paddingBottom: '0',
              boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
              marginTop: '1.6em',
              marginBottom: '0.9em',
              overflow: 'hidden',
              borderRadius: '8px',
              willChange: 'transform'
            }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                border: 'none',
                padding: '0',
                margin: '0'
              }}
              src="https://www.canva.com/design/DAGNVhoetI8/kyseP4AIBcLhWzodot0qtg/view?embed"
              allowFullScreen
              title="Canva Design"
            ></iframe>
          </div>
          <div className="text-center font-medium text-xl mt-4">Gallery Craft</div>
          <div className="text-center mt-2">
            <span className="inline-block rounded-full px-3 py-1 text-sm font-base mr-2 mb-2 border-[1px] border-black">React</span>
            <span className="inline-block rounded-full px-3 py-1 text-sm font-base mr-2 mb-2 border-[1px] border-black">Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Contact */}
      <h1 className="title text-center text-3xl pt-10 mt-10 pb-5">CONTACT ME</h1>
      <div className='flex justify-center flex-wrap gap-4 mb-10'>
        <a href="mailto:chompoo99075@gmail.com" aria-label="Email">
          <img src='../contact/mail.png' alt='mail' className='w-[50px]'/>
        </a>
        <a href="https://www.linkedin.com/in/thitirat-rattanapan-b757422a1/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <img src='../contact/linkedin.png' alt='linkedin' className='w-[50px]'/>
        </a>
        <a href="https://github.com/cchompoottr" aria-label="gitHub" target="_blank" rel="noopener noreferrer">
          <img src='../contact/github.png' alt='github' className='w-[60px] -mt-1'/>
        </a>
      </div>
      <p className="text-center text-lg font-medium leading-loose mb-2">
        <a href="#top" className="text-black hover:text-slate-500">
          [Back to Top]
        </a>
      </p>
      <p className="text-center text-sm font-light leading-loose pb-10 mb-10">
        cchompoo@aug2024
      </p>

    </div>
  );
}

export default App;
