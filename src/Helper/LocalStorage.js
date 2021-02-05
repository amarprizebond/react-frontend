import ls from 'local-storage';

export const InitializeUserStat = () => {

    ls.set('userstat', {
        searchCount: 0,
        accuontSuggestionDismissFlagFirst: false,
        accuontSuggestionDismissFlagLast: false
    });

    return ls.get('userstat');
}

export const GetUserStat = (stats) => {
    let userstat = ls.get('userstat');
    return userstat || InitializeUserStat();
}

export const SetUserStat = (stats) => {

    let userstat = ls.get('userstat');
    let userinfo = ls.get('userinfo');

    userstat = userstat || InitializeUserStat();

    if (userinfo) {
        userstat.searchCount = 0;
        userstat.accuontSuggestionDismissFlagFirst = true;
        userstat.accuontSuggestionDismissFlagLast = true;
    } else {
        userstat.searchCount += 1;
    }

    if (stats) {
        userstat = { ...userstat, ...stats };
    }

    ls.set('userstat', userstat);
}
