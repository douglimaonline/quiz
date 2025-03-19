import styles from '@/styles/button.module.css'
import Link from 'next/link'

interface ButtonProps {
  text: string
  href?: string
  onclick?: (e: any) => void
}

export default function Button(props: ButtonProps) {
  const href = props.href
  function renderButton() {
    return (
      <button className={styles.button} onClick={props.onclick}>
        {props.text}
      </button>
    )
  }

  return href ? <Link href={href}>{renderButton()}</Link> : renderButton()
}
