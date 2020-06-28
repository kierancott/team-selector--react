import { connect } from "react-redux";

import Player from "../components/Player";

import { patchPlayer, deletePlayer, getPlayers } from "../data/actions/api";

const mapDispatchToProps = (dispatch, { player }) => {
  return {
    onLoad: () => dispatch(getPlayers()),
    onUpdate: (player_name, skill) => dispatch(patchPlayer(player.id, player_name, skill)),
    onDelete: () => dispatch(deletePlayer(player.id)),
  };
};

export default connect(null, mapDispatchToProps)(Player); 