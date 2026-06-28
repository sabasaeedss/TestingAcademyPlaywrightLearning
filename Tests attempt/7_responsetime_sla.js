/*Response Time SLA Analyzer
As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.
Input
responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
Output
Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED
*/

function questionName(responseArray, slaLimit) {
    let answer = "";
    let index = 0;
    let min = 0;
    let max = 0;
    let breach = 0;
    responseArray = responseArray.sort((a, b) => a - b);
    while (index < responseArray.length) {
        // console.log("start loop" + index);

        if (index === 0) {
            min = responseArray[index];
            max = responseArray[index];
        }
        else {
            if (responseArray[index] > max) {
                max = responseArray[index];
            }
            if (responseArray[index] < min) {
                min = responseArray[index];
            }
            if (responseArray[index] > slaLimit) {
                breach += 1;
            }

        }
        index++;
        //     console.log("end loop" + index);
    }
    answer = `Total Requests: ${responseArray.length} Min Response: ${min} Max Response: ${max} SLA Breaches: ${breach} (${((breach / responseArray.length) * 100).toFixed(2)}) Overall Status: ${breach > 0 ? '❌ SLA VIOLATED' : 'Approved'}`;
    return answer;
}

console.log(questionName([120, 230, 450, 510, 180, 620], 700));