---
title: "Renpho to Home Assistant | Neil Gary Allen's Blog"
source: "https://neilgaryallen.dev/blog/renpho-to-home-assistant"
description:
tags:
  - "clippings"
NoteLevel: "Source"
NoteType: "Source"
---
## Renpho to Home Assistant

## Some Background

Following up from my previous post, I determined it was possible to login and pull my weight information from Renpho's cloud servers. What I also determined was the Renpho app hashed the password before sending it for authentication, and it looks like a version of bcrypt as the hash was different everytime, yet still verified. I found this odd, as I'm not a cryptography wizard but I have come to the conclusion.

- It looks like the app might use firebase to authenticate - I disassembled the app to try and see if I could figure out the auth procedure using jadx and found multiple references
- Right now, my only goal is to make a personal project that pulls the info into my home assistant and I don't wish to spend more time than necessary on the project.

## Where I go from here

So the next step for me, after using mitmproxy and PCAPDroid again was to determine what calls I needed to make and create a proof of concept. After prodding about I decided on these three endpoints being necessary for a bare minimum run:

- `https://renpho.qnclouds.com/api/v3/users/sign_in.json?app_id=Renpho` - This endpoint allows me to sign in using the hashed password I sniffed and get an access token.
- `https://renpho.qnclouds.com/api/v3/scale_users/list_scale_user?locale=en&terminal_user_session_key=<session key>` - this endpoint gets the users to use when querying weight
- `https://renpho.qnclouds.com/api/v2/measurements/list.json?user_id=<scale user id>&last_at=<time to retrieve from>&locale=en&app_id=Renpho&terminal_user_session_key=<session key>` - this one gets my actual measurements.

**Some notes:**  
I have removed optional arguments such as device information from the calls, as I don't think they're necessary, although I have left in locale as this alters some time based results to match BST.  
There was another argument on the third query, similar to last\_at but I wasn't 100% certain what it did or how it benefitted my needs. the remaining variable last\_at lets me determine, as a unix timestamp, the time I wish to check from. If I always check from a week ago it will bring back any measurements I have taken in the last week, realistically I only need the latest one. I could alternatively set this as a number of days ago, and when it returns empty use it to set a reminder to weigh in. I will decide this later on.

## Proof of Concept

As seems to be the case lately, I made a proof of concept in Javascript as this is the quickest method I have at present to get an idea into code, and here it is:

```javascript
// Axios for my calls, it's just what I'm most familiar with
const Axios = require('axios');
// Moment handles my date formatting, I dislike the standard JS methods
const moment = require('moment');

// password hash retrieved by sniffing packets in previous post
const password = 'my password hash';
const email = 'my email';

// basic js class
class Renpho {
        // store variables for later use on init
    constructor(email, password_hash){
        this.email = email;
        this.password_hash = password_hash;
    }

        // funciton to log in
    auth(){
        return new Promise((res, rej) => {
            Axios.post('https://renpho.qnclouds.com/api/v3/users/sign_in.json?app_id=Renpho', {
                password: this.password_hash,
                email: this.email,
                secure_flag: 1
            }).then(resp => {

                // get session key and save for future use
                this.session_key = resp.data.terminal_user_session_key;
                console.log('storing key', this.session_key);

                res(resp.data);

            })
            .catch(err => {
                console.log('uh oh', err);
                rej(err)
            })
        })
    }

        // get ids for scale users
    getScaleUsers(){
        return new Promise((res, rej) => {
            Axios.get(\`https://renpho.qnclouds.com/api/v3/scale_users/list_scale_user?locale=en&terminal_user_session_key=${this.session_key}\`)
            .then(resp =>{
                res(resp.data.scale_users);
            })
            .catch(rej)

        })
    }

        // get measurements for scale users
    getMeasurements(user_id, last_at){
        return new Promise((res, rej) => {
            Axios.get(\`https://renpho.qnclouds.com/api/v2/measurements/list.json?user_id=${user_id}&last_at=${last_at}&locale=en&app_id=Renpho&terminal_user_session_key=${this.session_key}\`)
            .then(resp => {
                res(resp.data.last_ary)
            })
            .catch(rej)
        })
    }
}

// create API instace
const API = new Renpho(email, password);

// I have a habit of this, maybe it's from reading python I think or C++
// I could also have used (async function(){})() or similar
const main = async () => {

        // login
    await API.auth();

        // get users
    const users = await API.getScaleUsers();

        // as I am only user, get id of first
    const user_id = users[0].user_id;

    console.log('user id', user_id);

        // generate timestamp for today - 1 week
    const check_time = moment().subtract(1, 'week').unix();

    console.log('check time', check_time);

        // get measurements
    const measurements = await API.getMeasurements(user_id, check_time);

    const last = measurements[0];

        // echo data I wish to use
    console.log('last weigh in', moment.unix(last.time_stamp))
    console.log('last weight in kg', last.weight)
}

// run
main();
```

And this works perfectly. The next step is to recreate this in python for use in Home Assistant.

I did also check some of these calls in Postman first, as if I couldn't auth in Postman there was no point in going any further.

## Python App

I am terrible at Python, but managed to look at existing code and a bit of a google and produced this, the same in Python 3.

```python
import requests
import json
import time
import datetime

class RenphoWeight():
    def __init__ (self, email, password_hash):
        self.email = email
        self.password = password_hash

    def auth(self):
        data = {
            'secure_flag': 1,
            'email': self.email,
            'password': self.password
        }

        r = requests.post(url = 'https://renpho.qnclouds.com/api/v3/users/sign_in.json?app_id=Renpho', data = data)

        parsed = json.loads(r.text)
        self.session_key = parsed['terminal_user_session_key']
        return parsed

    def getScaleUsers(self):
        r = requests.get(url = 'https://renpho.qnclouds.com/api/v3/scale_users/list_scale_user?locale=en&terminal_user_session_key=' + self.session_key)
        parsed = json.loads(r.text)
        return parsed['scale_users']

    def getMeasurements(self, user_id, last_at):
        r = requests.get('https://renpho.qnclouds.com/api/v2/measurements/list.json?user_id=' + user_id + '&last_at=' + str(last_at) + '&locale=en&app_id=Renpho&terminal_user_session_key=' + self.session_key)
        return json.loads(r.text)['last_ary']

API = RenphoWeight('my email', 'my password hash')

API.auth()
print(API.session_key)
users = API.getScaleUsers()

user_id = users[0]['user_id']
print(user_id)

// I understand this doesn't take into consideration timezones, but I don't
// need it to be accurate
today = datetime.date.today()
week_ago = today - datetime.timedelta(days=7)
week_ago = int(time.mktime(week_ago.timetuple()))

last_weights = API.getMeasurements(user_id, week_ago)

// print last weight in kg and time
print(last_weights[0]['weight'])
print(last_weights[0]['time_stamp'])
```

So now, running off Home Assistant's example custom integrations, I built a custom component for Home Assistant.

[Source code is on GitHub here.](https://github.com/neilzilla/hass-renpho)

What it shows:

![](https://neilgaryallen.dev/media/pages/blog/renpho-to-home-assistant/d743c65d2d-1727556762/32-untitled.png)

This is what I have on my dashboard at present. I'm going to make it flag when I haven't weighed in a few days.

Basically it creates two sensors, one for weight and one for last time as a timestamp, and with this info I can do what I desire.

![](https://neilgaryallen.dev/media/pages/blog/renpho-to-home-assistant/be8b3788f9-1727556762/35-untitled.png)

#### Like independent content?

[alifeee's webring!](https://webring.alifeee.co.uk/)

For the glory of the Indieweb!