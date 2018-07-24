import React, {Component} from 'react';
import {connect} from "react-redux";

export default function withAuth(ComponentToBeRendered) {
    class Authenticate extends Component {
        componentWillMount() {
            if (this.props.isAuthenticaded === false) {
                this.props.history.push("/signin");
            }
        }

        componentWillUpdate(nextProps) {
            if (nextProps.isAuthenticaded === false) {
                this.props.history.push("/signin");
            }
        }

        render() {
            return <ComponentToBeRendered {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticaded: state.currentUser.isAuthenticaded
        };
    }

    return connect(mapStateToProps)(Authenticate);

}
