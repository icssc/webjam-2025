export function About() {
  return (
    <div className="bg-gradient-to-b from-[#032b63] to-[#000237] justify-center flex">
      <div className="pt-32 pb-32 flex w-[80%] flex-col items-center justify-center space-y-8 text-center text-2xl lg:max-w-[60%]">
        <h1 className="text-7xl font-semibold">About WebJam</h1>

        <div className="space-y-4">
          <p>
            WebJam is a week-long event where students come together to create
            fully functional web applications. Whether you&apos;ve never heard
            of web applications or built many, WebJam is here to give you a
            platform to learn, build, and create!
          </p>
          <p>
            Over the past 4 years, WebJam has focused on encouraging beginners
            and people who are curious about web technologies — from frontend to
            backend! Our goal is to provide learning and networking
            opportunities for our community of developers, especially ones that
            come from underrepresented backgrounds in the tech space.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
