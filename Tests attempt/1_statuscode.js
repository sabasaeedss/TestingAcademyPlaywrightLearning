/*- 200 → "PASS - OK: Request successful"
  - 201 → "PASS - Created: Resource created successfully"
  - 301 → "WARNING - Moved Permanently: URL has changed"
  - 400 → "FAIL - Bad Request: Check request payload"
  - 401 → "FAIL - Unauthorized: Check auth token"
 - 403 → "FAIL - Forbidden: Insufficient permissions"
  - 404 → "FAIL - Not Found: Check endpoint URL"
 - 500 → "FAIL - Internal Server Error: Backend issue"
 - Any other → "UNKNOWN - Unhandled status code"*/

function questionName(input) {
    let answer = "";
    switch (input) {
        case 200: {
            answer = "PASS - OK: Request successful";
            break;
        }
        case 201: {
            answer = "PASS - Created: Resource created successfully";
            break;
        }
        case 301: {
            answer = "WARNING - Moved Permanently: URL has changed";
            break;
        }
        case 400: {
            answer = "FAIL - Bad Request: Check request payload";
            break;
        }
        case 401: {
            answer = "FAIL - Unauthorized: Check auth token";
            break;
        }
        case 403: {
            answer = "FAIL - Forbidden: Insufficient permissions";
            break;
        }
        case 404: {
            answer = "FAIL - Not Found: Check endpoint URL";
            break;
        }
        case 500: {
            answer = "FAIL - Internal Server Error: Backend issue";
            break;
        }
        default: {
            answer = "UNKNOWN - Unhandled status code";
            break;
        }
    }

    return answer;

}

console.log(questionName(200));