import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Home() {
  const [firstTypingDone, setFirstTypingDone] = useState(false);
  const [secondTypingDone, setSecondTypingDone] = useState(false);
  const [thirdTypingDone, setThirdTypingDone] = useState(false);

  return (
    <section className="p-6 lg:px-8 bg-[url('/images/bgImg.jpg')] bg-no-repeat bg-cover h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col">
          <TypeAnimation
            sequence={[
              `Hello`,
              500,
              () => {
                setFirstTypingDone(true);
              },
            ]}
            style={{ fontSize: "5vw", color: "white", whiteSpace: "pre-line" }}
            repeat={0}
            cursor={false}
          />
          {firstTypingDone && (
            <TypeAnimation
              sequence={[
                `My name is Daphne Song,`,
                500,
                () => {
                  setSecondTypingDone(true);
                },
              ]}
              style={{
                fontSize: "3vw",
                color: "white",
                whiteSpace: "pre-line",
              }}
              repeat={0}
              cursor={false}
            />
          )}
          <div className="flex items-center gap-2">
          {secondTypingDone && (
            <TypeAnimation
              sequence={[
                `a `,
                500,
                () => {
                  setThirdTypingDone(true);
                },
              ]}
              style={{
                fontSize: "3vw",
                color: "white",
                whiteSpace: "pre-line",
              }}
              repeat={0}
              cursor={false}
            />
          )}
          {thirdTypingDone && (
            <TypeAnimation
              sequence={[`Software Engineer`, 500,]}
              style={{
                fontSize: "4vw",
                color:"#ffc107",
                whiteSpace: "pre-line",
              }}
              repeat={0}
              cursor={false}
            />
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
