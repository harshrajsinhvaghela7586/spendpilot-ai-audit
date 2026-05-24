import {
  addDoc,
  collection,
  serverTimestamp
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function trackAuditEvent(
  tool: string,
  monthlySpend: number,
  teamSize: number
) {

  try {

    await addDoc(
      collection(db, "analytics"),
      {

        tool,

        monthlySpend,

        teamSize,

        createdAt: serverTimestamp(),
      }
    );

  } catch (error) {

    console.error(error);
  }
}