function retry(testName, maxRetries = 3, delay = 200) {
    console.log(`retrying ${testName} upto ${maxRetries}, ${delay}`);
}

retry("login test");
retry("other", 5, 1000);