"use client";

import { useState, useEffect, useMemo } from "react";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const useEventController = () => {
  const [eventData, setEventData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // const fetchEventData = async () => {
  //   try {
  //     setLoading(true);
  //     const eventRef = firebase.firestore().collection("events").doc(eventId);
  //     const snapshot = await eventRef.get();
  //     if (snapshot.exists) {
  //       setEventData(snapshot.data());
  //     } else {
  //       console.log("Event not found");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching event data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const setupEventData = async () => {
    try {
      await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      });
    } catch (error) {
      console.error("Error updating event data:", error);
    }
  };

  const getEventData = async () => {
    try {
      const ref = collection(db, "event");
      const docSnap = await getDocs(ref);
      docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error("Error getEventData event data:", error);
    }
  };

  //   const updateEventData = async (newData: any) => {
  //     try {
  //       setEventData(newData);
  //       setLoading(true);
  //       const eventRef = db.firestore().collection("events").doc(eventId);
  //       await eventRef.update(newData);
  //       console.log("Event data updated successfully");
  //     } catch (error) {
  //       console.error("Error updating event data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return [eventData, loading, setupEventData, getEventData];
  // return useMemo(() => [ eventData, loading, updateEventData ], [ eventData, loading, updateEventData ]);
};

export default useEventController;
