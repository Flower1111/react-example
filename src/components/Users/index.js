import { connect } from "react-redux";
import { Users } from "./Users";

const mapStateToProps = (state) => ({
    users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);