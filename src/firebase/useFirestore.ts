import {
  doc,
  DocumentData,
  DocumentReference,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Account from "../types/Account";
import { AccountType } from "../types/AccountType";
import User from "../types/User";
import { auth } from "./auth";
import { db } from "./firestoreSetup";

export function useFirestore() {
  const defaultAccount = {
    number: "chx123",
    name: "Checking",
    type: AccountType.CHECKING,
    balance: NaN,
    ledger: [],
  };
  const [firebaseUser, loading, error] = useAuthState(auth);

  const [user, setUser] = useState<User | null>(null);
  const [account, _setAccount] = useState<Account>(defaultAccount);

  const [docRef, setDocRef] = useState<DocumentReference<DocumentData> | null>(
    null
  );

  useEffect(() => {
    if (!firebaseUser) return;
    const _doc = doc(db, "users", firebaseUser.uid);
    getDoc(_doc).then((docSnapshot) => {
      if (!docSnapshot.exists()) {
        setDoc(_doc, {
          accts: {
            "00001001": {...defaultAccount, balance: 0},
          },
        });
      }
    });

    setDocRef(_doc);
  }, [firebaseUser]);

  useEffect(() => {
    if (!docRef) return;

    getDoc(docRef).then((snap) => {
      const userData = snap.data();
      console.log(userData);
      let newAccount = userData?.accts["00001001"] as Account;

      if (!newAccount) {
        newAccount = defaultAccount;
        const newAccts = { ...userData?.accts,
          "00001001": newAccount
         };
        updateDoc(docRef, {
          accts: newAccts,
        });
      }
      setAccount(newAccount);
    });
  }, [docRef]);

  const setAccount = (acct: Account) => {
    _setAccount(acct);

    if (!docRef) return;
    updateDoc(docRef, {
      accts: {
        "00001001": acct,
      },
    });
  };

  return { account, setAccount, user: firebaseUser, setUser };
}
