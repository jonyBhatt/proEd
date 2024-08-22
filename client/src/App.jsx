import "./App.css";
import { Container, Badge, Button } from "@mantine/core";

// import bluePerson from "./assets/blue.jpg";
// import WhiteBg from "./assets/whitebg.jpg";
// import Education from "./assets/education.jpg";
function App() {
  return (
    <Container size={"lg"}>
      <div className="pt-3 lg:pt-24 pb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 md:gap-14 lg:gap-8">
          <div className="lg:col-start-1 lg:col-span-7 flex flex-col gap-4 items-start px-5">
            <Badge variant="light" color="green" size="xl" c={"white"}>
              Education
            </Badge>
            <div className="px-2 md:px-0">
              <h1 className="text-3xl md:text-5xl text-white  leading-10 md:leading-[4.5rem] md:tracking-normal font-bold mb-4">
                Cloud Based Lms <br className="hidden lg:block" /> Trusted By
                1000+
              </h1>
            </div>
            <p className="text-base 2xl:text-lg mb-5 px-2 md:px-0">
              Transforming Learning Experience with Our{" "}
              <br className="hidden lg:block" /> Cloud-Based Learning Management
              System
            </p>
            <Button variant="filled" color="green" >
              Get Start for free
            </Button>
          </div>
          {/** TODO */}
          <div className="lg:col-start-8 lg:col-span-5 ">
            <div className="flex flex-col items-center lg:items-end">
              <img
                src="/images/orange.jpg"
                alt="orang"
                loading="lazy"
                className="text-center w-[380px] h-[450px] rounded-2xl"
                style={{
                  color: "transparent",
                }}
              />
              <img
                src="/images/blue.jpg"
                alt="orang"
                loading="lazy"
                className="text-center w-[244px] h-[319px] absolute right-0 sm:right-[350px] bottom-0 md:right-[30px] lg:right-[150px] rounded-2xl "
                style={{
                  color: "transparent",
                }}
              />
              <img
                src="/images/whitebg.png"
                alt="orang"
                loading="lazy"
                className="text-center w-[451px] h-[404px] -z-10 absolute right-0  lg:top-32 md:right-0 lg:right-0 rounded-2xl animate-pulse"
                style={{
                  color: "transparent",
                  background: "transparent",
                }}
              />
              <img
                src="/images/education.png"
                alt="orang"
                loading="lazy"
                className="text-center w-[90px] h-[82px] z-[-1] absolute top-[300px]  right-0 lg:top-14 md:right-0 lg:right-0 rounded-2xl animate-spin "
                style={{
                  color: "transparent",
                  background: "transparent",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
