import styles from '@/styles/timer.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimerProps {
  key: number
  onComplete: () => void
  timeToAnswer: number
}

export default function Timer(props: TimerProps) {
  const duration = props.timeToAnswer

  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={['#99e596', '#F7B801', '#ED827A', '#BF3131']}
        colorsTime={[10, 7, 4, 0]}
        size={100}
        onComplete={props.onComplete}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}
