import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import AppBar from './appBar'
import web3 from "../interface/web3";
import VehicleController from "../interface/vehicleController";
import HelperFunctions from "../utils/constants";
import RaisedButton from 'material-ui/RaisedButton'
import MechanicComponent from './category/mechanicComponent'
import ShowroomComponent from './category/showroomComponent'
import InsuranceComponent from './category/insuranceComponent'
import DepartmentComponent from './category/motorDepartComponent'
import helperFunctions from '../utils/constants'

export default class SearchBar extends Component {
    state = {
        value: '',
        insuranceData : [],
        mechanicData : [],
        showroomData : [],
        motorDeptData : [],
        showData : false
    };

    handleUpdateInput = (ev) => {
        this.setState({
            value: ev.target.value
        });
    };

    submitHandler = async () => {


        const showroomData1 = await VehicleController.methods.getShowroomDataByVin1(HelperFunctions.convertStringToHex(this.state.value)).call();
        const showroomData2 = await VehicleController.methods.getShowroomDataByVin2(HelperFunctions.convertStringToHex(this.state.value)).call();
        const mechanicData1 = await VehicleController.methods.getMechanicDataByVin1(HelperFunctions.convertStringToHex(this.state.value)).call();
        const mechanicData2 = await VehicleController.methods.getMechanicDataByVin2(HelperFunctions.convertStringToHex(this.state.value)).call();
        const motorDeptData1 = await VehicleController.methods.getMotorDeptDataByVin1(HelperFunctions.convertStringToHex(this.state.value)).call();
        const motorDeptData2 = await VehicleController.methods.getMotorDeptDataByVin2(HelperFunctions.convertStringToHex(this.state.value)).call();
        const insuranceData1 = await VehicleController.methods.getInsuranceDataByVin1(HelperFunctions.convertStringToHex(this.state.value)).call();
        const insuranceData2 = await VehicleController.methods.getInsuranceDataByVin2(HelperFunctions.convertStringToHex(this.state.value)).call();
        console.log(showroomData1, showroomData2, mechanicData1, mechanicData2, motorDeptData1, motorDeptData2, insuranceData1, insuranceData2);
        let showroom1_formatted = []
        let showroom2_formatted = []
        let mechanic1_formatted = []
        let mechanic2_formatted = []
        let motor1_formatted = []
        let motor2_formatted = []
        let insurance1_formatted = []
        let insurance2_formatted = []

        for(var i=0; i<5; i++){
            showroom1_formatted[i] = []
            for(var j=0; j<2; j++){
                showroom1_formatted[i][j] = HelperFunctions.convertHexToString(showroomData1[i][j])
            }
        }
        console.log('====================================');
        console.log(showroom1_formatted);
        console.log('====================================');
                for(var i=0; i<5; i++){
            mechanic1_formatted[i] = []
            for(var j=0; j<2; j++){
            // console.log(HelperFunctions.convertHexToString(mechanic1_formatted[i][j]))
                mechanic1_formatted[i][j] = HelperFunctions.convertHexToString(mechanicData1[i][j])
            }
        }
        console.log('====================================');
        console.log(mechanic1_formatted);
        console.log('====================================');
                for(var i=0; i<5; i++){
            motor1_formatted[i] = []
            for(var j=0; j<2; j++){
            // console.log(HelperFunctions.convertHexToString(motor1_formatted[i][j]))
                motor1_formatted[i][j] = HelperFunctions.convertHexToString(motorDeptData1[i][j])
            }
        }
        console.log('====================================');
        console.log(motor1_formatted);
        console.log('====================================');
                for(var i=0; i<5; i++){
            insurance1_formatted[i] = []
            for(var j=0; j<2; j++){
            // console.log(HelperFunctions.convertHexToString(insurance1_formatted[i][j]))
                insurance1_formatted[i][j] = HelperFunctions.convertHexToString(insuranceData1[i][j])
            }
        }
        console.log('====================================');
        console.log(
        insurance1_formatted
        );
        console.log('====================================');
                for(var i=0; i<5; i++){
            showroom2_formatted[i] = []
            for(var j=0; j<2; j++){
                if(i !== 3){
                    let milliseconds = showroomData2[i][j].toString()
                    var date = new Date(milliseconds/1000);
                console.log(date);
                showroom2_formatted[i][j] = date.toString()
            }
                }
        }
        console.log(showroom2_formatted)
        for(var i=0; i<5; i++){
            mechanic2_formatted[i] = []
            for(var j=0; j<2; j++){
                if(i !== 3){
                mechanic2_formatted[i][j] = HelperFunctions.convertHexToString(mechanicData2[i][j])
            } else {
                let milliseconds = mechanicData2[i][j].toString()
                    var date = new Date(milliseconds/1000);
                console.log(date);
                mechanic2_formatted[i][j] = date.toString()
            }
            }
        }
        console.log('====================================');
        console.log(mechanic2_formatted);
        console.log('====================================');

                for(var i=0; i<5; i++){
            motor2_formatted[i] = []
            for(var j=0; j<2; j++){
            // console.log(HelperFunctions.convertHexToString(motor1_formatted[i][j]))
                if(i !== 3){
                    let milliseconds = motorDeptData2[i][j].toString()
                    var date = new Date(milliseconds/1000);
                console.log(date);
                motor2_formatted[i][j] = date.toString()
                    
            }
            }
        }
        console.log('====================================');
        console.log(motor2_formatted);
        console.log('====================================');

                for(var i=0; i<4; i++){
            insurance2_formatted[i] = []
            for(var j=0; j<2; j++){
            // console.log(HelperFunctions.convertHexToString(insurance1_formatted[i][j]))
                if(i !== 2){

                    let milliseconds = insuranceData2[i][j].toString()
                    var date = new Date(milliseconds/1000);
                console.log(date);
                insurance2_formatted[i][j] = date.toString()

            }
            }
        }
        console.log('====================================');
        console.log(insurance2_formatted);
        console.log('====================================');

        let arr_showroom = [], arr_motor = [], arr_insurance = [], arr_mechanic = []
        for(let i=0; i<2; i++){
          let data = {};
          data.vin = showroom1_formatted[0][i];
          data.ownerDetail = showroom1_formatted[1][i];
          data.modelDetail = showroom1_formatted[2][i];
          data.carCost = showroom1_formatted[3][i];
          data.carLoan = showroom1_formatted[4][i];
          data.showroomName = showroom2_formatted[0][i];
          data.showroomAddress = showroom2_formatted[1][i];
          data.showroomId = showroom2_formatted[2][i];
          data.issuedDate = showroom2_formatted[3][i];
          data.additionalDetails = showroom2_formatted[4][i];
          arr_showroom.push(data)
        }


        for(let i=0; i<2; i++){
            let data = {};
            data.vin = motor1_formatted[0][i];
            data.ownerName = motor1_formatted[1][i];
            data.regId = motor1_formatted[2][i];
            data.milesOnCar = motor1_formatted[3][i];
            data.modelDetail = motor1_formatted[4][i];
            data.numberPlate = motor2_formatted[0][i];
            data.motorDeptCity = motor2_formatted[1][i];
            data.motorDeptAddress = motor2_formatted[2][i];
            data.issuedDate = motor2_formatted[3][i];
            data.additionalDetails = motor2_formatted[4][i];
            arr_motor.push(data)
          }

          for(let i=0; i<2; i++){
            let data = {};
            data.vin = mechanic1_formatted[0][i];
            data.shopId = mechanic1_formatted[1][i];
            data.shopName = mechanic1_formatted[2][i];
            data.shopAddress = mechanic1_formatted[3][i];
            data.carDetails = mechanic1_formatted[4][i];
            data.workDescription = mechanic2_formatted[0][i];
            data.moneyCharged = mechanic2_formatted[1][i];
            data.typeOfWork = mechanic2_formatted[2][i];
            data.issuedDate = mechanic2_formatted[3][i];
            data.additionalDetails = mechanic2_formatted[4][i];
            arr_mechanic.push(data)
          }


          for(let i=0; i<2; i++){
            let data = {};
            data.vin = insurance1_formatted[0][i];
            data.insuranceNumber = insurance1_formatted[1][i];
            data.numOfInsurance = insurance1_formatted[2][i];
            data.insuranceDetail = insurance1_formatted[3][i];
            data.insuranceId = insurance1_formatted[4][i];
            data.insuranceCompanyName = insurance2_formatted[0][i];
            data.insuranceCompanyAddress = insurance2_formatted[1][i];
            data.issuedDate = insurance2_formatted[2][i];
            data.additionalDetail = insurance2_formatted[3][i];
            arr_insurance.push(data)
          }

          this.setState({
            insuranceData : arr_insurance,
            mechanicData : arr_mechanic,
            showroomData : arr_showroom,
            motorDeptData : arr_motor,
            showData : true
          });
    };

    render() {
        return (
            <div>
                <AppBar/>
                <div style={{width: 'fit-content', margin: 'auto', marginTop: '50px'}}>
                    <TextField
                        hintText="345567"
                        floatingLabelText="Enter VIN number here"
                        onChange={this.handleUpdateInput}
                    />
                    <RaisedButton label="Submit" primary={true} onClick={this.submitHandler}/>
                </div>
                {
          (this.state.showData) ? (
            <div style = {{width : '600px', margin : 'auto'}}>
              <MechanicComponent data = {this.state.mechanicData}/>
              <ShowroomComponent data = {this.state.showroomData}/>
              <InsuranceComponent data ={this.state.insuranceData} />
              <DepartmentComponent data = {this.state.motorDeptData}/>
            </div>
          ):(null)
        }
            </div>
        );
    }
}