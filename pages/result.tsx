import { useRouter } from 'next/router'
import styles from '@/styles/result.module.css'
import Circle from '@/components/circle'
import Button from '@/components/button'

export default function Result() {
  const router = useRouter()
  const count = Number(router.query.count)
  const score = Number(router.query.score)
  const percent = Math.floor((score / count) * 100)
  return (
    count && (
      <div className={styles.result}>
        <h1>Resultado Final</h1>
        <div className={styles.values}>
          <Circle value={count} text="Perguntas" />
          <Circle value={score} text="Corretas" backgroundColor="#029CE3" />
          <Circle
            value={`${percent}%`}
            text="Pontuação"
            backgroundColor="#fdd60F"
          />
        </div>
        <div>
          <Button href="/" text={'Reiniciar'} />
        </div>
      </div>
    )
  )
}
