import styles from '@/styles/title.module.css'

interface TitleProps {
  text: string
}

export default function Title(props: TitleProps) {
  return (
    <div className={styles.title}>
      <span className={styles.text}>{props.text}</span>
    </div>
  )
}
