const Home = () => {
  const handleShare = () => {
    console.log("Shared successfully!");
  }
  const handlePrint = (name) => {
    console.log('Hey!' + name);
  }
    return (
      <div className="card mt-5">
        <div className="card-header bg-dark">
          <h3 className="text-light">Welcome to React!</h3>
        </div>
        <div className="card-body">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            voluptas esse vel minus cupiditate earum culpa quam inventore
            accusantium rem impedit cumque quos et, tenetur eum quaerat
            obcaecati consequuntur tempora.
          </p>
          <button className="btn btn-dark" onClick={handleShare}>
            Share &rarr;
          </button>
          {/* Anonymous function */}
          <button
            className="btn btn-primary float-right"
            onClick={() => {
              handlePrint('Ahmad')
            }}
          >
            Print
          </button>
        </div>
        <div className="card-footer">
          <p className="float-left">
            Reposted <b>12</b>
          </p>
          <p className="float-right">
            Replies <b>16</b>
          </p>
        </div>
      </div>
    );
}

export default Home;