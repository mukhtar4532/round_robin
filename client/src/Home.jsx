const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#F97B22] border-2 border-black rounded-sm text-[#FEE8B0] text-center my-8 sm:mt-11 mx-15 sm:mx-60 py-4 px-5">
        <h1
          className="text-3xl sm:text-6xl font-bold"
          style={{
            WebkitTextStroke: "2px #000",
            textShadow: "0 6px 0 #000",
          }}
        >
          R O U N D - R O B I N - C O U P O N
        </h1>
      </div>

      <div className="bg-[#FEE8B0] border-2 border-black rounded-sm text-[#F97B22] text-center mt-20 sm:mt-30 mx-15 sm:mx-60 py-4 px-5">
        <button
          className="text-2xl font-bold"
          style={{
            WebkitTextStroke: "1px #000",
            textShadow: "0 2px 0 #000",
          }}
        >
          Generate Coupon
        </button>
      </div>

      <div className="bg-[#FEE8B0] border-2 border-black rounded-sm text-[#F97B22]  text-center mt-18 sm:mt-25 py-4 px-5">
        <p>
          Congratulations !!! coupon created successfully,
          <br />
          Here is your coupon: Your Coupon
        </p>
      </div>
    </div>
  );
};

export default Home;
