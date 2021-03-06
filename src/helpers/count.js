import { deepForEach } from '../helpers/childrenDeepMap';
import { isTab, isTabPanel } from './elementTypes';

export function getTabsCount(children) {
  let tabCount = 0;
  deepForEach(children, child => {
    if (isTab(child)) tabCount++;
  });

  return tabCount;
}

export function getPanelsCount(children) {
  let panelCount = 0;
  deepForEach(children, child => {
    if (isTabPanel(child)) panelCount++;
  });

  return panelCount;
}

export function getFinalCount(children) {
  let finalCount = 0;
  deepForEach(children, child => {
    if (isTabFinal(child)) tabCount++;
  });

  return finalCount;
}
