function sendNotification(email) {

    if(!email.includes('@')){
        return 'Invalid Email';
    }

    let emailPart = email.split('@');
    const userName = emailPart[0];
    const domaneName = emailPart[1];
    const notification = userName + " sent you an email from " + domaneName;

    return notification;
}