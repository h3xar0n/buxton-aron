// Not going to set up a server for this exercise or XHR request for this exercise
var json = `{
    "data": {
        "recentActivities": [{
                "nodeType": 17,
                "nodeTypeString": "Comment",
                "nodeid": 12324,
                "title": "Re: What is for dinner?",
                "postDate": 1468334737000,
                "author": "Tony Handy",
                "authorId": 1,
                "authorAvatar": "/resources/avatar1465389809397.png"
            },
            {
                "nodeType": 2,
                "nodeTypeString": "Idea",
                "nodeid": 12319,
                "title": "What is the best place for happy hour?",
                "postDate": 1468334687000,
                "author": "Tony Handy",
                "authorId": 1,
                "authorAvatar": "/resources/avatar1465389809397.png"
            },
            {
                "nodeType": 18,
                "nodeTypeString": "Reply",
                "nodeid": 12318,
                "title": "Re: What is for dinner?",
                "postDate": 1468334438000,
                "author": "Elmo Elmo",
                "authorId": 364,
                "authorAvatar": "/resources/avatar1461606369555.jpg"
            },
            {
                "nodeType": 17,
                "nodeTypeString": "Comment",
                "nodeid": 12317,
                "title": "Re: What is for dinner?",
                "postDate": 1468334413000,
                "author": "Elmo Elmo",
                "authorId": 364,
                "authorAvatar": "/resources/avatar1461606369555.jpg"
            },
            {
                "nodeType": 2,
                "nodeTypeString": "Idea",
                "nodeid": 12312,
                "title": "What is for dinner?",
                "postDate": 1468334214000,
                "author": "Cooke Monster",
                "authorId": 380,
                "authorAvatar": "/resources/users/no_avatar.gif"
            }
        ]
    },
    "success": true
}`;

var appData = JSON.parse(json);