import type { Spawn } from './Spawn'

type Locale = 'en' | 'pt-BR'

type Name = Record<Locale, string>

export type Monster = {
  id: number
  dbname: string
  name: Name
  spawn: Array<Spawn>
}

export type Monsters = Record<string, Monster>
