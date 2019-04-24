import React from 'react';
import MUIDataTable from "mui-datatables";
import { withRouter} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const columns = ["Codigo", "Camaronera", "Alertas"];

const data = [
 ["1", "Camaronera 1", "2"],
 ["2", "Camaronera 1", "3"],
 ["3", "Camaronera 1", "2"],
 ["4", "Camaronera 1", "1"],
 ["5", "Camaronera 2", "1"],
 ["6", "Camaronera 2", "0"],
 ["7", "Camaronera 2", "2"],
 ["8", "Camaronera 2", "2"],
 ["9", "Camaronera 2", "1"],
 ["10", "Camaronera 2", "1"],
]


class TablaPiscinas extends React.Component{
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
        this.props.history.push("/piscina")    
      }
    };
    return(
      <div>
         <MuiThemeProvider theme={this.getMuiTheme()}>
          <MUIDataTable 
              title={"Piscinas"} 
              data={data} 
              columns={columns} 
              options={options} 
          />
        </MuiThemeProvider>  
      </div>
    );
  }
}

export default withRouter(TablaPiscinas);
