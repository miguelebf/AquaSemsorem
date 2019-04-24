/* eslint-disable no-dupe-keys */
import React from 'react';
import MUIDataTable from "mui-datatables";
import { withRouter} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const columns = ["Codigo", "Nombre", "Alertas"];

const data = [
 ["1", "Camaronera 1", "7"],
 ["2", "Camaronera 2", "10"],
]

class TablaCamaroneras extends React.Component{
    //Style
getMuiTheme = () => createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    overrides: {
      MUIDataTableToolbar: {
        titleText: {
        fontSize: "1.5em",
          fontWeight: "bold",
          paddingTop: 10
        },
        textAlign:{fontSize: "4em",
        fontWeight: "bold",textAlign: "center"}

      }
    }
  })    
  render(){
    const options = {
        filterType: 'textF2eld',
        selectableRows:false,
        print:false,
        download:false,
        print:false,
        onRowClick: (rowData, rowState) => {
          this.props.history.push("/camaronera")    
        }
      };
    return(
        <div>
            <MuiThemeProvider theme={this.getMuiTheme()}>
                <MUIDataTable 
                    title={"Camaroneras"} 
                    data={data} 
                    columns={columns} 
                    options={options} 
                />  
            </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(TablaCamaroneras);
