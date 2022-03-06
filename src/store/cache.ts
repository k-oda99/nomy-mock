import { makeVar } from '@apollo/client'
import { MEGA_MENU_ITEM_KEYS } from '../constants/megaMenuItems'

export const userDataVar = makeVar<{ [key: string]: string | number }>({
  id: '1',
  name: 'ODA',
  sex: 0,
})
export const goodStatusVar = makeVar<{ [key: string]: boolean }>({})
export const selectedMegaMenuItemKeyVar = makeVar<string>(
  MEGA_MENU_ITEM_KEYS[0]
)
