"use client";

// @ts-ignore

/**
 *  IndexedDB Demo
 * 
 *  IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs.
 *  It is a transactional database system that allows you to store data in a structured way.
 * 
 */


import { useEffect } from "react";

// Open (or create) an IndexedDB database with the given name and store
function openDB(name: any, storeName: any) {
    return new Promise((resolve, reject) => {
      // Open or upgrade the database to version 1
      const request = indexedDB.open(name, 1);
  
      // If it's a new DB or version has changed
      request.onupgradeneeded = (event: any) => {
        const db = event.target.result;
        // Create an object store (like a table), using "id" as the primary key
        db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
      };
  
      // When successfully opened, return the DB instance
      request.onsuccess = () => resolve(request.result);
  
      // If something goes wrong, reject the promise
      request.onerror = () => reject(request.error);
    });
}

// A utility to wrap IDB requests so we can use async/await
function requestToPromise(request: any) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result); // Resolve with result
      request.onerror = () => reject(request.error);     // Or fail with error
    });
  }

export default function Page() {

    useEffect(() => {

    }, []);

    return (
        <>
            Page for Demo 1

            <button>
                Run
            </button>
        </>
    );
}