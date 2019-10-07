import Icon from '@components/icon/Icon'

interface CounterProps {
  count: number
  counter_actions: {
    increment: () => void,
    decrement: () => void
  }
}

const Counter: React.SFC<CounterProps> = ({ count, counter_actions }) => {
  const onAdd = () => counter_actions.increment()
  const onRemove = () => counter_actions.decrement()
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={onAdd}>
        <Icon name={'plus'} /> Add
      </button>
      <button onClick={onRemove}>
        <Icon name={'minus'} /> Remove
      </button>
    </>
  )
}

export default Counter
