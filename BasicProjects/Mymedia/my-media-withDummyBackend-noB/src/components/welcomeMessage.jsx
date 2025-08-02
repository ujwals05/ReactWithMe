const WelcomeMessage = ({ handleOnclick }) => {
  return (
    <>
      <h1
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center", 
          alignItems: "center", 
        }}
      >
        No post yet.
        
      </h1>
    </>
  );
};

export default WelcomeMessage;