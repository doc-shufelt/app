import moment from 'moment';
try {
    let date = '2018-09-12';
    console.log(moment(date).format('MM/DD/YYYY'));
}
catch (error) {
    console.log(error);
}
