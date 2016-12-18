import { connect } from 'react-redux';
import { HomeIndex } from '../../components/Home';

const ConnectedHome = connect(state => state)(HomeIndex);

export default ConnectedHome;
