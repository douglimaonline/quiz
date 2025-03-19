import styles from '@/styles/timer.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimerProps {
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
        colors={['#BCE596', '#F7B801', '#ED827A']}
        colorsTime={[10, 5, 0]}
        size={100}
        onComplete={props.onComplete}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}
