import { connect } from "react-redux";
import { Articles } from "./Articles";

const mapStateToProps = (state) => ({
    articles: state.articles,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);