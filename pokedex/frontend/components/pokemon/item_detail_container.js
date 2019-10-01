import { connect } from 'react-redux';
import itemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
    const itemID = parseInt(ownProps.match.params.itemID);
    let item = state.entities.items[itemID];
    return {
        item
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const itemID = parseInt(ownProps.match.params.itemID);
    //requestSingleItem???
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(itemDetail);