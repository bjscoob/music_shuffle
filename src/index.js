import React from "react";
import ReactDOM from "react-dom";
import ReactLoading from "react-loading";
import YoutubeEmbed from "./YoutubeEmbed";
import Slots from "./Slots";
import "./styles.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      shuffleList: [],
      connected: "Not Connected",
      loading: false,
      firstloaded: "block"
    };
    this.playlist = [];
    this.shuffledList = [];
    this.shuffleIndex = -1;
  }
  async getPlaylist() {
    this.setState({
      loading: true
    });
    // Simple GET request using fetch
    var npt = "";
    var j = "";
    var pagesAvailable = true;
    var i = 0;
    while (pagesAvailable) {
      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/playlistItems?" +
          npt +
          "part=snippet%2CcontentDetails&maxResults=50&playlistId=PL6BUeaiW2UeIBWvEgYHSoECUyC-Qm1bKA&key=AIzaSyCo53bQZ8CNuzgai3-ZB83eh09548lszB8"
      );
      const data = await response.json();
      console.log("JSON response: ");
      console.log(data);
      console.log("Page Token: " + data.nextPageToken);
      j = data.nextPageToken;
      npt = "pageToken=" + j + "&";
      if (data.items !== undefined) {
        data.items.map((video) => this.playlist.push(video));
      }
      if (j === undefined) {
        pagesAvailable = false;
      }
      i++;
    }
    console.log("API Calls: " + i + "\nPlaylist: ");
    console.log(this.playlist);
    let l = Array.from(Array(this.playlist.length).keys());
    this.shuffledList = l.sort(() => Math.random() - 0.5);
    for (var x = 0; x < 10; x++) {
      this.shuffledList = this.shuffledList.sort(() => Math.random() - 0.5);
    }
    console.log("Shuffle List: " + this.shuffledList);
    this.setState({
      playlist: this.playlist,
      shuffleList: this.shuffledList,
      connected: "Connected"
    });
    setTimeout(() => {
      this.setState({ firstloaded: "none" });
    }, 10000);
  }
  async handleChange(event) {
    if (event.target.value == "8888") {
      this.getPlaylist();
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.connected == "Connected" ? (
          <div>
            <div id="curtainCont" style={{ display: this.state.firstloaded }}>
              <div id="curtain1">
                <img
                  id="r1"
                  src="https://jax-apps.com/images/r.svg"
                  width="56.43"
                  height="43"
                />
              </div>
              <div id="curtain2">
                <img
                  id="r2"
                  src="https://jax-apps.com/images/r.svg"
                  width="56.43"
                  height="43"
                />
              </div>
            </div>
            <div className="wheel_cont"></div>
            <div className="record_cont"></div>
            <div class="black_backdrop">
              <div className="mainUI">
                <br />
                <br />
                <div id="needle"></div>
                <Slots
                  playlist={this.state.playlist}
                  shuffledList={this.state.shuffleList}
                />
              </div>
            </div>
          </div>
        ) : (
          <div id="loadScreen">
            <div
              style={{
                margin: "auto",
                width: "75px",
                visibility: this.state.loading ? "visible" : "hidden"
              }}
            >
              <ReactLoading
                type={"spin"}
                color={"#f0d26c"}
                height={75}
                width={75}
              />
            </div>
            <input
              style={{ visibility: this.state.loading ? "hidden" : "visible" }}
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange.bind(this)}
            />
          </div>
        )}
      </div>
    );
  }
  async componentDidMount() {}
}

ReactDOM.render(<App />, document.getElementById("root"));
