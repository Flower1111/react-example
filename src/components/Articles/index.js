import { connect } from "react-redux";
import { Articles } from "./Articles";

const mapStateToProps = (state) => ({
    articles: state.articles,
    users: state.users,
    photos: state.photos,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);