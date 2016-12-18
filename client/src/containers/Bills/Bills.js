import { connect } from 'react-redux';
import { BillsIndex } from '../../components/Bills';

const ConnectedBills = connect(state => state)(BillsIndex);

export default ConnectedBills;
