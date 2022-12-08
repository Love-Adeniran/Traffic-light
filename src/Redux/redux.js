import { createSlice } from '@reduxjs/toolkit'

const trafficSlice = createSlice({
  name: 'trafficLight',
  initialState: {
    number: 1,
    color1: 'Red',
    color2: 'Yellow',
    color3: 'Green'
  },
  reducers:{
    activate: (state,actions)=>{
        if(actions.payload===1){
            state.color1 = 'ActiveRed'
            state.color2 = 'Yellow'
            state.color3 = 'Green'
        }
        else if(actions.payload===2){
            state.color1 = 'Red'
            state.color2 = 'ActiveYellow'
            state.color3 = 'Green'
        }
        else if(actions.payload===3){
            state.color1 = 'Red'
            state.color2 = 'Yellow'
            state.color3 = 'ActiveGreen'
        }
        else{
            state.color1 = 'Red'
            state.color2 = 'Yellow'
            state.color3 = 'Green' 
        }
    }
    
  }
  
})
export const { activate } = trafficSlice.actions
export default trafficSlice.reducer