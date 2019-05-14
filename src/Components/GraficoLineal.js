import React, { PureComponent, Component } from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import {BarChart} from 'recharts/';
import {Bar} from 'recharts/';
import {ReferenceLine} from 'recharts/';

import Legend from 'recharts/lib/component/Legend';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  title: {
      fontSize: 18,
      padding: 15,
      fontWeight: "bold",

    },
});



const data = [];
  
  const initialState = {
    data,
    barIndex : 'uv',
    left : 0,
    right : 0,
    temp:0
  };
  
  class StreamingDemo extends React.Component {
  
      constructor(props) {
      super(props);
      this.state = initialState;
      
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.handleChangeData(),
        1000
      );
    }
    
    handleChangeData(){  
          
          // shift
      this.setState( ( { data : cdata, left = 0 } ) => {
        var f=new Date(); 
          return { 
            
            data : cdata.concat( { name : (f.getHours()+":"+f.getMinutes()+":"+f.getSeconds())+'', uv : 0} ), 
            animation : true, 
            left : left - 45
          };
      } );  
  
          // insert
      setTimeout( () => {
          this.setState( ( { data : cdata } ) => {
            this.setState({
              temp:parseInt(Math.round(Math.random()*(this.props.mayor-this.props.menor)+this.props.menor))
            });
            cdata[ cdata.length - 1 ].uv = this.state.temp;
            return { data : cdata.slice(), animation : false }
        } ); 
      }, 10 );
    };
  
    render() {
      const { data, barIndex,animation, left, right } = this.state;
      const { classes } = this.props;
      return (
        <div>
        <Paper>
          <div className={classes.title}>{this.props.titulo}: {this.state.temp} {this.props.unit}</div>
        <ResponsiveContainer width="99%" height={220}>
        
            <LineChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
            >
              <CartesianGrid stroke='#003C72'/>
              <XAxis dataKey="name" padding={{left: left, right: -300}} tick={true} domain={['dataMin -5', 'dataMax + 5']}/>
              <YAxis type="number" domain={[38, 40]}/>
              <Tooltip />
              <Line type='natural' dataKey={barIndex}  dot={false} stroke='#f49842' isAnimationActive={animation} animationEasing={'linear'} animationDuration={1000}/>
            </LineChart> 
            </ResponsiveContainer>
          </Paper>

        </div>
      );
    }
  }

export default withStyles(styles)(StreamingDemo);