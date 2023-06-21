import ShimmerImage from "../assets/img/shimmer-image.png";

const ShimmerBody = () => {
  return (
    <>
      <div
        className="flex font-nunito justify-center p-6  bg-blue-900 my-4 py-16
      
      "
      >
        <input
          type="text"
          placeholder="Search here"
          className=" outline-none rounded-l-md h-12 text-base  pl-2 w-[25%]
          
          "
        />
        <button
          data-testid="search-btn"
          className="bg-red-100 px-4  rounded-r-md font-bold hover:bg-rose-200
          
          hover:scale-105 transition-all duration-200 cursor-pointer
          "
        >
          Search
        </button>
      </div>
      <div
        className="restaurant-list grid   grid-cols-1 md:grid-cols-2 md:w-[750px] lg:grid-cols-3 lg:w-[1000px] xl:grid-cols-5 xl:w-[1400px] justify-center gap-5 mx-auto w-[300px] "
        data-testid="shimmer"
      >
        {Array(30)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card  bg-gray-300 h-[244px] ">
              {/* <h1 className="text-slate-600 slattext">1</h1>
        <h1 className="text-slate-600">1</h1>
        <h1 className="text-slate-600">1</h1>
        <h1 className="text-slate-600">1</h1>
      <h1 className="text-slate-600">1</h1> */}
            </div>
          ))}
      </div>
    </>
  );
};

export default ShimmerBody;
