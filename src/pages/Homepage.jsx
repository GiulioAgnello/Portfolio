import RotatingText from "../components/RotatingText.jsx";

export default function Homepage() {
  return (
    <>
      <div className="wrapperHome vh-100">
        <div className="container h-50 d-flex justify-content-center align-items-center">
          <div className="d-flex gap-2 justify-content-center align-items-center fs-1 sm:fs-4 md:fs-5">
            <p className="m-0">Giulio</p>
            <RotatingText
              texts={["Agnello", "Developer", "Design", "React", "JavaScript"]}
              mainClassName="divRoll px-2 sm:px-2 md:px-3  text-light overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg d-flex align-items-center"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </div>
    </>
  );
}
