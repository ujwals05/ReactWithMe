const WelcomeMessage = ({ handleOnclick }) => {
  return (
    <>
      <h1
        style={{
          height: "100vh", // Full height of the viewport
          display: "flex", // Use flexbox
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        No post yet.
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleOnclick}
        >
          GET POSTS
        </button>
      </h1>
    </>
  );
};

export default WelcomeMessage;