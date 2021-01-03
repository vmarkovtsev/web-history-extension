# How to setup Cloud Firestore from scratch

Please skip steps as needed. This guide supposes that you start with nothing.

## Register Google Cloud account

Go to [console.google.cloud.com](https://console.google.cloud.com) and follow the instructions to register. You will have to add the billing information, but don't worry: there are no subsription charges, and you don't pay anything to Google if you don't use anything in Google Cloud.

Then go to [Billing](https://console.cloud.google.com/billing), choose "My Billing Account", then to "Budgets & alerts" and click "CREATE BUDGET". Give whatever name and set the value of $1. This is not strictly necessary, but it should give you confidence that you are not charged unexpectedly for whatever reason.

## Create a new Google Cloud Project

Go to [New Project](https://console.cloud.google.com/projectcreate) and create a new project. Name it "Web History", for example.

## Register Firebase project

Go to [console.firebase.google.com/](https://console.firebase.google.com/). It will offer to link to your Google Cloud project, choose "Web History" and choose "Spark" free plan. In my case, it first created a paid plan and then immediately downgraded once Firebase project was created.

## Setup Firestore

Go to "Cloud Firestore" in the Firebase console, create the database in "Production" mode. Then go to "Rules" and copy-paste this code:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write;
    }
  }
}
```

In other words, you allow everyone with the Firebase API key to write to the DB but nobody can read.

## Create the web application

Go to "Project Overview" and click "Add app". Choose "Web" `</>` as the platform. Give it some name and don't activate the hosting option. Click "Register app".
Copy `apiKey` and `projectId` from the displayed code snippet.
