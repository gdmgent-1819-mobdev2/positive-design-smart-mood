import React from 'react';
import { Svg } from 'expo';

const { Circle, Ellipse, G, Path } = Svg;

export class Smiley extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        // Getting props
        let style = this.props.style;
        let curve = this.props.curve;

        // Array with values that change the curve of the mouth
        const moodArray = ['45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95'];
         
        return(
            <Svg style={style} height='80%' width='70%' viewBox='0 0 100 100'>
                <G strokeWidth='2' stroke='#E8E8E8'>
                    {/* Drawing the head */}
                    <Circle
                        cx='50'
                        cy='50'
                        r='45'
                        stroke='#E8E8E8'
                        strokeWidth='2.5'
                        fill='transparent'
                    />

                    {/* Drawing the eyes */}
                    <G id='eyes' fill='#E8E8E8' >
                        <Ellipse
                            cx='37'
                            cy='40'
                            rx='3'
                            ry='5'
                            scaleY='1' 
                        />
                        <Ellipse
                            cx='63'
                            cy='40'
                            rx='3'
                            ry='5'
                        />
                    </G>
                    
                    {/* Drawing the mouth */}
                    <Path 
                        d={`M 30 70 Q 50 ${moodArray[curve]} 70 70`}
                        fill='transparent' 
                    />
                </G>
            </Svg>
        );
        
    }
}