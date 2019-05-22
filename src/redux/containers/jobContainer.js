import { connect } from "react-redux";
import Company from '../../components/company';
import Main from '../../components/main';
import {addJob} from '../jobs/jobAction';
import {JobListing} from '../jobs/jobAction';

const mapStateToProps=(state)=>{
    return {       
        Job_Listing:state.jobs.data
           }
 }

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        addJob: (company_data) => dispatch(addJob(company_data)),
        JobListing: () => dispatch(JobListing()), 

    }
}
export const company= connect(null, mapDispatchToProps)(Company);
export const main = connect(mapStateToProps, mapDispatchToProps)(Main);