function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    /*
    Create a standard label for a test run dashboard.
    
    Rules:
    - Trim the suite name.
    - Lowercase the environment.
    - Append build number as build-N.
    - Join the three parts with " | ".
    
    Interview Hints
    Use string trim and lowercase.
    Keep formatting deterministic.
    
     "Smoke Suite | staging | build-42"*/

    return `${suiteName.trim()} | ${environment.toLowerCase()} | build-${buildNumber}`;
}