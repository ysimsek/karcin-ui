import * as React from "react";
import {FaIcon} from 'karcin-ui';

export default class FaIconExample extends React.Component<any, any> {
    render() {
        return (
            <div>

                <hr/>
                <FaIcon code="fa-html5"></FaIcon>
                <FaIcon code="fa-html5" size="fa-2x"></FaIcon>
                <FaIcon code="fa-html5" size="fa-3x"></FaIcon>
                <FaIcon code="fa-html5" size="fa-4x"></FaIcon>
                <FaIcon code="fa-html5" size="fa-5x"></FaIcon>
                <FaIcon code="fa-html5" size="fa-6x"></FaIcon>
                <FaIcon code="fa-html5" size="fa-7x"></FaIcon>
                <FaIcon code="fa-html5" size="fa-8x"></FaIcon>
                <FaIcon code="fa-html5" size="fa-9x"></FaIcon>
                <hr />
                <FaIcon color={"primary"} code="fas fa-500px" size="fa-3x"></FaIcon>
                <FaIcon color={"secondary"} code="fa-facebook-square" size="fa-3x"></FaIcon>
                <FaIcon color={"success"} code="fa-twitter-square" size="fa-3x"></FaIcon>
                <FaIcon color={"info"} code="fab fa-amazon" size="fa-3x"></FaIcon>
                <FaIcon color={"warning"} code="fa-google-plus-square" size="fa-3x"></FaIcon>
                <FaIcon color={"danger"} code="fa-instagram" size="fa-3x"></FaIcon>
                <FaIcon color={"dark"} code="fas fa-american-sign-language-interpreting" size="fa-3x"></FaIcon>
                <FaIcon color={"light"} code="fas fa-angle-double-left" size="fa-3x"></FaIcon>
                <FaIcon code="fas fa-angle-double-right" size="fa-3x"></FaIcon>
                <FaIcon code="fab fa-angellist" size="fa-3x"></FaIcon>
                <hr />

                <FaIcon color={"primary"} code="fa-spinner fa-spin" size="fa-6x"></FaIcon>
                <FaIcon color={"success"} code="fa-cog fa-spin" size="fa-6x"></FaIcon>
            </div>
        );
    }
}
