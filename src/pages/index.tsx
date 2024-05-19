import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRating = (value: number) => {
    setRating(value);
    setIsRated(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Interactive Rating Component</title>
        <meta name="description" content="interactive-rating-component" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="bg-very-dark-blue flex min-h-screen flex-col items-center justify-center font-sans">
        {/* Card Container */}
        <form
          onSubmit={handleSubmit}
          className="bg-dark-blue flex w-[90vw] flex-col items-center justify-between rounded-2xl p-8 md:max-w-[550px] md:rounded-3xl"
        >
          {!isSubmitted ? (
            // Rating Card
            <div>
              <div className="flex h-14 w-14 flex-row items-center justify-center rounded-full bg-gray-700/50">
                <Image
                  className="h-5 w-5"
                  src="/images/icon-star.svg"
                  width={24}
                  height={24}
                  alt="Star-Icon"
                />
              </div>
              <h2 className="font-mediumg my-8 text-4xl tracking-wide text-white">
                How did we do?
              </h2>
              <p className="text-light-grey mb-10 text-xl leading-8">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              {/* Rating Stars */}
              <div
                className="my-7 flex flex-row justify-between"
                onMouseLeave={() => setHoverRating(0)}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    type="button"
                    className={`h-16 w-16 flex-row items-center justify-center rounded-full text-2xl font-medium hover:bg-orange-500 ${value <= hoverRating ? "bg-orange text-light-grey text-black" : isRated && value <= rating ? "text-light-grey bg-white text-black" : "text-light-grey bg-gray-700/50"}`}
                    key={value}
                    onMouseEnter={() => setHoverRating(value)}
                    onClick={() => {
                      handleRating(value);
                      setIsRated(true);
                    }}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <button
                className="bg-orange disabled:text-light-grey my-2 h-16 w-full flex-row items-center justify-center rounded-full text-xl font-medium tracking-widest hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:bg-gray-700/50"
                onClick={() => setIsSubmitted(true)}
                disabled={!isRated}
              >
                SUBMIT
              </button>
            </div>
          ) : (
            // Thank You Card
            <div className="flex flex-col items-center gap-8 px-4 py-6">
              <Image
                className="w-52"
                src="images/illustration-thank-you.svg"
                height={100}
                width={100}
                alt="Thank-You-Illustration"
              />
              <div className="text-orange rounded-full bg-gray-700/50 px-5 py-3 font-medium tracking-wider">
                <p>You selected {rating} out of 5</p>
              </div>
              <h2 className="mt-2 text-4xl font-medium tracking-wider text-white">
                Thank you!
              </h2>
              <p className="text-light-grey text-center text-xl">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don&apos;t hesitate to get in touch!
              </p>
            </div>
          )}
        </form>
      </main>
    </>
  );
}
