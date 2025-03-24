import styles from '@/styles/circle.module.css'

interface CircleProps {
  value: number | string
  text: string
  backgroundColor?: string
}

export default function Circle(props: CircleProps) {
  return (
    <div className={styles.circle_title}>
      <div>
        <span>{props.text}</span>
      </div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.backgroundColor ?? '#BFFC0F',
          color: '#333',
        }}
      >
        <span>{props.value}</span>
      </div>
    </div>
  )
}
