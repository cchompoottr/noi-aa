import React, { useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function App() {
  useEffect(() => {
    const target = "#scramble";
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power1.out" } });

    // กำหนดการอนิเมตต์
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
            // ตั้งค่าการหน่วงเวลาเพื่อเริ่มข้อความใหม่
            setTimeout(() => {
              tl.restart(); // เริ่มการอนิเมตต์ใหม่
            }, 2000); // ตั้งเวลาหน่วงเป็น 2 วินาที (2000 มิลลิวินาที)
          }
        }
      );
    };

    // เริ่มการอนิเมตต์
    animateText();

    // รีเซ็ตการอนิเมตต์เมื่อเมาส์มาที่องค์ประกอบ
    const element = document.querySelector(target);
    if (element) {
      element.addEventListener('mouseover', () => {
        tl.restart(); // เริ่มการอนิเมตต์ใหม่
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

      {/* Pic */}
      <div className="flex justify-center -pt-20 -mt-10">
        <img src="/hunter.png" alt="pic" className="py-20 w-auto h-[500px] rounded-lg"/>
      </div>

      {/* Title */}
      <h1 id="scramble" className="text-center font-light text-2xl -pt-10 -mt-10">
        <span className="font-medium">Hello,</span><br />
        I am a Software Engineering Student
      </h1>

      {/* About */}
      <h1 className="title text-center text-3xl py-10 mt-10">ABOUT ME</h1>
      <p className="text-center text-base font-light">
        My name is Thitirat Rattanapan, you can call me Chompoo.<br />
        I am a 4th-year Software Engineering student at Thammasat University.<br />
        <span className="pt-5 mt-5 block">
          Passionate about technology and eager to apply my skills in real-world projects,<br />
          I am dedicated to continuous learning and making a meaningful impact in the tech industry.
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
      <p className="text-center text-base font-light leading-loose pb-10 mb-10">
        chompoo99075@gmail.com<br />
        098-072-9984<br />
        <a href="https://www.linkedin.com/in/thitirat-rattanapan-b757422a1/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </p>
    </div>
  );
}

export default App;
