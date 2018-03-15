import * as React from "react";
import {FaIcon} from 'karcin-ui';

export default class FaIconExample extends React.Component {
    render() {
        return (
            <div>
                <FaIcon code="fa-html5"></FaIcon>
                <FaIcon code="fa-html5" size="fa-2x"></FaIcon>
                <FaIcon code="fa-html5" size="fa-3x"></FaIcon>
                <FaIcon code="fa-html5" size="fa-4x"></FaIcon>
                <FaIcon code="fa-html5" size="fa-5x"></FaIcon>
                <hr />
                <FaIcon code="fa-facebook-square" size="fa-2x"></FaIcon>
                <FaIcon code="fa-twitter-square" size="fa-2x"></FaIcon>
                <FaIcon code="fa-youtube-square" size="fa-2x"></FaIcon>
                <FaIcon code="fa-google-plus-square" size="fa-2x"></FaIcon>
                <FaIcon code="fa-instagram" size="fa-2x"></FaIcon>
                <hr />
                <FaIcon code="fa-spinner fa-spin" size="fa-2x"></FaIcon>
                <FaIcon code="fa-cog fa-spin" size="fa-2x"></FaIcon>
            </div>
        );
    }
}