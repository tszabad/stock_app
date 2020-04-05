const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
    .add(notification).
    then( doc => console.log("Notification added", doc))
}

exports.stockCreated = functions.firestore
.document('stocks/{stockId}')
.onCreate( (doc, context) => {
    const stock = doc.data()
    const notification = {
        content: 'Added a new stock',
        user: `${stock.authorFirstName} ${stock.authorLastName}`,
        time: doc.createTime.seconds
    }

    return createNotification(notification);
})

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
});