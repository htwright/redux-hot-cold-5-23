import React from 'react';
// import {connect} from 'react-redux';
import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component  {
    constructor(props) {
        super(props);
        // this.state = {
        //     showInfoModal: false
        // };
    }

    // toggleInfoModal() {
    //     this.setState({
    //         showInfoModal: !this.state.showInfoModal
    //     });
    // }

    render() {
        let infoModal;
        if (this.props.modalShowing) {
            infoModal = <InfoModal onInfo={this.props.onShowModal} />;
        }

        return (
            <header>
                <TopNav onInfo={this.props.onShowModal}
                    onNewGame={this.props.onNewGame} />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};
// export default connect()(Header);