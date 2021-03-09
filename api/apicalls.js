export const getLabListById = () => {
    return fetch(`https://avicennatest.patientheal.com/Services/api/LabRequestService/GetTestListByLabId?LabId=1`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer TlJDW66Ozn6FEgkRZ4E8kNEjolM3QoHoyt_FBqj7XJXBr_sTskQfhYPElhlR_ZwdMS7iJVJd_VTgFSrmA7lDfXpJ6px6i7G2QXO0llZSXh6Z4s18lTzJf5FzxuhbH6t4dte83taXXDaHd8dGCDVZML-G8mDl5x15LP_luu9g__l-GgTiU5lnsavRBynCMK0D5bJCo8lY7j_MAw1XiJc2iGhE0a436BAcyv07b8jWjROb69UGOAWBJA293QaV_u4XoAo82QfDLdeJRx5hhiqjSGvVV9j0miVq-dxm9knS5SHAzQWHHFGbzjUy-_p5Ch97m-Vj6cJua_l7EDbv0Rzw7XNxMdykGO4UPBJJ6slrB6GNq9mJPsag1UjHPWMuxM7rJvfWhM9gnxeuNlETMi1UiiIfR_Kp80Iu3L8MARxf4UkdUTMqWnAqID03nBbkgz6pQ6dR0psKDLGPnskDLo8bRGG3QTgWkvHxWbItO6NjkWjHlobWa-z8WaJWxvczO2ua4pYVHuDIt6Ov7QX1oF3EzMLvv0nRw_An6AsR_jCctwM3PKpg8SAGKLSlcg2roZWfM5X9NLcCRgJ8LRLaKlWs2UFjokGiBy8HvHmEf0oocTPiJDavwBw9lh7qh6oB_jHoB08PJy77rmWIx2sOYTHFrGyihpd7ISU7Gxefeyq850yhw-2RbJDEgbflXS8AfAMTz1n55wFwFzs3_KB4lg4BNhHYogCUipJKLcD7NAIQMAEKrc21eqEJsW1MLmeOlET7N6lxgQ`
        }
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}