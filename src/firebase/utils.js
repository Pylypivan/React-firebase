import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { fireBaseConfig } from './config';

firebase.initializeApp(fireBaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters( {prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handlUserProfile = async (userAuth, addictionalData) => {
    if (!userAuth) return;
    const {uid} = userAuth;

    const userRef = firestore.doc(`users/ ${uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
         const { displayName, email } = userAuth;
         const timestamp = new Date();

        try {
             await userRef.set({
                    displayName,
                    email,
                    createDate: timestamp,
                    ...addictionalData
             });
        } catch(err) {
            // console.log('err');
        }
    }
    return userRef;
};





