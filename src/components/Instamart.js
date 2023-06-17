import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible}) => {
  
  return (
    <div className="border border-black m-2 ">
      <h1 className="p-2 font-bold text-3xl">{title}</h1>

      {!isVisible ? (
        <button
          className="p-2 underline"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      ) : (
        <button
          className="p-2 underline"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      )}

      {isVisible && <p className="p-2 ">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("team")
  return (
    <>
      <Section
        isVisible={visibleSection === "about"}
        setIsVisible={() => setIsVisibleSection("about")}
        title={"About"}
        description={
          "idfoisjdofisjdoisjdofijsod sodijfosidjfosidjfosidjfoosidjfosidjfosidjfosidfjosi"
        }
      />
      <Section
        isVisible={visibleSection === "team"}
        setIsVisible={() => setIsVisibleSection("team")}
        title={"Team"}
        description={
          "idfoisjdofisjdoisjdofijsod sodijfosidjfosidjfosidjfoosidjfosidjfosidjfosidfjosi"
        }
      />
      <Section
        isVisible={visibleSection === "career"}
        setIsVisible={() => setIsVisibleSection("career")}
        title={"Careers"}
        description={
          "idfoisjdofisjdoisjdofijsod sodijfosidjfosidjfosidjfoosidjfosidjfosidjfosidfjosi"
        }
      />
    </>
  );
};

export default Instamart;
