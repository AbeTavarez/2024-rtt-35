// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

// TODO: Gather data from dbs and return an object with the info.

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  //TODO: find where the user data is located in central db
  const dbName = await central(id);
  console.log(dbName);

  //TODO: Get basic data from db1, db2, or db3
  // const userBasicInfo = await dbs[dbName](id);
  // console.log(userBasicInfo);

  //TODO: get personal info from the vault
  // const personalInfo = await vault(id);
  // console.log(personalInfo);

  // concurrently
  const userData = await Promise.all([dbs[dbName](id), vault(id)]).then(
    ([pd, pi]) => {
      return { ...pd, ...pi };
    },
  );
  console.log(userData);
  
  return {
    // ...userBasicInfo,
    // ...personalInfo
  };
}

const user = await getUserData(6);
console.log(user);
