import * as fs from 'fs';
import * as path from 'path';
import * as admin from 'firebase-admin';
import { getTypedFirestoreDataConverter } from './firebase-config-common';

const serviceAccountFilename = process.env.PROD ? 'serviceAccountProd.json' : 'serviceAccount.json';
const serviceAccountUnparsed =
  process.env.SERVICE_ACCOUNT ??
  fs.readFileSync(path.join(__dirname, '..', serviceAccountFilename)).toString();
const serviceAccount = JSON.parse(serviceAccountUnparsed);

const databaseURL = process.env.PROD
  ? 'https://cornell-courseplan.firebaseio.com'
  : 'https://cornelldti-courseplan-dev.firebaseio.com';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL,
});

const db = admin.firestore();

export const usernameCollection = db
  .collection('user-name')
  .withConverter(getTypedFirestoreDataConverter<FirestoreUserName>());

export type SemesterDocumentData = {
  semesters: readonly FirestoreSemester[];
  orderByNewest: boolean;
};
export const semestersCollection = db
  .collection('user-semesters')
  .withConverter(getTypedFirestoreDataConverter<SemesterDocumentData>());

export const toggleableRequirementChoicesCollection = db
  .collection('user-toggleable-requirement-choices')
  .withConverter(getTypedFirestoreDataConverter<AppToggleableRequirementChoices>());

export const overriddenFulfillmentChoicesCollection = db
  .collection('user-overridden-fulfillment-choices')
  .withConverter(getTypedFirestoreDataConverter<FirestoreOverriddenFulfillmentChoices>());

export const subjectColorsCollection = db
  .collection('user-subject-colors')
  .withConverter(getTypedFirestoreDataConverter<Readonly<Record<string, string>>>());

export type UniqueIncrementerDocumentData = { readonly uniqueIncrementer: number };
export const uniqueIncrementerCollection = db
  .collection('user-unique-incrementer')
  .withConverter(getTypedFirestoreDataConverter<UniqueIncrementerDocumentData>());

export const onboardingDataCollection = db
  .collection('user-onboarding-data')
  .withConverter(getTypedFirestoreDataConverter<FirestoreOnboardingUserData>());

export const trackUsersCollection = db
  .collection('track-users')
  .withConverter(getTypedFirestoreDataConverter<FirestoreTrackUsersData>());
