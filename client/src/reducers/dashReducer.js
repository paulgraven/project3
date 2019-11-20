import { 
    DASH_LOADING,
    DASH_ERROR
 } from "../actions/types";


const initailState ={
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}


export default function (state = initailState, action){
    const {type, payload} = action;

    // eslint-disable-next-line default-case
    switch(type){
        case DASH_LOADING:
            return{
                ...state,
                profile: payload,
                loading: false
            };
        case DASH_ERROR:
            return{
                ...state,
                profile: payload,
                loading: false
            };
            default:
                return state;
                
        
    }
}