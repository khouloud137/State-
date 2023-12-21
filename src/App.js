
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Persone from "./component/Persone";
import "./App.css";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Wael Al-Dahdouh",
      bio: "JOURNALISTES AFRICAINS, LES NOUVEAUX RÉSISTANTS – Depuis le début de la guerre entre Israël et le Hamas, Wael Al-Dahdouh, journaliste vedette d'Al Jazeera et chef du bureau de la chaîne qatarie à Gaza, relate quotidiennement la violence inouïe infligée à la population palestinienne par l'État hébreu",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Wael_Al_Dahdouh.png",
      profession: "Journaliste",
    },
    shows: false,
  };
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };
  render() {
    return (
      <>
        {this.state.shows && <Persone Person={this.state.Person} />}
        <div className="btn">
          <button onClick={this.toggleShow}>toggle me!</button>
        </div>
      </>
    );
  }
}
export default App;
