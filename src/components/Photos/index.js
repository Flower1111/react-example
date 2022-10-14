import { connect } from "react-redux";
import { Photos } from "./Photos";

const mapStateToProps = (state) => ({
    photos: state.photos,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);