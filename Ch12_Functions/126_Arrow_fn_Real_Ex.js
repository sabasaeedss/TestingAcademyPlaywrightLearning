// if statusCode >= 200 and <300

function validateStatus(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}

const validateStatus_expression = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}

const validateStatus_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}
