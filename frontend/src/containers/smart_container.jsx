import React from 'react';
import { connect } from 'react-redux';

import { getAdminTabsAvailable, getAdminCounts } from '../actions/smart';
import Smart from '../components/Smart';

const PROJECT_ID = window.PROJECT_ID;

const SmartContainer = (props) => <Smart {...props} />;

const mapStateToProps = (state) => {
    return {
        adminTabsAvailable: state.smart.adminTabsAvailable,
        admin_counts: state.smart.admin_counts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAdminTabsAvailable: () => {
            dispatch(getAdminTabsAvailable(PROJECT_ID));
        },
        getAdminCounts: () => {
            dispatch(getAdminCounts(PROJECT_ID));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SmartContainer);
