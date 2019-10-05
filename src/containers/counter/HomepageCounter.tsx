import * as counterActions  from '@store/counter/actions';
import Counter from '@components/counter/Counter'
import { StoreState } from '@store/index'
import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = (state: StoreState) => ({
  count: state.counter.count,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  counter_actions: bindActionCreators(counterActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
