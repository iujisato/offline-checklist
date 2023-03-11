# Milk Checklist
This is an application made for a test, it's a CheckList manager that is built on an offline first approach using Realm and React Context.
Within it, you can Read, Create and Update checklists.
- The app automatically synchronizes with the server on network changes (triggering online/offline modes).
- All the data is saved on the local database, internet is required only for syncing the data.

### Requirements
- Node 18
  - Be sure to not use Node 19 (there's a bug related to it so the dependencies wont be installed)
- Make sure to run in debug mode
  - Clear HTTP traffic not allowed on release builds for android, iOS is working as expected because I've added a domain exception for the api.

### Getting started
- Clone the repository
- Install dependencies using Yarn (NPM not tested)
- On the project folder, run 
```
cp .env.example .env 

// if this was a real application .env.example would not be populated
```
- Start the JS server
- Compile the artifact

