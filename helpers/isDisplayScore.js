
export default (status) => {
 
    const statusNotDisplay = [0, -10, -11, -12, -14]
    return !statusNotDisplay.includes(status)
}