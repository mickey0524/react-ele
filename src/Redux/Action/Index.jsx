
export const CHANGE_BOTTOM_BAR = 'CHANGE_BOTTOM_BAR'
export const CHANGE_TOP_BAR = 'CHANGE_TOP_BAR'

export const changeBottomBar = (bottomChoose) => {
    return {
        type: CHANGE_BOTTOM_BAR,
        bottomChoose
    }
}

export const changeTopBar = (topBar) => {
    return {
        type: CHANGE_TOP_BAR,
        topBar
    }
}
