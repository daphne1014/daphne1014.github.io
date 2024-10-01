import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import aboutImg from '/images/aboutMeProfile.jpg'
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [fadeIn, setFadeIn] = useState(false);
  const nameRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (fadeIn && nameRef?.current) {
      nameRef.current.classList.add('animate-fadein');
      nameRef.current.classList.remove('opacity-0');
      setTimeout(() => {
        if(positionRef?.current){
          positionRef.current.classList.add('animate-fadein');
          positionRef.current.classList.remove('opacity-0');
          setTimeout(() => {
            if (descriptionRef?.current) {
              descriptionRef.current.classList.add("animate-fadein");
              descriptionRef.current.classList.remove("opacity-0");
              setTimeout(() => {
                if (linkRef?.current) {
                  linkRef.current.classList.add("animate-fadein");
                  linkRef.current.classList.remove("opacity-0");
                }
              }, 500); // Adjust the delay between elements
            }
          }, 500);
        }
      }, 500);
    }
  }, [fadeIn]);

  
  return (
    <section className="container min-h-[calc(100vh-5rem)] pt-20 flex flex-col lg:flex-row-reverse items-center justify-center gap-5 lg:gap-20">
      <div className="flex justify-center lg:w-1/3">
        <img
          className="w-3/5 lg:w-full animate-fadein"
          src={aboutImg}
          alt="Picture of me looking sideways"
        ></img>
      </div>
      <div className="lg:w-2/3">
        <div className="flex flex-col h-full gap-2 text-gray-700">
          <h1
            ref={nameRef}
            className="text-2xl font-semibold opacity-0 lg:text-4xl"
          >
            Daphne Gisu Song
          </h1>
          <h2 ref={positionRef} className="text-lg opacity-0 lg:text-2xl">
            Full Stack Developer
          </h2>
          <p ref={descriptionRef} className="italic opacity-0">
            Full stack developer with a psychology background, specializing in
            the development of web applications. With two years of experience
            building and optimizing internal web apps for sales and inventory
            analysis, I aim to bring my expertise in creating efficient,
            user-friendly solutions to a forward-thinking team.
          </p>
          <a
            ref={linkRef}
            className="opacity-0 "
            href="/public/assets/pdfs/Resume.docx.pdf"
            download
          >
            <span className="flex gap-2">
              <ArrowDownTrayIcon className="w-6 h-6" />
              Resume
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
