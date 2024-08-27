import styles from "./Startups.module.css";

function Startups({ startups }) {
  return (
    <div className={styles["startup-container"]}>
      <div className={styles["sub-title"]}>Registered Startups</div>
      <div className={`d-flex flex-wrap  justify-content-center gap-4`}>
        {startups.map((startup) => (
          <Startup startup={startup} key={startup.id} />
        ))}
      </div>
    </div>
  );
}

function Startup({ startup }) {
  const name = {
    fontWeight: "500",
    color: "#008080",
  };
  const text = { color: "#008080" };
  let techString;
  if (startup.technology.length > 100) {
    techString = startup["technology"].slice(0, 100);
    techString = techString.concat("...");
  }
  let industryFocusString;
  if (startup["Industry_Focus"].length > 100) {
    industryFocusString = startup["Industry_Focus"].slice(0, 100);
    industryFocusString = techString.concat("...");
  }
  const id = {
    id: startup._id,
  };

  // async function handleClick() {
  //   // Send a POST request to add a new user

  //   try {
  //     const res = await fetch("http://localhost:9000/ids", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(id),
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   } catch {
  //     alert("error");
  //   }
  // }

  return (
    <div className={`card ${styles.cards}`}>
      <div className="card-body" style={{ position: "relative" }}>
        <h5
          className="card-title text-center"
          style={{ color: "#008080", fontWeight: "600", fontSize: "24px" }}
        >
          {startup.name}
        </h5>
        <p className="card-text">
          <span style={name}>Technology: </span>
          <span style={text}>{techString || startup.technology}</span>
        </p>
        <p className="card-text">
          <span style={name}>Industry Focus: </span>
          <span style={text}>
            {industryFocusString || startup["Industry_Focus"]}
          </span>
        </p>
        <p className="card-text">
          <span style={name}>Eligibility Startups: </span>
          <span style={text}>{startup["Startup_eligibility_criteria"]}</span>
        </p>
      </div>

      {/* onClick={handleClick} */}

      <button className={styles.button}>View Profile</button>
    </div>
  );
}

export default Startups;
