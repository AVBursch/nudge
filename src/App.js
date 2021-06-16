import logo from './logo.svg';
import './App.css';
import React from 'react';
import { NudgeUI } from './components/Nudge_ui';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      nudgePositionXcheckboxValue: true,
      nudgePositionYcheckboxValue: false,
      nudgePositionZcheckboxValue: false,
      nudgePositionTextboxValue: '',
      nudgeRotationXcheckboxValue: true,
      nudgeRotationYcheckboxValue: false,
      nudgeRotationZcheckboxValue: false,
      nudgeRotationTextboxValue: '',
      nudgeScaleXcheckboxValue: true,
      nudgeScaleYcheckboxValue: false,
      nudgeScaleZcheckboxValue: false,
      nudgeScaleTextboxValue: '',
      randomCheckboxValue: false,


    }

    window["debug"] = true;
  }

  render() {
    return (<React.Fragment>
      <NudgeUI
        nudgePositionXcheckboxValue={this.state.nudgePositionXcheckboxValue}
        nudgePositionYcheckboxValue={this.state.nudgePositionYcheckboxValue}
        nudgePositionZcheckboxValue={this.state.nudgePositionZcheckboxValue}
        nudgePositionTextboxvalue={this.state.nudgeRotationTextboxValue}
        nudgeRotationXcheckboxValue={this.state.nudgeRotationXcheckboxValue}
        nudgeRotationYcheckboxValue={this.state.nudgeRotationYcheckboxValue}
        nudgeRotationZcheckboxValue={this.state.nudgeRotationZcheckboxValue}
        nudgeRotationTextboxValue={this.state.nudgeRotationTextboxValue}
        nudgeScaleXcheckboxValue={this.state.nudgeScaleXcheckboxValue}
        nudgeScaleYcheckboxValue={this.state.nudgeScaleYcheckboxValue}
        nudgeScaleZcheckboxValue={this.state.nudgeScaleZcheckboxValue}
        nudgeScaleTextboxValue={this.state.nudgeScaleTextboxValue}
        randomCheckboxValue={this.state.randomCheckboxValue}

        handleSaveButtonClick={this.handleSaveButtonClick}
        handleCancelButtonClick={this.handleCancelButtonClick}
        handleApplyButtonClick={this.handleApplyButtonClick}
        handleVersionButtonClick={this.handleVersionButtonClick}
        handlePositionXCheckboxClicked={this.handleScaleXCheckboxClicked}
        handlePositionYCheckboxClicked={this.handleScaleYCheckboxClicked}
        handlePositionZCheckboxClicked={this.handleScaleZCheckboxClicked}
        handlePositionValueTextUpdate={this.handlePositionValueTextUpdate}
        handleRotationXCheckboxClicked={this.handleRotationXCheckboxClicked}
        handleRotationYCheckboxClicked={this.handleRotationYCheckboxClicked}
        handleRotationZCheckboxClicked={this.handleRotationZCheckboxClicked}
        handleRotationValueTextUpdate={this.handlePositionValueTextUpdate}
        handleScaleXCheckboxClicked={this.handleScaleXCheckboxClicked}
        handleScaleYCheckboxClicked={this.handleScaleYCheckboxClicked}
        handleScaleZCheckboxClicked={this.handleScaleZCheckboxClicked}
        handleScaleValueTextUpdate={this.handleScaleValueTextUpdate}
        handleRandomButtonClicked={this.handleVersionButtonClick}
      />

    </React.Fragment>)
  }

  handleSaveButtonClick = () => {
    if (window["debug"] === false)
      window.location = 'skp:on_ok@';
  }

  handleCancelButtonClick = () => {
    if (window["debug"] === false)
      window.location = 'skp:on_cancel';
  }

  handleApplyButtonClick = () => {
    if (window["debug"] === false)
      window.location = 'skp:on_apply';
  }

  handleVersionButtonClick = () => {
    if (window["debug"] === false)
      window.location = 'skp:on_version@';
  }

  handlePositionValueTextUpdate = (value) => {
    this.setState({
      nudgePositionTextboxValue: value
    });

    var re = /^([-+]?[0-9]+[.])*[-+]?[0-9]+$/;
    var ele = value;
    var fcnt = ele.replace(/(^[ ]+|[ ]+$)/g, '');
    if (!(re.test(fcnt))) {
      alert("Please enter a valid number");
      ele.value = "25";
      return;
    }

    if (window["debug"] === false)
      window.location = 'skp:on_update_position_input@' + fcnt;
  }

  handlePositionXCheckboxClicked = (value) => {
    this.setState({
      nudgePositionXcheckboxValue: value
    });

    if (window["debug"] === false)
      window.location = 'skp:on_position_x_pressed@' + value;
  }

  handlePositionYCheckboxClicked = (value) => {
    this.setState({
      nudgePositionYcheckboxValue: value
    });

    if (window["debug"] === false)
      window.location = 'skp:on_position_y_pressed@' + value;
  }

  handlePositionZCheckboxClicked = (value) => {
    this.setState({
      nudgePositionZcheckboxValue: value
    });

    if (window["debug"] === false)
      window.location = 'skp:on_position_z_pressed@' + value;
  }

  handleRotationValueTextUpdate = (value) => {
    this.setState({
      nudgeRotationTextboxValue: value
    });

    var re = /^([-+]?[0-9]+[.])*[-+]?[0-9]+$/;
    var ele = value;
    var fcnt = ele.replace(/(^[ ]+|[ ]+$)/g, '');
    if (!re.test(fcnt)) {
      alert("Please enter a valid number");
      ele.value = "3";
      return;
    }

    if (window["debug"] === false)
      window.location = 'skp:on_update_rotation_input@' + fcnt;
  }

  handleRotationXCheckboxClicked = (value) => {
    this.setState({
      nudgeRotationXcheckboxValue: value
    });

    if (window["debug"] === false)
      window.location = 'skp:on_rotation_x_pressed@' + value;
  }

  handleRotationYCheckboxClicked = (value) => {
    this.setState({
      nudgeRotationYcheckboxValue: value
    });

    if (window["debug"] === false)
      window.location = 'skp:on_rotation_y_pressed@' + value;
  }

  handleRotationZCheckboxClicked = (value) => {
    this.setState({
      nudgeRotationZcheckboxValue: value
    });

    if (window["debug"] === false)
      window.location = 'skp:on_rotation_z_pressed@' + value;
  }

  handleScaleValueTextUpdate = (value) => {
    this.setState({
      nudgeScaleTextboxValue: value
    });

    var re = /^([-+]?[0-9]+[.])*[-+]?[0-9]+$/;
    var ele = value;
    var fcnt = ele.replace(/(^[ ]+|[ ]+$)/g, '');
    if (!re.test(fcnt)) {
      alert("Please enter a valid number");
      ele.value = "5";
      return;
    }

    if (window["debug"] === false)
      window.location = 'skp:on_update_scale_input@' + fcnt;
  }

  handleScaleXCheckboxClicked = (value) => {
    this.setState({
      nudgeScaleXcheckboxValue: value
    });

    if (window["debug"] === false)
      window.location = 'skp:on_scale_x_pressed@' + value;
  }

  handleScaleYCheckboxClicked = (value) => {
    this.setState({
      nudgeScaleYcheckboxValue: value
    });

    if (window["debug"] === false)
      window.location = 'skp:on_scale_y_pressed@' + value;
  }

  handleScaleZCheckboxClicked = (value) => {
    this.setState({
      nudgeScaleZcheckboxValue: value
    });

    if (window["debug"] === false)
      window.location = 'skp:on_scale_z_pressed@' + value;
  }

  handleRandomButtonClicked = (value) => {
    if (window["debug"] === false)
      window.location = 'skp:on_random_pressed@' + value;
  }
}

export default App;
