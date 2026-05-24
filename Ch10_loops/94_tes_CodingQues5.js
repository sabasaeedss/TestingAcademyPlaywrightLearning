function filterSupportedJsBasicsTopics(topics) {
    /*Given a noisy list of topic labels, keep only supported chapter terms and remove duplicates.
    
    Rules:
    - Trim and lowercase each item.
    - Allow known aliases from the chapter group.
    - Return canonical topic keys in first-seen order.
    - Skip unsupported values.
    Interview Hints
    Use an alias map for canonical names.
    Dedup with result.includes for simple arrays.*/
    const supportedTerms = ["node", "v8", "npm"];
    let resultArray = [];
    for (let i = 0; i < topics.length; i++) {
        if (supportedTerms.includes(topics[i].toLowerCase().trim()) === true) {
            if (!resultArray.includes(topics[i].toLowerCase().trim()))
                resultArray.push(topics[i].toLowerCase().trim());
        }
    }
    return resultArray;
}