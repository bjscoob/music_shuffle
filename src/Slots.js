import { createRef, Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import YoutubeEmbed from "./YoutubeEmbed";
import "./styles.css";

export default class Slots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rolling: false,
      vid1: "",
      vid2: "",
      vid3: "",
      title1: " - ",
      title2: " - ",
      title3: " - "
    };

    this.shuffleIndex = -1;

    // get ref of dic onn which elements will roll
    this.slotRef = [createRef(), createRef(), createRef()];
  }
  async shuffle() {
    this.shuffleIndex++;

    setTimeout(() => {
      this.setState({
        vid1: this.props.playlist[
          this.props.shuffledList[3 * this.shuffleIndex]
        ].snippet.resourceId.videoId,
        title1: this.props.playlist[
          this.props.shuffledList[3 * this.shuffleIndex]
        ].snippet.title
      });
    }, 2000);

    setTimeout(() => {
      this.setState({
        vid2: this.props.playlist[
          this.props.shuffledList[3 * this.shuffleIndex + 1]
        ].snippet.resourceId.videoId,
        title2: this.props.playlist[
          this.props.shuffledList[3 * this.shuffleIndex + 1]
        ].snippet.title
      });
    }, 4000);

    setTimeout(() => {
      this.setState({
        vid3: this.props.playlist[
          this.props.shuffledList[3 * this.shuffleIndex + 2]
        ].snippet.resourceId.videoId,
        title3: this.props.playlist[
          this.props.shuffledList[3 * this.shuffleIndex + 2]
        ].snippet.title
      });
    }, 6000);
  }
  // to trigger roolling and maintain state
  roll = async () => {
    this.shuffle();
    this.setState({
      rolling: true
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 7000);

    // looping through all 3 slots to start rolling
    this.slotRef.forEach((slot, i) => {
      // this will trigger rolling effect
      this.triggerSlotRotation(slot.current, i);
    });

    setTimeout(() => {
      this.slotRef.forEach((slot, i) => {
        // this will trigger rolling effect
        this.triggerSlotRotation(slot.current, i + 4);
      });
    }, 6000);
  };

  // this will create a rolling effect and return random selected option
  async triggerSlotRotation(ref, i) {
    ref.id = "slot" + i;
  }

  render() {
    return (
      <div className="SlotMachine">
        <Row>
          <Col xs>
            {" "}
            <div className="slot">
              <section>
                <div className="container" ref={this.slotRef[0]}>
                  <div>
                    <span>
                      <YoutubeEmbed embedId={this.state.vid1} />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                </div>
              </section>
              <h2>
                {this.state.title1.split("-")[0] + "\n"}{" "}
                <span class="greytext">{this.state.title1.split("-")[1]}</span>
              </h2>
            </div>
          </Col>
          <Col xs>
            {" "}
            <div className="slot">
              <section>
                <div className="container" ref={this.slotRef[1]}>
                  <div>
                    <span>
                      <YoutubeEmbed embedId={this.state.vid2} />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                </div>
              </section>
              <h2>
                {this.state.title2.split("-")[0] + "\n"}{" "}
                <span class="greytext">{this.state.title2.split("-")[1]}</span>
              </h2>
            </div>
          </Col>
          <Col xs>
            {" "}
            <div className="slot">
              <section>
                <div className="container" ref={this.slotRef[2]}>
                  <div>
                    <span>
                      <YoutubeEmbed embedId={this.state.vid3} />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                  <div>
                    <span>
                      <YoutubeEmbed />
                    </span>
                  </div>
                </div>
              </section>
              <h2>
                {this.state.title3.split("-")[0] + "\n"}{" "}
                <span class="greytext">{this.state.title3.split("-")[1]}</span>
              </h2>
            </div>
          </Col>
        </Row>
        <div
          className={!this.state.rolling ? "roll rolling" : "roll"}
          onClick={!this.state.rolling && this.roll}
          disabled={this.state.rolling}
          id="shuffleBtn"
        >
          {this.state.rolling ? "SHUFFLING..." : "SHUFFLE"}
        </div>
      </div>
    );
  }
}
