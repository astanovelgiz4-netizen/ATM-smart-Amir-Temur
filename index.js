const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

// Test natijasi
exports.submitTest = functions.https.onCall(async (data, context) => {
    const { userId, testId, score } = data;
    await db.collection("tests").doc(testId).collection("results").doc(userId).set({ score });
    return { success: true };
});

// Olimpiada natijasi
exports.submitOlympiad = functions.https.onCall(async (data, context) => {
    const { userId, olympiadId, score } = data;
    await db.collection("olympiads").doc(olympiadId).collection("results").doc(userId).set({ score });
    return { success: true };
});

// Push notification
exports.sendPush = functions.https.onCall(async (data, context) => {
    const { title, message, token } = data;
    const payload = { notification: { title, body: message } };
    await admin.messaging().sendToDevice(token, payload);
    return { success: true };
});
