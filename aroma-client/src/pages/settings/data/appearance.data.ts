import {
  setIsDynamicNavigationBar,
  setIsTransparentNavigationBar,
  TypeItemSwitch
} from '@/entities/setting'

export const APPEARANCE_DATA: TypeItemSwitch[] = [
  {
    title: 'Dynamic navigation bar',
    action: setIsDynamicNavigationBar,
    selector: state => state.appearance.isDynamicNavigationBar
  },
  {
    title: 'Transparent navigation bar',
    action: setIsTransparentNavigationBar,
    selector: state => state.appearance.isTransparentNavigationBar
  }
]
