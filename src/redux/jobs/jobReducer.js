const jobReducer = (state = {data:{}}, action)=> {
    switch (action.type) {
        case "JOBDATA":{
            return state = {
                ...state,
                data: action.payload   
            };
        }

        case "AllData":{
            return state = {
                ...state,
                data: action.payload   
            };
        }
        default:
            return state;

    }
   
}
export default jobReducer;