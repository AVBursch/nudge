import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NudgeUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nudgePositionXcheckboxValue = this.props.nudgePositionXcheckboxValue,
            nudgePositionYcheckboxValue = this.props.nudgePositionYcheckboxValue,
            nudgePositionZcheckboxValue = this.props.nudgePositionZcheckboxValue,
            nudgePositionTextboxValue = this.props.nudgeRotationTextboxValue,
            nudgeRotationXcheckboxValue = this.props.nudgeRotationXcheckboxValue,
            nudgeRotationYcheckboxValue = this.props.nudgeRotationYcheckboxValue,
            nudgeRotationZcheckboxValue = this.props.nudgeRotationZcheckboxValue,
            nudgeRotationTextboxValue = this.props.nudgeRotationTextboxValue,
            nudgeScaleXcheckboxValue = this.props.nudgeScaleXcheckboxValue,
            nudgeScaleYcheckboxValue = this.props.nudgeScaleYcheckboxValue,
            nudgeScaleZcheckboxValue = this.props.nudgeScaleZcheckboxValue,
            nudgeScaleTextboxValue = this.props.nudgeScaleTextboxValue,
            randomCheckboxValue = this.props.randomCheckboxValue,
        }
        this.nudgePositionXcheckboxValueRef = React.createRef();
        this.nudgePositionYcheckboxValueRef = React.createRef();
        this.nudgePositionZcheckboxValueRef = React.createRef();
        this.nudgePositionTextboxValueRef = React.createRef();
        this.nudgeRotationXcheckboxValue = React.createRef();
        this.nudgeRotationYcheckboxValue = React.createRef();
        this.nudgeRotationZcheckboxValue = React.createRef();
        this.nudgeRotationTextboxValueRef = React.createRef();
        this.nudgeScaleXcheckboxValue = React.createRef();
        this.nudgeScaleYcheckboxValue = React.createRef();
        this.nudgeScaleZcheckboxValue = React.createRef();
        this.nudgeScaleTextboxValueRef = React.createRef();
    }

    render() {
        return (<React.Fragment>
            <body bgcolor="F0F0F0">

                <title> Nudge </title>

                <ul style="padding-top: 0px; margin-top:-1px; padding-right: 5px; padding-bottom: 0px; padding-left: 5px;">
                    <li style="display: block; padding-bottom: 5px;">
                        <label style="display: inline-block; padding-bottom: 9px;">Position(units):	</label>
                        <input
                            id="position_input"
                            title="Position in units"
                            onchange="handlePositionValueTextUpdate(value);"
                            type="number"
                            value="25"
                            style="width: 7ex; float:right; "
                            maxlength="36"
                            align="right" />
                        <br></br>
                        <label><input
                            ref={this.props.nudgePositionXcheckboxValueRef}
                            type="checkbox"
                            id="position_x"
                            checked={this.props.nudgePositionXcheckboxValue}
                            onChange={(e) => {
                                const value = !(e.target.value);

                                this.nudgePositionXcheckboxValueRef.current.value = value;
                                this.props.handlePositionXCheckboxClicked(value);
                            }}
                        /> X</label>
                        <label><input
                            ref={this.props.nudgePositionYcheckboxValueRef}
                            type="checkbox"
                            id="position_y"
                            checked={this.props.nudgePositionYcheckboxValue}
                            onChange={(e) => {
                                const value = !(e.target.value);

                                this.nudgePositionYcheckboxValueRef.current.value = value;
                                this.props.handlePositionYCheckboxClicked(value);
                            }}
                        /> Y</label>
                        <label><input
                            ref={this.props.nudgePositionZcheckboxValueRef}
                            type="checkbox"
                            id="position_z"
                            checked={this.props.nudgePositionZcheckboxValue}
                            onChange={(e) => {
                                const value = !(e.target.value);

                                this.nudgePositionZcheckboxValueRef.current.value = value;
                                this.props.handlePositionZCheckboxClicked(value);
                            }}
                        /> Z</label>
                    </li>

                    <li style="display: block; padding-bottom: 5px;">
                        <label style="display: inline-block; padding-bottom: 10px;">Rotation(%):</label>
                        <input
                            id="rotation_input"
                            title="Rotation in percentage"
                            onchange="handleRotationValueTextUpdate(value);"
                            type="number"
                            value="3"
                            style="width: 7ex; float:right;"
                            maxlength="36"
                            align="right" />
                        <br></br>
                        <label><input
                            ref={this.props.nudgeRotationXcheckboxValueRef}
                            type="checkbox"
                            id="position_x"
                            checked={this.props.nudgeRotationXcheckboxValue}
                            onChange={(e) => {
                                const value = !(e.target.value);

                                this.nudgeRotationXcheckboxValueRef.current.value = value;
                                this.props.handleRotationXCheckboxClicked(value);
                            }}
                        /> X</label>
                        <label><input
                            ref={this.props.nudgeRotationYcheckboxValueRef}
                            type="checkbox"
                            id="position_y"
                            checked={this.props.nudgeRotationYcheckboxValue}
                            onChange={(e) => {
                                const value = !(e.target.value);

                                this.nudgeRotationYcheckboxValueRef.current.value = value;
                                this.props.handleRotationYCheckboxClicked(value);
                            }}
                        /> Y</label>
                        <label><input
                            ref={this.props.nudgeRotationZcheckboxValueRef}
                            type="checkbox"
                            id="position_z"
                            checked={this.props.nudgeRotationZcheckboxValue}
                            onChange={(e) => {
                                const value = !(e.target.value);

                                this.nudgeRotationZcheckboxValueRef.current.value = value;
                                this.props.handleRotationZCheckboxClicked(value);
                            }}
                        /> Z</label>
                    </li>

                    <li style="display: block; padding-bottom: 6px;">
                        <label style="display: inline-block; padding-bottom: 9px;">Scale(%):</label>
                        <input
                            id="scale_input"
                            title="Scale in percentage"
                            onchange="handleScaleValueTextUpdate(value);"
                            type="number"
                            value="5"
                            style="width: 7ex; float:right;"
                            maxlength="36"
                            align="right" />
                        <br></br>
                        <label><input
                            ref={this.props.nudgeScaleXcheckboxValueRef}
                            type="checkbox"
                            id="position_x"
                            checked={this.props.nudgeScaleXcheckboxValue}
                            onChange={(e) => {
                                const value = !(e.target.value);

                                this.nudgeScaleXcheckboxValueRef.current.value = value;
                                this.props.handleScaleXCheckboxClicked(value);
                            }}
                        /> X</label>
                        <label><input
                            ref={this.props.nudgeScaleYcheckboxValueRef}
                            type="checkbox"
                            id="position_y"
                            checked={this.props.nudgeScaleYcheckboxValue}
                            onChange={(e) => {
                                const value = !(e.target.value);

                                this.nudgeScaleYcheckboxValueRef.current.value = value;
                                this.props.handleScaleYCheckboxClicked(value);
                            }}
                        /> Y</label>
                        <label><input
                            ref={this.props.nudgeScaleZcheckboxValueRef}
                            type="checkbox"
                            id="position_z"
                            checked={this.props.nudgeScaleZcheckboxValue}
                            onChange={(e) => {
                                const value = !(e.target.value);

                                this.nudgeScaleZcheckboxValueRef.current.value = value;
                                this.props.handleScaleZCheckboxClicked(value);
                            }}
                        /> Z</label>
                    </li>

                    <li style="display: block; padding-bottom: 5px;">
                        <label><input type="checkbox" id="randomize" onClick="handleRandomButtonClicked();" /> Random</label>
                    </li>

                    <li style="display: block;">
                        <button id="ok" onclick="handleSaveButonClick();"><small>Save</small></button>
                        <button id="cancel" onclick="handleCancelButtonClick();"><small>Cancel</small></button>
                        <button id="apply" onclick="handleApplyButtonClick();"><small>Apply</small></button>
                        <button id="about" onclick="handleVersionButtonClick();"><small>Ver.</small></button>
                    </li>

                </ul>
            </body>

        </React.Fragment>)
    }
}

export default NudgeUI;