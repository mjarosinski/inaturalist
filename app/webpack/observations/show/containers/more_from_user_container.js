import { connect } from "react-redux";
import MoreFromUser from "../components/more_from_user";
import { showNewObservation } from "../ducks/observation";

function mapStateToProps( state ) {
  return {
    observation: state.observation,
    otherObservations: state.otherObservations
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    showNewObservation: ( observation ) => { dispatch( showNewObservation( observation ) ); }
  };
}

const MoreFromUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( MoreFromUser );

export default MoreFromUserContainer;
