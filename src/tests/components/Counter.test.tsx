import { shallow } from 'enzyme'
import Counter from '../../components/counter/Counter'

describe('Counter', () => {
  it('should render the text `Count: <count>` for the given count prop', () => {
    const counter_actions = {
      increment: jest.fn(),
      decrement: jest.fn()
    }
    const component = shallow(<Counter count={1} counter_actions={counter_actions} />)
    expect(component.text()).toContain('Count: 1')
  })
})
