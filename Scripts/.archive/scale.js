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
            Axios.get(`https://renpho.qnclouds.com/api/v3/scale_users/list_scale_user?locale=en&terminal_user_session_key=${this.session_key}`)
            .then(resp =>{
                res(resp.data.scale_users);
            })
            .catch(rej)

        })
    }

        // get measurements for scale users
    getMeasurements(user_id, last_at){
        return new Promise((res, rej) => {
            Axios.get(`https://renpho.qnclouds.com/api/v2/measurements/list.json?user_id=${user_id}&last_at=${last_at}&locale=en&app_id=Renpho&terminal_user_session_key=${this.session_key}`)
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
async function scale() {
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

module.exports = scale