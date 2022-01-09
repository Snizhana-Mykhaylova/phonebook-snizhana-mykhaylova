import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook-actions';
import * as selectors from '../../redux/phonebook-selectors';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type='text' value={value} onChange={onChange} />
  </label>
);
const mapStateToProps = (state) => ({
  value: selectors.getFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(actions.filterChange(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
