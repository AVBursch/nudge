import logo from './logo.svg';
import './App.css';
import React from 'react';
import { NudgeUI } from '../src/components/Nudge_ui';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      nudgePositionXcheckboxValue = true,
      nudgePositionYcheckboxValue = false,
      nudgePositionZcheckboxValue = false,
      nudgePositionTextboxValue = '',
      nudgeRotationXcheckboxValue = true,
      nudgeRotationYcheckboxValue = false,
      nudgeRotationZcheckboxValue = false,
      nudgeRotationTextboxValue = '',
      nudgeScaleXcheckboxValue = true,
      nudgeScaleYcheckboxValue = false,
      nudgeScaleZcheckboxValue = false,
      nudgeScaleTextboxValue = '',
      randomCheckboxValue = false,


    }
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

        handleSaveButonClick={this.handleSaveButonClick}
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

    handleSaveButonClick = () => {

    }

    handleCancelButtonClick = () => {

    }

    handleApplyButtonClick = () => {

    }

    handleVersionButtonClick = () => {

    }

    handlePositionValueTextUpdate = (value) => {
      this.setState({
        nudgePositionTextboxValue: value
      });
    }

    handlePositionXCheckboxClicked = (value) => {
      this.setState({
        nudgePositionXcheckboxValue: value
      });
    }

    handlePositionYCheckboxClicked = (value) => {
      this.setState({
        nudgePositionYcheckboxValue: value
      });
    }

    handlePositionZCheckboxClicked = (value) => {
      this.setState({
        nudgePositionZcheckboxValue: value
      });
    }

    handleRotationValueTextUpdate = (value) => {
      this.setState({
        nudgeRotationTextboxValue: value
      });
    }

    handleRotationXCheckboxClicked = (value) => {
      this.setState({
        nudgeRotationXcheckboxValue: value
      });
    }

    handleRotationYCheckboxClicked = (value) => {
      this.setState({
        nudgeRotationYcheckboxValue: value
      });
    }

    handleRotationZCheckboxClicked = (value) => {
      this.setState({
        nudgeRotationZcheckboxValue: value
      });
    }

    handleScaleValueTextUpdate = (value) => {
      this.setState({
        nudgeScaleTextboxValue: value
      });
    }

    handleScaleXCheckboxClicked = (value) => {
      this.setState({
        nudgeScaleXcheckboxValue: value
      });
    }

    handleScaleYCheckboxClicked = (value) => {
      this.setState({
        nudgeScaleYcheckboxValue: value
      });
    }

    handleScaleZCheckboxClicked = (value) => {
      this.setState({
        nudgeScaleZcheckboxValue: value
      });
    }

    handleRandomButtonClicked = () => {

    }


  }
}

export default App;
