function App() {
  return (
    <body className="w-full">
{/* Bar */}
    <div className="text-center text-black font-normal border-solid border-b-[2px] border-black p-5">
      <h1 className="text-2xl">cchompoo</h1>
    </div>

{/* Pic */}
    <div className="flex justify-center -pt-20 -mt-10">
      <img src="../hunter.png" alt="pic" className="py-20 w-auto h-[500px] rounded-lg"/>
    </div>
{/* Title */}
    <h1 className="text-center font-light text-2xl -pt-10 -mt-10"><span className="font-medium">Hello,</span><br></br>
    I am Software Engineering Student</h1>
{/* About */}
    <h1 className="title text-center text-3xl py-10 mt-10">ABOUT ME</h1>
    <p className="text-center text-base font-light">My name is Thitirat Rattanapan, you can call me Chompoo.<br></br>
    I am a 4th-year Software Engineering student at Thammasat University.<br></br> 
    <span className="pt-5 mt-5 block">Passionate about technology and eager to apply my skills in real-world projects,<br></br>
    I am dedicated to continuous learning and making a meaningful impact in the tech industry.</span></p>

{/* Project */}
    <div className="flex justify-center">
      {/* 1 */}
      <div className="max-w-sm rounded overflow-hidden">
        <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="text-center font-medium text-xl mb-2">Music Recommend</div>
        </div>
        <div className="px-6 -mt-2 pb-2">
          <span className="inline-block rounded-full px-3 py-1 text-sm font-base mr-2 mb-2 border-[1px] border-black">Python</span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-base mr-2 mb-2 border-[1px] border-black">Next.js</span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-base mr-2 mb-2 border-[1px] border-black">Tailwind CSS</span>
        </div>
      </div>
      {/* 2 */}

    </div>



{/* Contact */}
    <h1 className="title text-center text-3xl pt-10 mt-10 pb-5">CONTACT ME</h1>
    <p className="text-center text-base font-light leading-loose pb-10 mb-10">chompoo99075@gmail.com<br></br>
        098-072-9984<br></br>
        https://www.linkedin.com/in/thitirat-rattanapan-b757422a1/</p>

    </body>
  );
}

export default App;

