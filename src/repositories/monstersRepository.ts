import { Monsters } from '@/domain/Monster'

export const MonstersRepository = () => {
  const getMvps = async (): Promise<Monsters> => {
    const mvps = await import('@/../public/data/mvps.json')

    return Promise.resolve(mvps.default)
  }

  const getMinis = async (): Promise<Monsters> => {
    const minis = await import('@/../public/data/minis.json')

    return Promise.resolve(minis.default)
  }

  return { getMvps, getMinis }
}
